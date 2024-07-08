
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Dropdown, InputGroup, Tabs, Tab } from 'react-bootstrap'
import Layout from '../../Component/Layout';


const Transactions = () => {


  return (
    <>
      <Layout>
        <section className="outer-dash-section">

          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading mb-2">All Transactions</h2>

                    <Row>
                      <Col>
                        <div className="table-box-new shadow-box-main">
                          <div className="tabs-outer-transaction">
                            <Tabs
                              defaultActiveKey="tab1"
                              className="mb-3"
                            >
                              <Tab eventKey="tab1" title="All Transactions">
                                <div className="d-flex justify-content-between filter-row mb-3">
                                  <div className="d-flex align-items-center">
                                    <Dropdown className="sort-dropdown">
                                      <Dropdown.Toggle
                                        className=""
                                        id="dropdown-basic">
                                        Sort By
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <button className="common-btn">Clear Filter</button>
                                  </div>
                                  <InputGroup className=" search-input">
                                    <Form.Control type="text" placeholder="Search...." />
                                    <InputGroup.Text><a href=""><i className="fa fa-search"></i></a> </InputGroup.Text>
                                  </InputGroup>
                                </div>
                                <div>
                                  <div className="table-view-transaction">
                                    <div className="thead">
                                      <div>
                                        <p>S. No</p>
                                        <p>First Name</p>
                                        <p>Last Name</p>
                                        <p>Wallet Address</p>
                                        <p>Action</p>
                                      </div>
                                    </div>
                                    <div className="tbody">
                                      <div>
                                        <p>1</p>
                                        <p>test</p>
                                        <p>xyz</p>
                                        <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                                        <p><button className="common-btn">View</button></p>
                                      </div>
                                      <div>
                                        <p>1</p>
                                        <p>test</p>
                                        <p>xyz</p>
                                        <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                                        <p><button className="common-btn">View</button></p>
                                      </div>
                                      <div>
                                        <p>1</p>
                                        <p>test</p>
                                        <p>xyz</p>
                                        <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                                        <p><button className="common-btn">View</button></p>
                                      </div>
                                      <div>
                                        <p>1</p>
                                        <p>test</p>
                                        <p>xyz</p>
                                        <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                                        <p><button className="common-btn">View</button></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab>
                              <Tab eventKey="tab2" title="Pending Transactions">
                                222
                                <div className="d-flex justify-content-between filter-row mb-3">
                                  <div className="d-flex align-items-center">
                                    <Dropdown className="sort-dropdown">
                                      <Dropdown.Toggle
                                        className=""
                                        id="dropdown-basic">
                                        Sort By
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                        <Dropdown.Item>A to Z</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <button className="common-btn">Clear Filter</button>
                                  </div>
                                  <InputGroup className=" search-input">
                                    <Form.Control type="text" placeholder="Search...." />
                                    <InputGroup.Text><a href=""><i className="fa fa-search"></i></a> </InputGroup.Text>
                                  </InputGroup>
                                </div>
                                <div>
                                  <div className="table-view-transaction">
                                    <div className="thead">
                                      <div>
                                        <p>S. No</p>
                                        <p>First Name</p>
                                        <p>Last Name</p>
                                        <p>Wallet Address</p>
                                        <p>Action</p>
                                      </div>
                                    </div>
                                    <div className="tbody">
                                      <div>
                                        <p>1</p>
                                        <p>test</p>
                                        <p>xyz</p>
                                        <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                                        <p><button className="common-btn">View</button></p>
                                      </div>
                                      <div>
                                        <p>1</p>
                                        <p>test</p>
                                        <p>xyz</p>
                                        <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                                        <p><button className="common-btn">View</button></p>
                                      </div>
                                      <div>
                                        <p>1</p>
                                        <p>test</p>
                                        <p>xyz</p>
                                        <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                                        <p><button className="common-btn">View</button></p>
                                      </div>
                                      <div>
                                        <p>1</p>
                                        <p>test</p>
                                        <p>xyz</p>
                                        <p>trertv5v3hgm5g354g35ghghrmgegegg53gj53jg5g3</p>
                                        <p><button className="common-btn">View</button></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab>
                            </Tabs>
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

export default Transactions