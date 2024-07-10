import React, { useCallback, useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Form,
  Pagination,
  Dropdown,
  InputGroup,
  Tabs,
  Tab,
} from "react-bootstrap";
import Layout from "../../Component/Layout";
import axiosMain from "../../http/axios/axios_main";
import { debounce } from "lodash";
import useAuth from "../../hooks/useAuth";
import moment from "moment/moment";

const Transactions = () => {
  //==================================Global Variable================================//
  const { user } = useAuth();
  //==================================End of code================================//
  //==================================Local Variable================================//
  const [pageNumberTrxAll, setPageNumberTrxAll] = useState(1);
  const [searchTrxAll, setSearchTrxAll] = useState("");
  const [filterTrxAll, setFilterTrxAll] = useState("");
  const [totalOrderCountTrxAll, setTotalOrderCountTrxAll] = useState(1);
  const [pageNumberReqAll, setPageNumberReqAll] = useState(1);
  const [searchReqAll, setSearchReqAll] = useState("");
  const [filterReqAll, setFilterReqAll] = useState("");
  const [totalOrderCountReqAll, setTotalOrderCountReqAll] = useState(1);
  const [showDataTrxAll, setShowDataTrxAll] = useState([]);
  const [showDataReqAll, setShowDataReqAll] = useState([]);

  //==================================End of code================================//

  //==============================Get Data All Trx==============================//
  const getDataTrxAll = async (
    pageNumberTrxAll,
    searchTrxAll,
    filterTrxAll
  ) => {
    const payload = {};
    try {
      const getResAll = await axiosMain.get(
        `transaction-history?searchTag=${searchTrxAll}&filters=${filterTrxAll}&pageNo=${pageNumberTrxAll}`,
        // payload,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user.token}`,
          },
        }
      );
      if (getResAll?.data?.status) {
        setShowDataTrxAll(getResAll?.data?.data?.AllTrxList);
        setTotalOrderCountTrxAll(getResAll?.data?.data?.total);
      }
    } catch (err) {}
  };
  //==================================End of code================================//

  const incressFunctionTrxAll = () => {
    if (pageNumberTrxAll < Math.ceil(totalOrderCountTrxAll / 10)) {
      setPageNumberTrxAll(pageNumberTrxAll + 1);
    }
  };
  const decressFunctionTrxAll = () => {
    if (pageNumberTrxAll > 1) {
      setPageNumberTrxAll(pageNumberTrxAll - 1);
    }
  };

  const filterDataTrxAll = useCallback(debounce(getDataTrxAll, 1000), []);
  useEffect(() => {
    filterDataTrxAll(pageNumberTrxAll, searchTrxAll, filterTrxAll);
  }, [pageNumberTrxAll, searchTrxAll, filterTrxAll]);

  //==============================Get Data All Trx==============================//
  const getDataReqAll = async (
    pageNumberReqAll,
    searchReqAll,
    filterReqAll
  ) => {
    const payload = {};
    try {
      const getResAll = await axiosMain.get(
        `request-transaction-history?searchTag=${searchReqAll}&filters=${filterReqAll}&pageNo=${pageNumberReqAll}`,
        // payload,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user.token}`,
          },
        }
      );
      // console.log(getResAll);
      if (getResAll?.data?.status) {
        setShowDataReqAll(getResAll?.data?.data?.AllTrxList);
        setTotalOrderCountReqAll(getResAll?.data?.data?.total);
      }
    } catch (err) {}
  };
  //==================================End of code================================//

  const incressFunctionReqAll = () => {
    if (pageNumberReqAll < Math.ceil(totalOrderCountReqAll / 10)) {
      setPageNumberReqAll(pageNumberReqAll + 1);
    }
  };
  const decressFunctionReqAll = () => {
    if (pageNumberReqAll > 1) {
      setPageNumberReqAll(pageNumberReqAll - 1);
    }
  };

  const filterDataReqAll = useCallback(debounce(getDataReqAll, 1000), []);
  useEffect(() => {
    filterDataReqAll(pageNumberReqAll, searchReqAll, filterReqAll);
  }, [pageNumberReqAll, searchReqAll, filterReqAll]);

  return (
    <>
      <Layout>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading mb-2">
                      All Transactions
                    </h2>

                    <Row>
                      <Col>
                        <div className="table-box-new shadow-box-main">
                          <div className="tabs-outer-transaction">
                            <Tabs defaultActiveKey="tab1" className="mb-3">
                              <Tab eventKey="tab1" title="All Transactions">
                                <div className="d-flex justify-content-between filter-row mb-3">
                                  <div className="d-flex align-items-center">
                                    <Dropdown
                                      onSelect={(e) => setFilterTrxAll(e)}
                                      className="sort-dropdown"
                                    >
                                      <Dropdown.Toggle id="dropdown-basic">
                                        {filterTrxAll !== ""
                                          ? filterTrxAll
                                          : "Sort"}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item eventKey="high_low">
                                          High to Low
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="low_high">
                                          Low to High
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="latest">
                                          Latest
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="oldest">
                                          Oldest
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="a-z">
                                          A to Z
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="z-a">
                                          Z to A
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <button
                                      className="common-btn"
                                      onClick={() => {
                                        setSearchTrxAll("");
                                        setFilterTrxAll("");
                                      }}
                                    >
                                      Clear Filter
                                    </button>
                                  </div>
                                  <InputGroup className=" search-input">
                                    <Form.Control
                                      type="text"
                                      placeholder="Search...."
                                      name="searchTrxAll"
                                      onChange={(e) => {
                                        setSearchTrxAll(e.target.value);
                                      }}
                                      value={searchTrxAll}
                                    />
                                    <InputGroup.Text>
                                      <a href="">
                                        <i className="fa fa-search"></i>
                                      </a>{" "}
                                    </InputGroup.Text>
                                  </InputGroup>
                                </div>
                                <div>
                                  <div className="table-view-transaction">
                                    <div className="thead">
                                      <div>
                                        <p>S. No</p>
                                        <p>Date</p>
                                        <p>Wallet Address</p>
                                        <p>Amount In</p>
                                        <p>Amount Out</p>
                                        <p>Incoming Trx Hash</p>
                                        <p>Status</p>
                                      </div>
                                    </div>
                                    <div className="tbody">
                                      {showDataTrxAll?.length > 0 && (
                                        showDataTrxAll?.map((items, index) => {
                                          return (
                                            <div>
                                              <p>{index + 1}</p>
                                              <p>
                                                {moment(
                                                  items?.createdAt
                                                ).format("lll")}
                                              </p>
                                              <p>
                                                {items?.walletAddress?.replace(
                                                  items?.walletAddress?.substring(
                                                    5,
                                                    37
                                                  ),
                                                  "..."
                                                )}
                                              </p>
                                              <p>{items?.amountIn}</p>
                                              <p>{items?.amountOut}</p>
                                              <p>
                                                {items?.incomingTrxHash?.replace(
                                                  items?.incomingTrxHash?.substring(
                                                    5,
                                                    37
                                                  ),
                                                  "..."
                                                )}
                                              </p>
                                              <p>{items?.statusIn}</p>
                                              <p>
                                                <button className="common-btn">
                                                  View
                                                </button>
                                              </p>
                                            </div>
                                          );
                                        })
                                      )}
                                    </div>
                                  </div>
                                  {showDataTrxAll?.length <= 0 && (
                                    <div>
                                      <p className="text-center">
                                        No Data Found
                                      </p>
                                    </div>
                                  )}
                                </div>
                                <div className="d-flex justify-content-end">
                                  {showDataTrxAll?.length > 0 ? (
                                    <div className="d-flex justify-content-center paginate-register">
                                      <div className="d-flex align-items-center">
                                        <button
                                          className="common-btn"
                                          onClick={() => {
                                            decressFunctionTrxAll();
                                          }}
                                        >
                                          <i className="fa fa-angle-left"></i>
                                        </button>
                                        <button className="common-btn m-2">
                                          Page {pageNumberTrxAll} of{" "}
                                          {Math.ceil(
                                            totalOrderCountTrxAll / 10
                                          )}
                                        </button>
                                        <button
                                          className="common-btn"
                                          onClick={() => {
                                            incressFunctionTrxAll();
                                          }}
                                        >
                                          <i className="fa fa-angle-right"></i>
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </Tab>
                              <Tab eventKey="tab2" title="Request Transactions">
                                <div className="d-flex justify-content-between filter-row mb-3">
                                  <div className="d-flex align-items-center">
                                    <Dropdown
                                      onSelect={(e) => setFilterReqAll(e)}
                                      className="sort-dropdown"
                                    >
                                      <Dropdown.Toggle id="dropdown-basic">
                                        {filterReqAll !== ""
                                          ? filterReqAll
                                          : "Sort"}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item eventKey="high_low">
                                          High to Low
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="low_high">
                                          Low to High
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="latest">
                                          Latest
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="oldest">
                                          Oldest
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="a-z">
                                          A to Z
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="z-a">
                                          Z to A
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <button
                                      className="common-btn"
                                      onClick={() => {
                                        setSearchReqAll("");
                                        setFilterReqAll("");
                                      }}
                                    >
                                      Clear Filter
                                    </button>
                                  </div>
                                  <InputGroup className=" search-input">
                                    <Form.Control
                                      type="text"
                                      placeholder="Search...."
                                      name="searchReqAll"
                                      onChange={(e) => {
                                        setSearchReqAll(e.target.value);
                                      }}
                                      value={searchReqAll}
                                    />
                                    <InputGroup.Text>
                                      <a href="">
                                        <i className="fa fa-search"></i>
                                      </a>{" "}
                                    </InputGroup.Text>
                                  </InputGroup>
                                </div>
                                <div>
                                  <div className="table-view-transaction">
                                    <div className="thead">
                                      <div>
                                        <p>S. No</p>
                                        <p>Date</p>
                                        <p>Wallet Address</p>
                                        <p>Xotak Amount</p>
                                        <p>Payment Amount</p>
                                        <p>Hash</p>
                                        <p>Status</p>
                                      </div>
                                    </div>
                                    <div className="tbody">
                                      {showDataReqAll?.length > 0 &&
                                        showDataReqAll?.map((items, index) => {
                                          return (
                                            <div>
                                              <p>{index + 1}</p>
                                              <p>
                                                {moment(
                                                  items?.createdAt
                                                ).format("lll")}
                                              </p>
                                              <p>
                                                {items?.sender_address?.replace(
                                                  items?.sender_address?.substring(
                                                    5,
                                                    37
                                                  ),
                                                  "..."
                                                )}
                                              </p>
                                              <p>{items?.xotakAmount}</p>
                                              <p>
                                                {items?.paymentAmount}{" "}
                                                {items?.network}
                                              </p>

                                              <p>
                                                {items?.hash?.replace(
                                                  items?.hash?.substring(5, 37),
                                                  "..."
                                                )}
                                              </p>
                                              <p>{items?.status}</p>
                                              <p>
                                                <button className="common-btn">
                                                  View
                                                </button>
                                              </p>
                                            </div>
                                          );
                                        })}
                                    </div>
                                  </div>
                                  {showDataReqAll?.length <= 0 && (
                                    <div>
                                      <p className="text-center">
                                        No Data Found
                                      </p>
                                    </div>
                                  )}
                                </div>
                                <div className="d-flex justify-content-end">
                                  {showDataReqAll?.length > 0 ? (
                                    <div className="d-flex justify-content-center paginate-register">
                                      <div className="d-flex align-items-center">
                                        <button
                                          className="common-btn"
                                          onClick={() => {
                                            decressFunctionReqAll();
                                          }}
                                        >
                                          <i className="fa fa-angle-left"></i>
                                        </button>
                                        <button className="common-btn m-2">
                                          Page {pageNumberReqAll} of{" "}
                                          {Math.ceil(
                                            totalOrderCountReqAll / 10
                                          )}
                                        </button>
                                        <button
                                          className="common-btn"
                                          onClick={() => {
                                            incressFunctionReqAll();
                                          }}
                                        >
                                          <i className="fa fa-angle-right"></i>
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
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
  );
};

export default Transactions;
