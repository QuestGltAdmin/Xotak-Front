import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Form,
  Pagination,
  Dropdown,
  Modal,
  InputGroup,
} from "react-bootstrap";
import Layout from "../../Component/Layout";
import {
  getDollarPrice,
  getDollarPriceMatic,
} from "../../helpers/getConvertedPrice";
import axiosMain from "../../http/axios/axios_main";
import { encryptData } from "../../Encrypt-Decrypt/encryption-decryption";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import CopyToClipboard from "react-copy-to-clipboard";

export const BuycoinTwo = () => {
  //==================================Global Variable================================//
  const { user } = useAuth();
  //==================================End of Code================================//

  //==================================Local Variable================================//
  const [show, setShow] = useState(false);
  const [chain, setChain] = useState("BNB");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [copied, setCopied] = useState(false);
  const [maticprice, setMaticPrice] = useState(0);
  const [bnbprice, setBNBPrice] = useState(0);
  const [ethprice, setETHPrice] = useState(0);
  const [disable, setDisable] = useState(false);
  const [formError, setFormError] = useState("");
  const [inputValue, setInputValue] = useState({
    amount: "",
  });
  const [inputdata, setInputData] = useState({
    walletaddress: "",
    hash: "",
  });
  const handleClose = () => {
    setShow(false);
    setCopied(false);
  };

  const handleShow = () => setShow(true);
  //==================================End of Code================================//
  const xotakprice = currentPrice / 0.012;
  const FinalPrice = inputValue?.amount * xotakprice;

  const HandleData = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const HandleFinalData = (e) => {
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  };

  //==================================Price handle code================================//

  useEffect(() => {
    handleCurrentPrice();
  }, [chain]);

  // console.log(xotakprice, "xotakprice");
  // console.log(FinalPrice, "final");

  const handleCurrentPrice = async () => {
    try {
      if (chain == "MATIC") {
        const maticprices = await getDollarPriceMatic();
        setCurrentPrice(maticprices);
      } else if (chain == "USDT") {
        setCurrentPrice(1);
      } else {
        const Getprice = await getDollarPrice(chain);
        setCurrentPrice(Getprice);
      }
    } catch (error) {
      console.error("Error to change:", error);
    }
  };

  useEffect(() => {
    handlexotakPrice();
  });

  const handlexotakPrice = async () => {
    try {
      const maticprices = await getDollarPriceMatic();
      setMaticPrice(maticprices / 0.012);

      const bnbprice = await getDollarPrice("BNB");
      setBNBPrice(bnbprice / 0.012);

      const ethprice = await getDollarPrice("ETH");
      setETHPrice(ethprice / 0.012);
    } catch (error) {
      console.error("Error to change:", error);
    }
  };
  //==================================End of Code================================//

  const handlechains = async (data) => {
    setChain(data?.chaintype);
  };

  // console.log(inputdata, "dtatt");
  //==================================Final Payment================================//

  const HandleFinalPayment = async () => {
    if (!inputdata?.walletaddress) {
      setFormError("Please enter your walletaddress");
    } else if (!inputdata?.hash) {
      setFormError("Please enter payment Transaction hash");
    } else {
      setDisable(true);
      setFormError("");
      const RowWallet = await encryptData(inputdata?.walletaddress);
      const RowHash = await encryptData(inputdata?.hash);
      const RowXotakAmount = await encryptData(inputValue?.amount);
      const RowAdminaddress = await encryptData(
        "0x25E8dCdF4ceF1536C38B815D1b06D6cF0E52E7F7"
      );
      const RowPaymentAmount = await encryptData(FinalPrice);
      const RowNetwork = await encryptData(chain);

      try {
        const payload = {
          walletAddress: RowWallet,
          transactionHash: RowHash,
          xotakAmount: RowXotakAmount,
          adminAddress: RowAdminaddress,
          paymentAmount: RowPaymentAmount,
          network: RowNetwork,
        };

        const api = await axiosMain.post(
          "/create-transaction-request",
          payload,
          {
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${user.token}`,
            },
          }
        );
        if (api?.data?.status) {
          setDisable(false);
          toast.success(api?.data?.message);
          handleClose();
        }
      } catch (error) {
        setDisable(false);
        handleClose();
        setFormError(error.response.data.message);
      }
    }
  };
  //==================================End of Code================================//

  return (
    <>
      <Layout>
        <section className="buy-coin-sec2">
          <Toaster />
          <Container>
            <Row>
              <Col lg={6}>
                <div className="token-box1">
                  <div className="token-head">
                    <h3>Choose currency and calculate XOTAK price</h3>
                    <p>
                      You can buy XOTAK from any of the following cryptos to
                      become part of the Most Advanced Blockchain Project in the
                      Universe.
                    </p>
                  </div>
                  <Row>
                    <Col xl={6} lg={12} md={6}>
                      <div className="token-content-box">
                        <div
                          className="token-flex"
                          onClick={(data) =>
                            handlechains({
                              chaintype: "BNB",
                            })
                          }
                        >
                          <div className="img">
                            <img
                              src="https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970"
                              alt=""
                              style={{ width: 20 }}
                            />
                            <span>BNB</span>
                          </div>
                          <p>{bnbprice?.toFixed(4)} XOTAK</p>
                        </div>
                      </div>
                      <div className="token-content-box">
                        <div
                          className="token-flex"
                          onClick={(data) =>
                            handlechains({
                              chaintype: "USDT",
                            })
                          }
                        >
                          <div className="img">
                            <img
                              src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                              alt=""
                              style={{ width: 20 }}
                            />
                            <span>USDT</span>
                          </div>
                          <p>1.0000 XOTAK</p>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6} lg={12} md={6}>
                      {" "}
                      <div className="token-content-box">
                        <div
                          className="token-flex"
                          onClick={(data) =>
                            handlechains({
                              chaintype: "MATIC",
                            })
                          }
                        >
                          <div className="img">
                            <img
                              src="assets/img/matic.png"
                              alt=""
                              style={{ width: 20 }}
                            />
                            <span>MATIC</span>
                          </div>
                          <p>{maticprice?.toFixed(4)} XOTAK</p>
                        </div>
                      </div>
                      <div className="token-content-box">
                        <div
                          className="token-flex"
                          onClick={(data) =>
                            handlechains({
                              chaintype: "ETH",
                            })
                          }
                        >
                          <div className="img">
                            <img
                              src="https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
                              alt=""
                              style={{ width: 20 }}
                            />
                            <span>ETH</span>
                          </div>
                          <p>{ethprice?.toFixed(4)} XOTAK</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={6}>
                <div className="token-box2">
                  <div className="token-head">
                    <h3>Contribution Amount</h3>
                    <p>
                      Enter the amount you would like to contribute in order to
                      calculate the amount of XOTAK you will receive. The
                      calculator below helps to convert the required quantity of
                      coins into the amount of your selected currency.
                    </p>
                    <div className="calculation-row">
                      <div className="input-group" style={{ maxWidth: 200 }}>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="0.00"
                          id="takeval"
                          defaultValue=""
                          name="amount"
                          onChange={HandleData}
                          value={inputValue?.amount}
                        />
                        <span className="input-group-text">XOTAK</span>
                      </div>
                      <div className="equal">=</div>
                      <div>
                        <h4>
                          {FinalPrice.toFixed(4)} &nbsp;{chain}
                        </h4>
                      </div>
                    </div>
                    <p className="info-text">1 XOTAK = 0.012 USD</p>
                    <button className="common-btn ms-0" onClick={handleShow}>
                      Buy XOTAK
                    </button>
                    <p className="info-text">
                      Coins will appear in your account after you have made
                      payment successfully and it is approved by our team.
                      Please note that, XOTAK will be distributed after our team
                      verifies the payment.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Modal
          centered
          size="lg"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="buy-coin-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirmation of Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Your Order has been placed successfully.</p>
            <p>
              Please send {FinalPrice.toFixed(4)} &nbsp;{chain} to the address
              below. The coin balance will appear in your account only after
              transaction gets confirmation and approved by our team.
            </p>
            <h3>Payment to the following {chain} Wallet Address</h3>
            <div className="scan-qr-row">
              <img
                className="qr-img"
                src="https://cycoin.com/assets/images/QRcode/ETH.png"
                alt=""
              />
              <div>
                <p>
                  Send Amount: {FinalPrice.toFixed(4)} &nbsp;{chain}
                </p>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <img
                      className=""
                      src="https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
                      alt=""
                    />{" "}
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="0x25E8dCdF4ceF1536C38B815D1b06D6cF0E52E7F7"
                  />
                  <CopyToClipboard
                    text={"0x25E8dCdF4ceF1536C38B815D1b06D6cF0E52E7F7"}
                    onCopy={(text, result) => {
                      setCopied(true);
                    }}
                  >
                    {copied ? (
                      <span style={{ color: "white" }}>Copied</span>
                    ) : (
                      <i className="fa fa-copy" style={{ color: "white" }}></i>
                    )}
                  </CopyToClipboard>
                </InputGroup>

                <p>
                  <small>
                    IMPORTANT: Only send {chain} coins to this address, all
                    other token formats might result in loss of funds!
                  </small>
                </p>
              </div>
            </div>
            <p>
              <b>
                To speed up verification process please enter your wallet
                address from where you'll transferring your amount to our
                address.
              </b>
            </p>

            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Insert Your Wallet Address*"
              name="walletaddress"
              value={inputdata?.walletaddress}
              onChange={HandleFinalData}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Insert Your Transaction hash*"
              name="hash"
              value={inputdata?.hash}
              onChange={HandleFinalData}
            />
            <p>{formError}</p>
            <div>
              <button
                className="white-btn"
                disabled={disable}
                onClick={() => {
                  HandleFinalPayment();
                }}
              >
                {disable === true ? "Processing" : "Confirm Payment"}
              </button>
              <button className="white-btn" onClick={() => handleClose()}>
                Cancel Order
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </Layout>
    </>
  );
};
