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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { encryptData } from "../../Encrypt-Decrypt/encryption-decryption";
import axiosMain from "../../http/axios/axios_main";

export default function AdminLogin() {
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
  });
  //===============End of code====================//

  //========================= show password on eye click =========================//
  const [eyeShow, setEyeShow] = useState(false);
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

  useEffect(() => {
    showeye();
  }, []);
  //========================= end of code =========================//

  //========================= Handle login function =========================//
  const HandleData = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const HandleLogin = async () => {
    if (!inputValue.email) {
      setFormError("Please enter valid Email");
    } else if (!inputValue.password) {
      setFormError("Please enter your password!");
    } else {
      setDisable(true);
      setFormError("");

      const RowEmail = await encryptData(inputValue.email);
      const RowPassword = await encryptData(inputValue.password);

      const payload = {
        email: RowEmail,
        password: RowPassword,
      };

      try {
        const loginData = await axiosMain.post("/admin/admin-login", payload);
        if (loginData?.data?.status) {
          setDisable(false);
          toast.success("Admin login success. Please verify otp.");
          setTimeout(() => {
            navigate("/auth-admin-otp", { state: { email: RowEmail } });
          }, 3000);
        }
      } catch (err) {
        setDisable(false);
        toast.error(err?.response.data.message);
      }
    }
  };
  //========================= end of code =========================//

  return (
    <>
      <Layout />
      <section className="signup-sec">
        <Toaster />
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="outer-bg-signup">
                <h3> Welcome </h3>
                <h5>Admin Login</h5>

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
                <p style={{ color: "red" }}>{formError}</p>
                <div>
                  <button
                    className="common-btn w-100 m-0"
                    disabled={disable}
                    onClick={() => {
                      HandleLogin();
                    }}
                  >
                    {" "}
                    {disable === true ? "Processing" : "Login"}
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
