
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Form, Pagination } from 'react-bootstrap'
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
                            <div className="d-flex justify-content-between outer-show-table mb-3">
                              <div className="d-flex ">
                              <span>Show Entries </span>
                                 <Form.Select aria-label="Default select example">
                                    <option>10</option>
                                    <option value="1">25</option>
                                    <option value="2">50</option>
                                    <option value="3">100</option>
                                  </Form.Select>
                              </div>
                              <div className="d-flex">
                                <span>Search </span>
                                 <Form.Group className="">
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                              </div>
                            </div>
                             <div className="table-responsive">
                             <Table  bordered >
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Username</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                               
                              </tbody>
                            </Table>
                             </div>
                             <div className="d-flex justify-content-between outer-show-table">
                              <div className="d-flex ">
                              <span>Showing 1 to 10 of 57 entries </span>
                              </div>
                              <div className="d-flex">
                                  <Pagination>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Ellipsis />

                                    
                                    <Pagination.Item >{12}</Pagination.Item>
                                    
                                    <Pagination.Ellipsis />
                                    <Pagination.Item >{20}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                  </Pagination>
                              </div>
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