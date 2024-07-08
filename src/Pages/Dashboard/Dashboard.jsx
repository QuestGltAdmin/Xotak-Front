import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Dropdown, InputGroup, Tabs, Tab
} from "react-bootstrap-v5";
import Layout from "../../Component/Layout";
import Marquee from "react-fast-marquee";



const Dashboard = () => {

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
                    <Marquee className="marquee-spacing">
                      <div className="shadow-box-dash">
                        <img className="img-coin" src="assets/img/ethereum1.png" alt="" />
                        <h4>$168,331.09</h4>
                        <p>ETH</p>
                      </div>
                      <div className="shadow-box-dash">
                        <img className="img-coin" src="assets/img/bitcoin.png" alt="" />
                        <h4>$168,331.09</h4>
                        <p>BitCoin</p>
                      </div>
                      <div className="shadow-box-dash">
                        <img className="img-coin" src="assets/img/usdt.png" alt="" />
                        <h4>$168,331.09</h4>
                        <p>USDT</p>
                      </div>
                      <div className="shadow-box-dash">
                        <img className="img-coin" src="assets/img/BNB.png" alt="" />
                        <h4>$168,331.09</h4>
                        <p>BNB</p>
                      </div>
                    </Marquee>
                    {/* <Row>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img className="img-coin" src="assets/img/ethereum1.png" alt="" />
                          <h4>$168,331.09</h4>
                          <p><img src="assets/img/trend-up.png" alt="" /> This week</p>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img className="img-coin" src="assets/img/bitcoin.png" alt="" />
                          <h4>$168,331.09</h4>
                          <p><img src="assets/img/trend-down.png" alt="" /> This week</p>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img className="img-coin" src="assets/img/usdt.png" alt="" />
                          <h4>$168,331.09</h4>
                          <p><img src="assets/img/trend-up.png" alt="" /> This week</p>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img className="img-coin" src="assets/img/BNB.png" alt="" />
                          <h4>$168,331.09</h4>
                          <p><img src="assets/img/trend-down.png" alt="" /> This week</p>
                        </div>
                      </Col>
                    </Row> */}
                  </div>
                </div>

                <div className="total-balance-box">
                   <div>
                      <h5>Total Balance</h5>
                      <h3>$ 456.789</h3>
                      <h4><img src="assets/img/coin.png" alt="" /> 34.88 XOTAK</h4>
                   </div>
                   <div className="outer-btn">
                      <h6>1 XOTAK Coin = 23.34 USD</h6>
                      <button className="white-btn m-0">Buy Coin</button>
                   </div>
                  
                </div>

                <div>
                  <h2 className="inner-page-heading mb-2 all-transaction-link">Recent Transactions <a href="">View All Transactions</a> </h2>
                  <Row>
                    <Col>
                      <div className="table-box-new shadow-box-main">
                        <div className="table-view-transaction">
                          <div className="thead">
                            <div>
                              <p>S. No</p>
                              <p>First Name</p>
                              <p>Last Name</p>
                              <p>Wallet Address</p>
                              <p>Action</p>
                            </div>
                          </div>
                          <div className="tbody">
                            <div>
                              <p>1</p>
                              <p>test</p>
                              <p>xyz</p>
                              <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                            </div>
                            <div>
                              <p>1</p>
                              <p>test</p>
                              <p>xyz</p>
                              <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                            </div>
                            <div>
                              <p>1</p>
                              <p>test</p>
                              <p>xyz</p>
                              <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                            </div>
                            <div>
                              <p>1</p>
                              <p>test</p>
                              <p>xyz</p>
                              <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                            </div>
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
