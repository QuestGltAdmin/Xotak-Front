import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import OTPInput, { ResendOTP } from "otp-input-react";
import Layout from "../Component/Loginheader";


export default function Otp_verification() {
  const [otp, setOTP] = useState()
  
    return (
        <>
          <Layout />
          <section className="signup-sec" id="sign_up">
            <Container>
              <Row>
                <Col lg={5} className="m-auto">
                  <div className="outer-bg-signup">
                  <h3> Verify Your OTP </h3>
                        <h5>Enter your OTP below. To activate your account.</h5>
    
                        <Form.Group className="mb-3">
                            <Form.Label>OTP</Form.Label>
    
                            <OTPInput
                                value={otp}
                                onChange={setOTP}
                                autoFocus
                                className="otp_box"
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                secure
                                name="otp"
                            />
                        </Form.Group>
                        
    
                        <div>
                          <button className="common-btn w-100 m-0">Submit</button>
                        </div>
    
                       
    
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      );
}