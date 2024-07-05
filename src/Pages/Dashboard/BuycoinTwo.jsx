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

export const BuycoinTwo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Layout>
        <section className="buy-coin-sec2">
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
                      <a href="">
                        <div className="token-content-box">
                          <div className="token-flex">
                            <div className="img">
                              <img
                                src="https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970"
                                alt=""
                                style={{ width: 20 }}
                              />
                              <span> BNB</span>
                            </div>
                            <p>71.0874 XOTAK</p>
                          </div>
                        </div>
                      </a>
                      <a href="">
                        <div className="token-content-box">
                          <div className="token-flex">
                            <div className="img">
                              <img
                                src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                                alt=""
                                style={{ width: 20 }}
                              />
                              <span> USDT</span>
                            </div>
                            <p>8147.7426 XOTAK</p>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xl={6} lg={12} md={6}>
                      {" "}
                      <a href="">
                        <div className="token-content-box">
                          <div className="token-flex">
                            <div className="img">
                              <img
                                src="https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
                                alt=""
                                style={{ width: 20 }}
                              />
                              <span> ETH</span>
                            </div>
                            <p>430.5685 XOTAK</p>
                          </div>
                        </div>
                      </a>
                      <a href="">
                        <div className="token-content-box">
                          <div className="token-flex">
                            <div className="img">
                              <img
                                src="https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
                                alt=""
                                style={{ width: 20 }}
                              />
                              <span>MATIC</span>
                            </div>
                            <p>430.5685 XOTAK</p>
                          </div>
                        </div>
                      </a>
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
                        />
                        <span className="input-group-text">XOTAK</span>
                      </div>
                      <div className="equal">=</div>
                      <div>
                        <h4>0.0000</h4>
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
              Please send 0.02552 ETH to the address below. The coin balance
              will appear in your account only after transaction gets
              confirmation and approved by our team.
            </p>
            <h3>Payment to the following ETH Wallet Address</h3>
            <div className="scan-qr-row">
              <img
                className="qr-img"
                src="https://cycoin.com/assets/images/QRcode/ETH.png"
                alt=""
              />
              <div>
                <p>Send Amount: 0.02552 ETH</p>
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
                    placeholder="7eq8q8r87q0879r87r7887r9"
                  />
                  <InputGroup.Text>
                    <a href="">
                      <i className="fa fa-copy"></i>
                    </a>{" "}
                  </InputGroup.Text>
                </InputGroup>

                <p>
                  <small>
                    IMPORTANT: Only send ETH coins to this address, all other
                    token formats might result in loss of funds!
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
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Insert Your Transaction hash*"
            />

            <div>
              <button className="white-btn">Confirm Payment</button>
              <button className="white-btn">Cancel Order</button>
            </div>
          </Modal.Body>
        </Modal>
      </Layout>
    </>
  );
};
