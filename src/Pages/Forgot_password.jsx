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
import Layout from "../Component/Loginheader";



export default function Forgot_password() {


    return (
        <>
       <Layout />
      <section className="signup-sec" id="sign_up">
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="outer-bg-signup">
                <h3> Generate Your Password </h3>
                    <h5>Enter your email address below. If we have it on file, we will send you a reset email.</h5>

                    <Form.Group className="mb-3">
    
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    

                    <div>
                      <button className="common-btn w-100 m-0">Request Resent Link</button>
                    </div>

                   

              </div>
            </Col>
          </Row>
        </Container>
      </section>
        </>
    )
}