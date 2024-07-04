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



export default function Sign_in() {

  return (
    <>
      <Layout />
      <section className="signup-sec" >
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="outer-bg-signup">
                 <h3> Welcome </h3>
                <h5>Please login to continue </h5>

                <Form.Group className="mb-3">

                  <Form.Control type="email"  placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                      <InputGroup className="mb-3">
                        <Form.Control  placeholder="Password"/>
                        <InputGroup.Text><i class="fa fa-eye"></i></InputGroup.Text>
                      </InputGroup>
                    </Form.Group>

                    <div>
                      <button className="common-btn w-100 m-0">Login</button>
                    </div>

                  
                    <div className="outer-forgot-pass-link">
                      <a href="/Forgot_password" className="forgot-link">Forgot Password?</a>
                      <p className="dont-have-acc">Don't have an account? <a href="/Register">Register</a></p>
                    </div>
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
