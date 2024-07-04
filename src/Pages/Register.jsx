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
            <Col lg={6} className="m-auto">
              <div className="outer-bg-signup">
              <h3>Register for XOTAK</h3>
                    <h5>Fill this form to create an account.</h5>

                <Row>
                  <Col lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Control type="text"  placeholder="Name" />
                      </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Control type="email"  placeholder="Email" />
                      </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                       <Form.Group className="mb-3">
                         <Form.Control type="text"  placeholder="Phone No." />
                      </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                        <InputGroup className="mb-3">
                          <Form.Control  placeholder="Password"/>
                          <InputGroup.Text><i class="fa fa-eye"></i></InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                  </Col>
                  <Col lg={6}>
                     <Form.Group className="mb-3">
                        <InputGroup className="mb-3">
                          <Form.Control  placeholder="Cofirm Password"/>
                          <InputGroup.Text><i class="fa fa-eye"></i></InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                  </Col>
                </Row>
             

              

              

                    <div>
                      <button className="common-btn w-100 m-0">Register</button>
                    </div>

                  
                    <div className="outer-forgot-pass-link justify-content-end">

                      <p className="dont-have-acc">Already have an account?  <a href="/">Login</a></p>
                    </div>
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
