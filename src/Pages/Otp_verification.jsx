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
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import OTPInput from "react-otp-input";
import { encryptData } from "../Encrypt-Decrypt/encryption-decryption";
import axiosMain from "../http/axios/axios_main";
import Spinner from "react-bootstrap/Spinner";

export default function Otp_verification() {
  //==================================Global Variable================================//
  const { state } = useLocation("");
  const { email, flag } = state || "";
  const navigate = useNavigate();
  //==================================End of code================================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [otp, setOTP] = useState("");
  const [disable, setDisable] = useState(false);
  const [checkdata, setCheckdata] = useState(false);
  //===============End of code====================//

  //=============== Handle otp function ====================//
  const HandleOtp = async () => {
    if (otp?.length !== 6) {
      setFormError("Please enter valid otp!");
    } else if (!email) {
      setFormError("Email not found!");
    } else {
      setDisable(true);
      setFormError("");
      const RowEmail = await encryptData(email);
      const RowOtp = await encryptData(otp);

      try {
        const payload = {
          email: RowEmail,
          otp: RowOtp,
        };

        const api = await axiosMain.post("/verify-otp", payload);
        if (api?.data?.status) {
          setDisable(false);
          toast.success("OTP verified successfully.");

          setTimeout(() => {
            flag === "forget"
              ? navigate("/ResetPassword", { state: { mail: email } })
              : navigate("/login");
          }, 2000);
        }
      } catch (error) {
        setDisable(false);
        setFormError(error.response.data.message);
      }
    }
  };
  //===============End of code====================//

  //=============== Handle otp function ====================//
  const ReSendOtp = async () => {
    if (!email) {
      setFormError("Email not found!");
    } else {
      setFormError("");
      const RowEmail = await encryptData(email);
      const RowFlag = await encryptData(flag);
      setCheckdata(true);
      try {
        const payload = {
          email: RowEmail,
          type: RowFlag,
        };

        const api = await axiosMain.post("/resend-otp", payload);
        if (api?.data?.status) {
          setCheckdata(false);
          toast.success("OTP resent successfully.");
        } else {
          setCheckdata(false);
        }
      } catch (error) {
        setCheckdata(false);

        setFormError(error.response.data.message);
      }
    }
  };
  //===============End of code====================//
  return (
    <>
      <Layout />
      <section className="signup-sec" id="sign_up">
        <Toaster />
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="outer-bg-signup">
                <h3> Verify Your OTP </h3>
                <h5>Enter your OTP below. To activate your account.</h5>

                <Form.Group className="mb-3">
                  <Form.Label>OTP</Form.Label>

                  <div className="otp_box">
                    <OTPInput
                      value={otp}
                      onChange={setOTP}
                      autoFocus
                      numInputs={6}
                      otpType="number"
                      renderInput={(props) => (
                        <input
                          {...props}
                          onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                        />
                      )}
                    />
                  </div>
                </Form.Group>
                <p style={{ color: "red" }}>{formError}</p>
                <div>
                  <button
                    className="common-btn w-100 m-0"
                    onClick={() => {
                      HandleOtp();
                    }}
                    disabled={disable}
                  >
                    {disable ? "Processing" : "Submit"}
                  </button>
                </div>
                <div className="outer-forgot-pass-link">
                  <p className="dont-have-acc">
                    Did'nt get OTP?{" "}
                    <a
                      onClick={() => {
                        ReSendOtp();
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {checkdata ? (
                        <Spinner animation="border" role="status"></Spinner>
                      ) : (
                        "Resend Otp"
                      )}
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
