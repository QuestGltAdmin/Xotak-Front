import React from "react";
import { HeaderHome } from "../Component/HeaderHome";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { FooterHome } from "../Component/FooterHome";

export const Homepage = () => {
  return (
    <>
      <div className="homepage-outer-sec">
        <HeaderHome />
        <section className="banner-sec-new">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} md={6}>
                <div data-aos="fade-right">
                  <h2 className="main-heading">Introducing the XOTAK</h2>
                  <p>
                  XOTAK is a native utility token of the DEXTER ecosystem. It is a digital asset that facilitates seamless payments within the platform and unlocks a range of benefits for users. Built on the secure and scalable BNB blockchain, XOTAK transactions are transparent, immutable, and resistant to fraud.
                  </p>
                  <div>
                    <a href="" className="white-btn-home">
                      Get Started
                    </a>
                    <a href="" className="black-btn-home">
                      Whitepaper
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={5} md={6} className="m-auto">
                <div className="outer-banner-box" data-aos="fade-left">
                  <img
                    className="img-fluid"
                    src="assets/img/home/right-banner.gif"
                    alt=""
                  />
                  <img
                    className="coin-main"
                    src="assets/img/home/coin-main.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="xotak-usp-box" id="usp">
          <Container>
            <Row>
              <Col lg={12}>
                <div>
                  <h2 className="main-heading text-center" data-aos="fade-up">
                    USP for XOTAK
                  </h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={3} md={4} sm={6} data-aos="fade-right">
                <div className="usp-inner-box">
                  <h4>
                    <img src="assets/img/home/usp1.png" alt="" /> Frictionless Payments
                  </h4>
                  <p>
                  Users can leverage XOTAK to make instant and secure payments for services within the platform.
                  </p>
                </div>
                <div className="usp-inner-box">
                  <h4>
                    <img src="assets/img/home/usp2.png" alt="" /> Enhanced Security
                  </h4>
                  <p>
                  Built on a secure blockchain, XOTAK transactions offer unparalleled security and transparency.
                  </p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} className="m-auto" data-aos="fade-up">
                <div className="usp-inner-box">
                  <h4>
                    <img src="assets/img/home/usp3.png" alt="" /> Reduced Fees
                  </h4>
                  <p>
                  Compared to traditional payment methods, XOTAK transactions incur significantly lower fees.
                  </p>
                </div>
                <div className="usp-inner-box">
                  <h4>
                    <img src="assets/img/home/usp4.png" alt="" /> Staking and
                    Governance
                  </h4>
                  <p>
                  Holders of XOTAK can participate in staking mechanisms to earn rewards & contribute to the governance.
                  </p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} data-aos="fade-left">
                <div className="usp-inner-box mb-5">
                  <h4>
                    <img src="assets/img/home/usp5.png" alt="" /> Global Reach
                  </h4>
                  <p>
                  XOTAK transcends geographical boundaries, enabling users to send and receive payments internationally.
                  </p>
                </div>
                <div className="usp-inner-box mb-5">
                  <h4>
                    <img src="assets/img/home/usp6.png" alt="" /> Potential
                    Future
                  </h4>
                  <p>
                  In the future, XOTAK may be used for additional functionalities within the ecosystem.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="toconomics-sec" id="tokenomics">
          <Container>
            <Row>
              <Col lg={9} className="m-auto">
                <div data-aos="fade-up">
                  <h2 className="main-heading text-center">
                    XOTAK <br />
                    Tokenomics
                  </h2>
                  <img
                    src="assets/img/home/graph.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="roadmap-sec" id="roadmap">
          <Container>
            <Row>
              <Col lg={10} className="m-auto">
                <div>
                  <h2
                    className="main-heading text-center"
                    data-aos="fade-right"
                  >
                    XOTAK <br />
                    Roadmap for a Payment Utility Token
                  </h2>
                  <p className="text-center" data-aos="fade-right">
                    This roadmap outlines the key development phases for the XOTAK project, <br />
                     focusing on token integration, ecosystem growth, and expanding the utility of the token.
                  </p>
                  <img
                    src="assets/img/home/roadmap.png"
                    className="img-fluid"
                    data-aos="fade-left"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="team-sec" id="team">
          <Container>
            <Row>
              <Col lg={11} className="m-auto">
                <div>
                  <h2
                    className="main-heading text-center"
                    data-aos="fade-right"
                  >
                    
                    Team for a Payment Utility <br />
                    Token Project
                  </h2>
                  <p className="text-center" data-aos="fade-left">
                  Building a successful payment utility token project requires a team with a diverse skillset spanning technology, <br/> finance, and business development. Here's a breakdown of key team members and their roles.
                  </p>
                  <div className="team-hexa-outer">
                    <div>
                      <div className="team-left-box" data-aos="fade-right">
                        <img
                          src="assets/img/home/Hexagon-right.png"
                          className="img-fluid"
                          alt=""
                        />
                        <div>
                          <div>
                            <h3>DIKSHA GURNANI</h3>
                            <p>CEO/Founder</p>
                          </div>
                        </div>
                      </div>
                      <div className="team-left-box" data-aos="fade-right">
                        <img
                          src="assets/img/home/Hexagon-right.png"
                          className="img-fluid"
                          alt=""
                        />
                        <div>
                          <div>
                            <h3>DHRUV PATEL</h3>
                            <p>COO/Operations Lead</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="center-hex-box" data-aos="zoom-in">
                        <img
                          src="assets/img/home/Hexa-center.png"
                          className="img-fluid"
                          alt=""
                        />
                        <h2>
                          Team <br /> members
                        </h2>
                      </div>
                    </div>
                    <div>
                      <div
                        className="team-left-box right-box"
                        data-aos="fade-left"
                      >
                        <img
                          src="assets/img/home/Hexagon-left.png"
                          className="img-fluid"
                          alt=""
                        />
                        <div>
                          <div>
                            <h3>ALOK AGRAWAL</h3>
                            <p>CTO/Blockchain Lead</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="team-left-box right-box"
                        data-aos="fade-left"
                      >
                        <img
                          src="assets/img/home/Hexagon-left.png"
                          className="img-fluid"
                          alt=""
                        />
                        <div>
                          <div>
                            <h3>JUHI GURNANI</h3>
                            <p>Chief Product Officer (CPO)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="faq-main-sec" id="faq">
          <Container>
            <Row>
              <Col lg={8} className="m-auto">
                <div>
                  <h2
                    className="main-heading text-center"
                    data-aos="fade-right"
                  >
                    XOTAK Frequently Asked <br />
                    Questions
                  </h2>
                  <p className="text-center" data-aos="fade-right">
                    
                    This FAQ provides answers to commonly asked questions about XOTAK, the utility <br/> token powering the XOTAK ecosystem.
                  </p>

                  <div>
                    <Accordion
                      className="faq-accordian"
                      data-aos="fade-left"
                      defaultActiveKey="0"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <span>01</span> What is XOTAK?
                        </Accordion.Header>
                        <Accordion.Body>
                          XOTAK is a native utility token built on the secure
                          BNB blockchain. It facilitates seamless payments
                          within the DEXTER ecosystem and unlocks a range of
                          benefits for users.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <span>02</span> What are the benefits of using XOTAK?
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>
                              Fast and Secure Transactions: XOTAK enables
                              near-instantaneous settlements with enhanced
                              security compared to traditional payment methods.
                            </li>
                            <li>
                              Reduced Fees: Enjoy significantly lower
                              transaction fees compared to credit cards, wire
                              transfers, and other payment gateways.
                            </li>
                            <li>
                              Global Payments: Send and receive payments
                              internationally without restrictions or high
                              conversion fees.
                            </li>
                            <li>
                              Enhanced User Experience: XOTAK simplifies
                              payments within the DEXTER platform, creating a
                              smoother user experience.
                            </li>
                            <li>
                              Staking and Governance: Stake your XOTAK to earn
                              rewards and participate in shaping the future of
                              the DEXTER ecosystem.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <span>03</span> How can I use XOTAK?
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>
                              Make Payments: Use XOTAK to pay for goods and
                              services within the DEXTER platform.
                            </li>
                            <li>
                              Staking: Stake your XOTAK to earn rewards and
                              contribute to the governance of the platform.
                            </li>
                            <li>
                              Potential Future Use Cases: In the future, XOTAK
                              may be used for additional functionalities within
                              the ecosystem.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <span>04</span> Where can I buy XOTAK?
                        </Accordion.Header>
                        <Accordion.Body>
                          XOTAK WILL BE SOON AVAILABLE ON OUR WEBSITE AND
                          PANCAKESWAP EXCHANGE.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <span>05</span> How is XOTAK secured?
                        </Accordion.Header>
                        <Accordion.Body>
                          XOTAK leverages the security and transparency of the
                          BNB blockchain. All transactions are immutably
                          recorded, minimizing the risk of fraud and
                          unauthorized access.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <span>06</span> Is XOTAK an investment?
                        </Accordion.Header>
                        <Accordion.Body>
                          XOTAK is a utility token designed to facilitate
                          payments and access functionalities within the BNB
                          ecosystem. While the value of the token may fluctuate,
                          it is not intended to be solely an investment asset.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          <span>07</span> How is XOTAK different from other
                          payment tokens?
                        </Accordion.Header>
                        <Accordion.Body>
                          XOTAK is designed specifically for the DEXTER
                          ecosystem, offering a range of unique features and
                          functionalities tailored to the platform's needs.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          <span>08</span> Who is behind XOTAK?
                        </Accordion.Header>
                        <Accordion.Body>
                          XOTAK is developed by the DEXTER team, a group of
                          experienced professionals in SAAS technology, finance,
                          and blockchain.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                          <span>09</span> Where can I learn more about XOTAK?
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>Website: [Project website URL]</li>
                            <li>Whitepaper: [Link to whitepaper]</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <FooterHome />
      </div>
    </>
  );
};
