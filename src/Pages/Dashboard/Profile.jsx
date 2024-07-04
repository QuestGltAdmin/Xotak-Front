
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Form, InputGroup} from 'react-bootstrap'
import Layout from '../../Component/Layout';


const Profile = () => {
    var loadFile = function (event) {
        var image = document.getElementById("output");
        image.src = URL.createObjectURL(event.target.files[0]);
      };
      

  return (
    <>
      <Layout>
        <section className="outer-dash-section">

          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Account Info</h2>
                      <div className="inner-dash-form shadow-box-main">

                        <Row>
                            <Col lg={4}>
                                <div class="profile-pic">
                                    <label class="-label" for="file">
                                        <span class="glyphicon glyphicon-camera"></span>
                                        <span>Change Image</span>
                                    </label>
                                    <input id="file" type="file" onchange="loadFile(event)"/>
                                    <img src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg" id="output" width="200" />
                                </div>
                            </Col>
                            <Col lg={8}>
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
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Select aria-label="Default select example">
                                        <option>Select Country</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text"  placeholder="Phone No." />
                                    </Form.Group>
                                </Col>
                         </Row>
                     
                     <div>
                       <button className="common-btn  m-0">Submit</button>
                     </div>
                            </Col>
                            
                        </Row>

                          

                            <h2 className="inner-page-heading mt-5">Change Password</h2>

                            <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <InputGroup className="mb-3">
                                    <Form.Control  placeholder="Current Password"/>
                                    <InputGroup.Text><i class="fa fa-eye"></i></InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <InputGroup className="mb-3">
                                    <Form.Control  placeholder="New Password"/>
                                    <InputGroup.Text><i class="fa fa-eye"></i></InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <InputGroup className="mb-3">
                                    <Form.Control  placeholder="Confirm Password"/>
                                    <InputGroup.Text><i class="fa fa-eye"></i></InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                           
                            </Row>

                            <div>
                              <button className="common-btn m-0">Update</button>
                            </div>

                      </div>

                  
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

export default Profile