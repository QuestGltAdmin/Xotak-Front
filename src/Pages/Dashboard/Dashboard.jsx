import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Dropdown,
  InputGroup,
  Tabs,
  Tab,
} from "react-bootstrap-v5";
import Layout from "../../Component/Layout";
import Marquee from "react-fast-marquee";
import {
  getDollarPrice,
  getDollarPriceMatic,
} from "../../helpers/getConvertedPrice";
import { TokenBalance } from "../../helpers/xotakBalanceHelper";
import useAuth from "../../hooks/useAuth";
import Contracts from "../../JSON/ContractList.json";
const ContractList = Contracts.Contracts[0];
const xotakAddress = ContractList.xotakToken;

import { useNavigate } from "react-router-dom";
import axiosMain from "../../http/axios/axios_main";
import moment from "moment";

const Dashboard = () => {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  const { Wallet, user } = useAuth();
  //===============End of code====================//

  const [maticprice, setMaticPrice] = useState(0);
  const [bnbprice, setBNBPrice] = useState(0);
  const [ethprice, setETHPrice] = useState(0);
  const [xotakBalance, setXotakBalance] = useState(0);
  const [usdBalance, setUSDBalance] = useState(0);
  const [showDataTrxAll, setShowDataTrxAll] = useState([]);

  useEffect(() => {
    handlexotakPriceMatic();
    handlexotakPriceBNB();
    handlexotakPriceETH();
  }, []);

  const handlexotakPriceMatic = async () => {
    try {
      const maticprices = await getDollarPriceMatic();
      if (maticprices) {
        setMaticPrice(maticprices);
      }
    } catch (error) {
      console.error("Error to change:", error);
    }
  };
  const handlexotakPriceETH = async () => {
    try {
      const ethprice = await getDollarPrice("ETH");
      if (ethprice) {
        setETHPrice(ethprice);
      }
    } catch (error) {
      console.error("Error to change:", error);
    }
  };
  const handlexotakPriceBNB = async () => {
    try {
      const bnbprice = await getDollarPrice("BNB");
      if (bnbprice) {
        setBNBPrice(bnbprice);
      }
    } catch (error) {
      console.error("Error to change:", error);
    }
  };

  useEffect(() => {
    if (Wallet) {
      getXotakBalance();
    }
  });

  const getXotakBalance = async () => {
    try {
      const payload = {
        chainId: 97,
        walletAddress: Wallet?.selectedAccount,
        tokenAddress: xotakAddress,
      };

      const getBalData = await TokenBalance(payload);
      if (getBalData) {
        setXotakBalance(getBalData?.balance);
        setUSDBalance(getBalData?.balance * 0.012);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getDataTrxAll();
  }, []);
  //==============================Get Data All Trx==============================//
  const getDataTrxAll = async () => {
    try {
      const getResAll = await axiosMain.get(
        `transaction-history?searchTag&filters&pageNo`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user.token}`,
          },
        }
      );
      if (getResAll?.data?.status) {
        setShowDataTrxAll(getResAll?.data?.data?.AllTrxList);
      }
    } catch (err) {}
  };
  //==================================End of code================================//
  return (
    <>
      <Layout>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Dashboard</h2>
                    {/* <Marquee className="marquee-spacing">
                      <div className="shadow-box-dash">
                        <img
                          className="img-coin"
                          src="assets/img/ethereum1.png"
                          alt=""
                        />
                        <h4>${ethprice?.toFixed(4)}</h4>
                        <p>ETH</p>
                      </div>
                      <div className="shadow-box-dash">
                        <img
                          className="img-coin"
                          src="assets/img/matic.png"
                          alt=""
                        />
                        <h4>${maticprice?.toFixed(4)}</h4>
                        <p>MATIC</p>
                      </div>
                      <div className="shadow-box-dash">
                        <img
                          className="img-coin"
                          src="assets/img/usdt.png"
                          alt=""
                        />
                        <h4>$1.0000</h4>
                        <p>USDT</p>
                      </div>
                      <div className="shadow-box-dash">
                        <img
                          className="img-coin"
                          src="assets/img/BNB.png"
                          alt=""
                        />
                        <h4>${bnbprice?.toFixed(4)}</h4>
                        <p>BNB</p>
                      </div>
                    </Marquee> */}
                    <Row>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img
                            className="img-coin"
                            src="assets/img/ethereum1.png"
                            alt=""
                          />
                          <h4>${ethprice?.toFixed(4)}</h4>
                          <p>ETH</p>
                          {/* <p><img src="assets/img/trend-up.png" alt="" /> This week</p> */}
                        </div>
                      </Col>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img
                            className="img-coin"
                            src="assets/img/matic.png"
                            alt=""
                          />
                          <h4>${maticprice?.toFixed(4)}</h4>
                          <p>MATIC</p>
                          {/* <p><img src="assets/img/trend-up.png" alt="" /> This week</p> */}
                        </div>
                      </Col>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img
                            className="img-coin"
                            src="assets/img/BNB.png"
                            alt=""
                          />
                          <h4>${bnbprice?.toFixed(4)}</h4>
                          <p>BNB</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="total-balance-box">
                  <div>
                    <h5>Total Balance</h5>
                    <h3>$ {usdBalance?.toFixed(4)}</h3>
                    <h4>
                      <img src="assets/img/coin.png" alt="" />{" "}
                      {xotakBalance?.toFixed(4)} XOTAK
                    </h4>
                  </div>
                  <div className="outer-btn">
                    <h6>1 XOTAK Coin = 0.012 USD</h6>
                    <button
                      className="white-btn m-0"
                      onClick={() => navigate("/buy-coin")}
                    >
                      Buy Coin
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="inner-page-heading mb-2 all-transaction-link">
                    Recent Transactions{" "}
                    <a href="/Transactions">View All Transactions</a>{" "}
                  </h2>
                  <Row>
                    <Col>
                      <div className="table-box-new shadow-box-main">
                        <div className="table-view-transaction">
                          <div className="thead">
                            <div>
                              <p>S. No</p>
                              <p>Date</p>
                              <p>Wallet Address</p>
                              <p>Payment Amount</p>
                              <p>XTK amount</p>
                              <p>Incoming Trx Hash</p>
                              <p>Status</p>
                            </div>
                          </div>
                          <div className="tbody">
                            {showDataTrxAll?.length > 0 ? (
                              showDataTrxAll
                                ?.slice(0, 5)
                                ?.map((items, index) => {
                                  return (
                                    <div>
                                      <p>{index + 1}</p>
                                      <p>
                                        {moment(items?.createdAt).format("lll")}
                                      </p>
                                      <p>
                                        {items?.walletAddress?.replace(
                                          items?.walletAddress?.substring(
                                            5,
                                            37
                                          ),
                                          "..."
                                        )}
                                      </p>
                                      <p>
                                        {Number(items?.amountIn)?.toFixed(4)}
                                      </p>
                                      <p>
                                        {Number(items?.amountOut)?.toFixed(4)}
                                      </p>
                                      <p>
                                        {items?.incomingTrxHash?.replace(
                                          items?.incomingTrxHash?.substring(
                                            5,
                                            37
                                          ),
                                          "..."
                                        )}
                                      </p>
                                      <p>{items?.statusIn}</p>
                                      {/* <p>
                                      <button className="common-btn">
                                        View
                                      </button>
                                    </p> */}
                                    </div>
                                  );
                                })
                            ) : (
                              <div>
                                <p className="text-center" style={{color:"White"}}>No Data Found</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Dashboard;
