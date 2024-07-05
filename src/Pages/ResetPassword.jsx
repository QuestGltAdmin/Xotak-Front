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
import { useDispatch } from "react-redux";
import axiosMain from "../http/axios/axios_main";
import { encryptData } from "../Encrypt-Decrypt/encryption-decryption";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPassword() {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //===============End of code====================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [disable, setDisable] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  //===============End of code====================//

  //========================= show password on eye click =========================//
  const [eyeShow, setEyeShow] = useState(false);
  const [eyeShow1, setEyeShow1] = useState(false);

  const seepass = () => {
    const password = document.getElementById("id_pass");
    {
      password.type === "password"
        ? (password.type = "text")
        : (password.type = "password");
    }
  };

  const showeye = () => {
    const password = document.getElementById("id_pass");
    {
      password.type === "password" ? setEyeShow(true) : setEyeShow(false);
    }
  };
  const seepass1 = () => {
    const password = document.getElementById("id_pass1");
    {
      password.type === "password"
        ? (password.type = "text")
        : (password.type = "password");
    }
  };

  const showeye1 = () => {
    const password = document.getElementById("id_pass1");
    {
      password.type === "password" ? setEyeShow1(true) : setEyeShow1(false);
    }
  };
  useEffect(() => {
    showeye();
    showeye1();
  }, []);
  //========================= end of code =========================//

  //=============== Handle reset function ====================//
  const HandleData = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const HandleReset = async () => {
    if (!inputValue?.email) {
      setFormError("Please enter your Email");
    } else if (!inputValue?.password) {
      setFormError("Please enter your Email");
    } else if (!inputValue?.confirmpassword) {
      setFormError("Please enter your Email");
    } else if (inputValue?.password !== inputValue?.confirmpassword) {
      setFormError("password and confirm password doesn't match");
    } else {
      setDisable(true);
      setFormError("");
      const RowEmail = await encryptData(inputValue?.email);
      const RowPassword = await encryptData(inputValue?.password);

      try {
        const payload = {
          email: RowEmail,
          password: RowPassword,
        };

        const api = await axiosMain.post("/reset-password", payload);
        if (api?.data?.status) {
          setDisable(false);
          toast.success("Password Reset successfully.");
          setTimeout(() => {
            navigate("/");
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
        <Toaster/>
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="outer-bg-signup">
                <h3> Reset Your password </h3>
                <h5>Enter your email address and Password.</h5>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={HandleData}
                    value={inputValue.email}
                    className="mb-0"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="password"
                      className="mb-0"
                      placeholder="Enter your password"
                      id="id_pass"
                      name="password"
                      onChange={HandleData}
                      value={inputValue.password}
                    />
                    <InputGroup.Text
                      onClick={() => {
                        seepass();
                        showeye();
                      }}
                    >
                      {eyeShow ? (
                        <i className="fa fa-eye-slash"></i>
                      ) : (
                        <i className="fa fa-eye"></i>
                      )}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="password"
                      className="mb-0"
                      placeholder="confirm your password"
                      id="id_pass1"
                      name="confirmpassword"
                      onChange={HandleData}
                      value={inputValue.confirmpassword}
                    />
                    <InputGroup.Text
                      onClick={() => {
                        seepass1();
                        showeye1();
                      }}
                    >
                      {eyeShow1 ? (
                        <i className="fa fa-eye-slash"></i>
                      ) : (
                        <i className="fa fa-eye"></i>
                      )}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
<p>{formError}</p>
                <div>
                  <button
                    className="common-btn w-100 m-0"
                    disabled={disable}
                    onClick={() => {
                      HandleReset();
                    }}
                  >
                    {" "}
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
