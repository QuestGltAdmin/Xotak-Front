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
import { useNavigate } from "react-router-dom";
import { encryptData } from "../Encrypt-Decrypt/encryption-decryption";
import axiosMain from "../http/axios/axios_main";
import toast, { Toaster } from "react-hot-toast";

export default function Forgot_password() {
  //==================================Global Variable================================//
  const navigate = useNavigate();
  //==================================End of code================================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [disable, setDisable] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
  });
  //===============End of code====================//

  //=============== Handle forget function ====================//
  const HandleData = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const HandleForgetPassword = async () => {
    if (!inputValue?.email) {
      setFormError("Please enter your Email");
    } else {
      setDisable(true);
      setFormError("");
      const RowEmail = await encryptData(inputValue?.email);

      try {
        const payload = {
          email: RowEmail,
        };

        const api = await axiosMain.post("/forgot-password", payload);
        if (api?.data?.status) {
          setDisable(false);
          toast.success("Forget password link send  successfully.");
          setTimeout(() => {
            navigate("/Otp_verification", {
              state: { email: api?.data?.data?.email, flag: "forget" },
            });
          }, 3000);
        }
      } catch (error) {
        setDisable(false);
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
                <h3>Forget Password </h3>
                <h5>
                  Enter your email address below. If we have it on file, we will
                  send you a reset email.
                </h5>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={HandleData}
                    value={inputValue?.email}
                  />
                </Form.Group>
                <p style={{color:"red"}}>{formError}</p>

                <div>
                  <button
                    className="common-btn w-100 m-0"
                    disabled={disable}
                    onClick={() => {
                      HandleForgetPassword();
                    }}
                  >
                    {disable === true ? "Processing" : "Submit"}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
