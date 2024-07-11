import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const FooterHome = () => {
  return (
    <>
        <footer className="footer-sec">
            <Container>
                <div className="footer-bg-outer">
                    <Row>
                        <Col lg={4} md={4}>
                            <div className="logo-box-foot">
                                <img className="logo" src="assets/img/home/home-logo.png" alt="" />
                                <div>
                                    <a href=""><img src="assets/img/home/twitter.png" alt="" /></a>
                                    <a href=""><img src="assets/img/home/insta.png" alt="" /></a>
                                    <a href=""><img src="assets/img/home/linkedin.png" alt="" /></a>
                                    <a href=""><img src="assets/img/home/yt.png" alt="" /></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={8}>
                        <Row>
                            <Col lg={3} md={3}>
                            <div className="extra-link">
                                <a href="">Tokenomics</a>
                                <a href="">Team section</a>
                                <a href="">About Us</a>
                                <a href="">Techonlogy</a>
                            </div>
                            </Col>
                            <Col lg={3} md={3}>
                            <div className="extra-link">
                                <a href="">Github</a>
                                <a href="">Documentation</a>
                                <a href="">Whitepaper</a>
                                <a href="">UI Press kit</a>
                            </div>
                            </Col>
                            <Col lg={3} md={3}>
                            <div className="extra-link">
                                <a href="">Terms of Service</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Cookies</a>
                            </div>
                            </Col>
                            <Col lg={3} md={3}>
                            <div className="coin-footer">
                                 <img src="assets/img/home/coin-main.png" className="img-fluid" alt="" />
                            </div>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                    <p className="copyright">© Copyright XOTAK</p>
                </div>
            </Container>
        </footer>
    </>
  )
}
