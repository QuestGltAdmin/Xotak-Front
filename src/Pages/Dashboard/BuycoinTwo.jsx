import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Form, Pagination, Dropdown } from 'react-bootstrap'
import Layout from '../../Component/Layout';

export const BuycoinTwo = () => {
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
                  You can buy XOTAK from any of the following cryptos to become
                  part of the Most Advanced Blockchain Project in the Universe.
                </p>
              </div>
              <Row>
            <Col xl={6} lg={12} md={6}>
            <a href="">
                <div className="token-content-box">
                  <div className="token-flex">
                    <div className="img">
                      <img
                        src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                        alt=""
                        style={{ width: 20 }}
                      />
                      <span> BTC</span>
                    </div>
                    <p>8147.7426 XOTAK</p>
                  </div>
                </div>
              </a>
             
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
            </Col>
            <Col xl={6} lg={12} md={6}>
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
                      <span> ETH</span>
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
              calculate the amount of XOTAK you will receive. The calculator
              below helps to convert the required quantity of coins into the
              amount of your selected currency.
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
            <p className="info-text">1 XOTAK = 6.66 USD</p>
            <button className="common-btn ms-0">Buy XOTAK</button>
            <p className="info-text">
              Coins will appear in your account after you have made payment
              successfully and it is approved by our team. Please note that,
              XOTAK will be distributed after our team verifies the payment.
            </p>
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
