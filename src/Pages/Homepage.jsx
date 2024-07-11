import React from 'react'
import { HeaderHome } from '../Component/HeaderHome'
import { Col, Container, Row } from 'react-bootstrap'

export const Homepage = () => {
  return (
    <>
      <div className="homepage-outer-sec">
          <HeaderHome />
          <section className="banner-sec-new">
            <Container>
              <Row className="align-items-center">
                 <Col lg={5}>
                   <div>
                      <h2 className="main-heading">Introducing the
                      XOTOK</h2>
                      <p>XOTAK is a native utility token of the DEXTER ecosystem. It is a digital asset that facilitates seamless payments within the platform and unlocks a range of benefits for users. Built on the secure and scalable BNB blockchain, XOTAK transactions are transparent, immutable, and resistant to fraud.</p>
                       <div>
                          <a href="" className="white-btn-home">Get Started</a>
                          <a href="" className="black-btn-home">Whitepaper</a>
                       </div>
                   </div>
                 </Col>
                 <Col lg={5} className="m-auto">
                   <div className="outer-banner-box">
                      <img src="assets/img/home/right-banner.gif" alt="" />
                      <img className="coin-main" src="assets/img/home/coin-main.png" alt="" />
                   </div>
                 </Col>
              </Row>
            </Container>
          </section>
          <section className="xotak-usp-box">
            <Container>
              <Row>
                 <Col lg={12}>
                    <div>
                       <h2 className="main-heading text-center">USP for XOTAK</h2>
                    </div>
                 </Col>
              </Row>
              <Row>
                 <Col lg={3}>
                    <div className="usp-inner-box">
                        <h4><img src="assets/img/home/usp1.png" alt="" /> Frictionless Payments</h4>
                        <p>Users can leverage XOTAK to make instant and secure payments for services within the platform.</p>
                    </div>
                    <div className="usp-inner-box">
                        <h4><img src="assets/img/home/usp2.png" alt="" /> Enhanced Security</h4>
                        <p>Built on a secure blockchain, XOTAK transactions offer unparalleled security and transparency.</p>
                    </div>
                 </Col>
                 <Col lg={3} className="m-auto">
                    <div className="usp-inner-box">
                        <h4><img src="assets/img/home/usp3.png" alt="" /> Reduced Fees</h4>
                        <p>Compared to traditional payment methods, XOTAK transactions incur significantly lower fees.</p>
                    </div>
                    <div className="usp-inner-box">
                        <h4><img src="assets/img/home/usp4.png" alt="" /> Staking and Governance</h4>
                        <p>Holders of XOTAK can participate in staking mechanisms to earn rewards & contribute to the governance.</p>
                    </div>
                 </Col>
                 <Col lg={3}>
                    <div className="usp-inner-box mb-5">
                        <h4><img src="assets/img/home/usp5.png" alt="" /> Global Reach</h4>
                        <p>XOTAK transcends geographical boundaries, enabling users to send and receive payments internationally.</p>
                    </div>
                    <div className="mt-5">
                    <a href="" className="white-btn-home">Get Started</a>
                    </div>
                    
                 </Col>
              </Row>
            </Container>
          </section>

          <section className="toconomics-sec">
            <Container>
              <Row>
                 <Col lg={11} className="m-auto">
                    <div>
                       <h2 className="main-heading text-center">XOTAK <br/>
                       Tokenomics</h2>
                       <img src="assets/img/home/graph.png" className="img-fluid" alt="" />
                    </div>
                 </Col>
              </Row>
              </Container>
              </section>

              <section className="roadmap-sec">
               <Container>
               <Row>
                  <Col lg={11} className="m-auto">
                     <div>
                        <h2 className="main-heading text-center">XOTAK <br/>
                           Roadmap for a Payment Utility Token</h2>
                           <p className="text-center">This roadmap outlines the key development phases for the XOTAK project, <br/>
                           focusing on token integration, ecosystem growth, and expanding the utility of the token.</p>
                        <img src="assets/img/home/roadmap.png" className="img-fluid" alt="" />
                     </div>
                  </Col>
               </Row>
               </Container>
              </section>


              <section className="team-sec">
               <Container>
               <Row>
                  <Col lg={11} className="m-auto">
                     <div>
                        <h2 className="main-heading text-center">Team for a Payment Utility <br/>
                         Token Project</h2>
                           <p className="text-center">Building a successful payment utility token project requires a team with a diverse skillset spanning technology, <br/> finance, and business development. Here's a breakdown of key team members and their roles.</p>
                        <div className="team-hexa-outer">
                           <div>
                              <div className="team-left-box">
                                 <img src="assets/img/home/Hexagon-right.png" className="img-fluid" alt="" />
                                 <div>
                                    <div>
                                    <h3>DIKSHA GURNANI</h3>
                                    <p>CEO/Founder</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="team-left-box">
                                 <img src="assets/img/home/Hexagon-right.png" className="img-fluid" alt="" />
                                 <div>
                                    <div>
                                    <h3>DIKSHA GURNANI</h3>
                                    <p>CEO/Founder</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div>
                              <div className="center-hex-box">
                                 <img src="assets/img/home/Hexa-center.png" className="img-fluid" alt="" />
                                 <h2>Team <br/> members</h2>
                              </div>
                           </div>
                           <div>
                              <div className="team-left-box right-box">
                                 <img src="assets/img/home/Hexagon-left.png" className="img-fluid" alt="" />
                                 <div>
                                    <div>
                                    <h3>DIKSHA GURNANI</h3>
                                    <p>CEO/Founder</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="team-left-box right-box">
                                 <img src="assets/img/home/Hexagon-left.png" className="img-fluid" alt="" />
                                 <div>
                                    <div>
                                    <h3>DIKSHA GURNANI</h3>
                                    <p>CEO/Founder</p>
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

              
              <section className="faq-main-sec">
               <Container>
               <Row>
                  <Col lg={11} className="m-auto">
                     <div>
                        <h2 className="main-heading text-center">XOTAK Frequently Asked  <br/>
                        Questions</h2>
                           <p className="text-center">XOTAK is a native utility token built on the secure BNB blockchain. It facilitates seamless <br/> payments within the DEXTER ecosystem and unlocks a range of benefits for users.</p>
                        <img src="assets/img/home/roadmap.png" className="img-fluid" alt="" />
                     </div>
                  </Col>
               </Row>
               </Container>
              </section>
      </div>
    </>
  )
}
