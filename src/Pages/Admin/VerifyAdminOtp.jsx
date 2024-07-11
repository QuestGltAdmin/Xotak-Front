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
import Layout from "../../Component/Loginheader";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import OTPInput from "react-otp-input";
import { encryptData } from "../../Encrypt-Decrypt/encryption-decryption";
import axiosMain from "../../http/axios/axios_main";
import { adminLoginSaga } from "../../store/reducers/authReducer";
import { useDispatch } from "react-redux";

export default function VerifyAdminOtp() {
  //==================================Global Variable================================//
  const { state } = useLocation("");
  const { email } = state || "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //==================================End of code================================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [otp, setOTP] = useState("");
  const [disable, setDisable] = useState(false);
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
      //   const RowEmail = await encryptData(email);
      const RowOtp = await encryptData(otp);

      try {
        const payload = {
          email: email,
          otp: RowOtp,
        };

        dispatch(
          adminLoginSaga({
            payload,
            toast,
            navigate,
            setDisable,
          })
        );
      } catch (error) {
        setDisable(false);
        toast.error(error.response.data.message);
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

      try {
        const payload = {
          email: email,
        };

        const api = await axiosMain.post("/admin/send-otp", payload);
        if (api?.data?.status) {
          toast.success("OTP resent successfully.");
        }
      } catch (error) {
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
                <h5>Enter your OTP below. To access dashboard.</h5>

                <Form.Group className="mb-3">
                  <Form.Label>OTP</Form.Label>

                  <div className="otp_box">
                    <OTPInput
                      value={otp}
                      onChange={setOTP}
                      autoFocus
                      numInputs={6}
                      otpType="number"
                      renderInput={(props) => <input {...props} />}
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
                      Resend Otp
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
