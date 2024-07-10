import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Form,
  Pagination,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import Layout from "../../Component/Layout";
import useAuth from "../../hooks/useAuth";
import { TokenBalance } from "../../helpers/xotakBalanceHelper";
import { getDollarPrice } from "../../helpers/getConvertedPrice";
import { buyXotakBNB } from "../../helpers/buyXotakBNBHelper";
import Contracts from "../../Json/ContractList.json";
const ContractList = Contracts.Contracts[0];
const xotakAddress = ContractList.xotakToken;
import { toast } from "react-toastify";
import { encryptData } from "../../Encrypt-Decrypt/encryption-decryption";
import axiosMain from "../../http/axios/axios_main";

export const Buycoin = () => {
  const { Wallet, user } = useAuth();
  console.log("Wallet", Wallet);
  const [xotakBalance, setXotakBalance] = useState(0);
  const [balance, setBalance] = useState(0);
  const [amountFrom, setAmountFrom] = useState(0);
  const [Rate, setRate] = useState(0);
  const [disable, setDisable] = useState(false);

  const [tokenInNew, setTokenInNew] = useState({
    address: "0x0000000000000000000000000000000000000000",
    symbol: "BNB",
    chainId: "97",
    logos: "https://assets.taboo.io/icons/bnb.png",
  });

  useEffect(() => {
    if (Wallet) {
      getXotakBalance();
    }
  }, [tokenInNew, Wallet?.selectedAccount, Wallet]);

  const getXotakBalance = async () => {
    try {
      const payload = {
        chainId: parseInt(tokenInNew.chainId),
        walletAddress: Wallet.selectedAccount,
        tokenAddress: xotakAddress,
      };

      const getBalData = await TokenBalance(payload);
      if (getBalData) {
        setXotakBalance(getBalData.balance);
      } else {
        setXotakBalance(0);
      }
    } catch (err) {
      setXotakBalance(0);
    }
  };

  useEffect(() => {
    if (Wallet) {
      getBalanceAllownce();
    }
  }, [tokenInNew, Wallet?.selectedAccount, Wallet]);

  const getBalanceAllownce = async () => {
    console.log("yha ");
    try {
      const payload = {
        chainId: parseInt(tokenInNew.chainId),
        walletAddress: Wallet.selectedAccount,
        tokenAddress: tokenInNew.address,
      };

      const getAllowanceData = await TokenBalance(payload);
      console.log("getAllowanceData", getAllowanceData);
      if (getAllowanceData) {
        setBalance(getAllowanceData.balance);
      } else {
        setBalance(0);
      }
    } catch (err) {
      setBalance(0);
      console.log(err);
    }
  };

  useEffect(() => {
    getAmountOut();
  }, [amountFrom]);

  const getAmountOut = async () => {
    try {
      const getData = await getDollarPrice("BNB");

      let finalPrice = getData * (amountFrom / 0.012);
      setRate(finalPrice);
    } catch (err) {
      setRate(0);
    }
  };

  const buyXotak = async () => {
    setDisable(true);
    try {
      const buyPayload = {
        tokenIn: tokenInNew.address,
        amount: amountFrom,
        AmountOut: Rate,
        chainId: parseInt(tokenInNew.chainId),
        type: Wallet.type,
        userAddress: Wallet.selectedAccount,
      };

      const buyRes = await buyXotakBNB(buyPayload);
      console.log("buyRes", buyRes);
      const RowCurrency = await encryptData("BNB");
      const RowWallet = await encryptData(Wallet.selectedAccount);
      const RowAmountIN = await encryptData(amountFrom);
      const RowAmountOut = await encryptData(Rate);
      const RowStatusIn = await encryptData("Sucess");
      const RowIncomingHash = await encryptData(buyRes?.transactionHash);
      const RowNetworkFrom = await encryptData(tokenInNew.chainId);

      const SavePayload = {
        currency: RowCurrency,
        walletAddress: RowWallet,
        amountIn: RowAmountIN,
        amountOut: RowAmountOut,
        statusIn: RowStatusIn,
        incomingTrxHash: RowIncomingHash,
        networkFrom: RowNetworkFrom,
      };

      if (buyRes) {
        // write api code here
        const api = await axiosMain.post("/buy-transaction-save", SavePayload, {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${user.token}`,
          },
        });
        if (api?.data?.status) {
          toast.success(api?.data?.message);
          setAmountFrom(0);
          setRate(0);
          getBalanceAllownce();
          getXotakBalance();
        } else {
          toast.error(api?.data?.message);
        }
        console.log(api, "api");
      } else {
        toast.error("Transaction Reverted");
      }
    } catch (err) {
      setDisable(false);
      console.log(err);
      toast.error("Transaction Reverted");
    }
  };

  return (
    <>
      <Layout>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    {/* <h2 className="inner-page-heading mb-2">Buy Coin</h2>
                     */}
                    <Row>
                      <Col lg={6} className="m-auto">
                        <div className="buy-coin-box">
                          <h3 className="text-center">Buy XOTAK Coin</h3>
                          {/* <div className="swap-dropdown">
                            <div>
                              <Dropdown className="coin-dropdown">
                                <Dropdown.Toggle
                                  className="coin-select-btn"
                                  id="dropdown-basic">
                                  <img
                                    src="assets/img/btc.png"
                                    loading="lazy"
                                    alt="Img" />
                                  USDT
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <img
                                      src="assets/img/btc.png"
                                      loading="lazy"
                                      alt="Img" />
                                    USDT
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <img
                                      src="assets/img/btc.png"
                                      loading="lazy"
                                      alt="Img" />
                                    USDT
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <img
                                      src="assets/img/btc.png"
                                      loading="lazy"
                                      alt="Img" />
                                    USDT
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <img
                                      src="assets/img/btc.png"
                                      loading="lazy"
                                      alt="Img" />
                                    USDT
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <img
                                      src="assets/img/btc.png"
                                      loading="lazy"
                                      alt="Img" />
                                    USDT
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <img
                                      src="assets/img/btc.png"
                                      loading="lazy"
                                      alt="Img" />
                                    USDT
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>

                              <p>Current Balance {balance ? balance.toFixed(4) : 0}</p>
                            </div>
                            <FormControl
                              placeholder=""
                              name="amountFrom"
                              onChange={(e) => {
                                setAmountFrom(e.target.value);
                              }}
                              value={amountFrom}
                            />
                          </div> */}
                          <div>
                            <div className="swap-sec-box">
                              <div>
                                <img
                                  src="assets/img/BNB.png"
                                  loading="lazy"
                                  alt="Img"
                                />
                                BNB
                              </div>
                              <p>
                                BNB Balance {balance ? balance.toFixed(4) : 0}
                              </p>
                            </div>
                            <FormControl
                              placeholder=""
                              name="amountFrom"
                              onChange={(e) => {
                                setAmountFrom(e.target.value);
                              }}
                              value={amountFrom}
                            />
                          </div>
                          <div className="swap-row">
                            <img
                              src="assets/img/swap.png"
                              loading="lazy"
                              alt="Img"
                            />
                          </div>
                          <div>
                            <div className="swap-sec-box">
                              <div>
                                <img
                                  src="assets/img/coin.png"
                                  loading="lazy"
                                  alt="Img"
                                />
                                XOTAK
                              </div>
                              <p>
                                XOTAK Balance{" "}
                                {xotakBalance ? xotakBalance.toFixed(4) : 0}
                              </p>
                            </div>
                            <FormControl
                              placeholder="Total amount"
                              name="Rate"
                              value={Rate ? Rate.toFixed(4) : 0}
                            />
                          </div>

                          <div>
                            {/* <button className="common-btn w-100 m-0 mt-3">Buy Now</button> */}
                            {amountFrom <= 0 ? (
                              <button
                                className="common-btn w-100 m-0 mt-3"
                                style={{ maxWidth: "-webkit-fill-available" }}
                              >
                                Please enter amount
                              </button>
                            ) : balance < amountFrom ? (
                              <button
                                className="common-btn w-100 m-0 mt-3"
                                style={{ maxWidth: "-webkit-fill-available" }}
                              >
                                Insufficient balance
                              </button>
                            ) : (
                              <button
                                className="common-btn w-100 m-0 mt-3"
                                style={{ maxWidth: "-webkit-fill-available" }}
                                onClick={() => {
                                  buyXotak();
                                }}
                                disabled={disable}
                              >
                                {disable === true ? "Please Wait" : "Buy Now"}
                              </button>
                            )}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};
