import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap-v5";
import {
  getDollarPrice,
  getDollarPriceMatic,
} from "../../helpers/getConvertedPrice";
import { TokenBalance } from "../../helpers/xotakBalanceHelper";
import useAuth from "../../hooks/useAuth";
import Contracts from "../../JSON/ContractList.json";
const ContractList = Contracts.Contracts[0];
const xotakAddress = ContractList.xotakToken;
import { useNavigate } from "react-router-dom";
import axiosMain from "../../http/axios/axios_main";
import moment from "moment";
import AdminLayout from "../../Component/AdminLayout";

const AdminDashboard = () => {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  const { Wallet, user } = useAuth();
  //===============End of code====================//

  const [totalReqCount, setTotalReqCount] = useState(0);
  const [totalUserCount, setTotalUserCount] = useState(0);
  const [totaltrxCount, setTotaltrxCount] = useState(0);
  const [xotakBalance, setXotakBalance] = useState(0);
  const [usdBalance, setUSDBalance] = useState(0);
  const [showDataTrxAll, setShowDataTrxAll] = useState([]);



  useEffect(() => {
    getDataTrxAll();
  }, []);
  //==============================Get Data All Trx==============================//
  const getDataTrxAll = async () => {
    try {
      const getResAll = await axiosMain.get("/admin/admin-dashboard",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user.token}`,
          },
        }
      );
      console.log(getResAll);
      if (getResAll?.data?.status) {
        
        setTotaltrxCount(getResAll?.data?.data?.dashboardData?.totaltrxCount)
        setTotalUserCount(getResAll?.data?.data?.dashboardData?.totalUserCount)
        setTotalReqCount(getResAll?.data?.data?.dashboardData?.totalReqCount)
        setShowDataTrxAll(getResAll?.data?.data?.userList);
      }
    } catch (err) {}
  };
  //==================================End of code================================//
  return (
    <>
      <AdminLayout>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Dashboard</h2>

                    <Row>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img
                            className="img-coin"
                            src="assets/img/ethereum1.png"
                            alt=""
                          />
                          <h4>{totalReqCount}</h4>
                          <p>ETH</p>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img
                            className="img-coin"
                            src="assets/img/matic.png"
                            alt=""
                          />
                          <h4>{totalUserCount}</h4>
                          <p>MATIC</p>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <img
                            className="img-coin"
                            src="assets/img/BNB.png"
                            alt=""
                          />
                          <h4>{totaltrxCount}</h4>
                          <p>BNB</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="total-balance-box">
                  <div>
                    <h5>Total Balance</h5>
                    <h3>$ {usdBalance?.toFixed(4)}</h3>
                    <h4>
                      <img src="assets/img/coin.png" alt="" />{" "}
                      {xotakBalance?.toFixed(4)} XOTAK
                    </h4>
                  </div>
                  <div className="outer-btn">
                    <h6>1 XOTAK Coin = 0.012 USD</h6>
                    <button
                      className="white-btn m-0"
                      onClick={() => navigate("/buy-coin")}
                    >
                      Buy Coin
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="inner-page-heading mb-2 all-transaction-link">
                    Recent Transactions{" "}
                    <a href="/Transactions">View All Transactions</a>{" "}
                  </h2>
                  <Row>
                    <Col>
                      <div className="table-box-new shadow-box-main">
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
                            {showDataTrxAll?.length > 0 ? (
                              showDataTrxAll
                                ?.slice(0, 5)
                                ?.map((items, index) => {
                                  return (
                                    <div>
                                      <p>{index + 1}</p>
                                      <p>{items?.name}</p>
                                      <p>{items?.email}</p>
                                      <p>+{items?.countryCode}-{items?.mobile_no}</p>
                                      <p>
                                        {moment(items?.createdAt).format("lll")}
                                      </p>
                                  
                                    
                                    </div>
                                  );
                                })
                            ) : (
                              <div>
                                <p className="text-center">No Data Found</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;
