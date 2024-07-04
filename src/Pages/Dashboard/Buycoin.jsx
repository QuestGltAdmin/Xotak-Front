import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Form, Pagination, Dropdown } from 'react-bootstrap'
import Layout from '../../Component/Layout';

export const Buycoin = () => {
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
                            <h3 className="text-center">Buy Taboo Coin</h3>
                            <div className="swap-dropdown">
                                <div>
                                    <Dropdown className="after-connect-dropdown">
                                        <Dropdown.Toggle
                                            className="connect-wallet-btn"
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

                                    <p>Current Balance 0</p>
                                </div>
                                <Form.Control type="text" placeholder="0.00" />
                            </div>
                            <div className="swap-row">
                              <img
                                src="assets/img/swap.png"
                                loading="lazy"
                                alt="Img" /> 
                            </div>
                            <div>
                                <div className="swap-sec-box">
                                    <div>
                                            <img
                                                src="assets/img/coin.png"
                                                loading="lazy"
                                                alt="Img" />
                                            XOTAK
                                    </div>
                                    <p>XOTAK Balance 0</p>
                                </div>
                                <Form.Control type="text" placeholder="0.00" />
                            </div>

                            <div>
                                <button className="common-btn w-100 m-0 mt-3">Buy Now</button>
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
  )
}
