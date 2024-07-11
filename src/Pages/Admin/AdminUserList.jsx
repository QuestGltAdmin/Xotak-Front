import React, { useCallback, useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Dropdown,
  InputGroup,
} from "react-bootstrap";
import axiosMain from "../../http/axios/axios_main";
import { debounce } from "lodash";
import useAuth from "../../hooks/useAuth";
import moment from "moment/moment";
import AdminLayout from "../../Component/AdminLayout";

const AdminUserList = () => {
  //==================================Global Variable================================//
  const { user } = useAuth();
  //==================================End of code================================//

  //==================================Local Variable================================//
  const [pageNumberTrxAll, setPageNumberTrxAll] = useState(1);
  const [searchTrxAll, setSearchTrxAll] = useState("");
  const [filterTrxAll, setFilterTrxAll] = useState("");
  const [totalOrderCountTrxAll, setTotalOrderCountTrxAll] = useState(1);
  const [showDataTrxAll, setShowDataTrxAll] = useState([]);
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
        `/admin/users-list?searchTag=${searchTrxAll}&filters=${filterTrxAll}&pageNo=${pageNumberTrxAll}`,
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

  return (
    <>
      <AdminLayout>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading mb-2">All Users List</h2>

                    <Row>
                      <Col>
                        <div className="table-box-new shadow-box-main">
                          <div className="tabs-outer-transaction">
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
                                    <Dropdown.Item eventKey="a-z">
                                    A to Z
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="z-a">
                                  Z to A
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="latest">
                                      Latest
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="oldest">
                                      Oldest
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
                                    <p>Name</p>
                                    <p>Email</p>
                                    <p>Phone No</p>
                                    <p>Date</p>
                                  </div>
                                </div>
                                <div className="tbody">
                                  {showDataTrxAll?.length > 0 &&
                                    showDataTrxAll?.map((items, index) => {
                                      return (
                                        <div>
                                          <p>{index + 1}</p>
                                          <p>{items?.name}</p>
                                          <p>{items?.email}</p>
                                          <p>
                                            +{items?.countryCode}-
                                            {items?.mobile_no}
                                          </p>
                                          <p>
                                            {moment(items?.createdAt).format(
                                              "lll"
                                            )}
                                          </p>
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                              {showDataTrxAll?.length <= 0 && (
                                <div>
                                  <p className="text-center">No Data Found</p>
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
                                      {Math.ceil(totalOrderCountTrxAll / 10)}
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
      </AdminLayout>
    </>
  );
};

export default AdminUserList;
