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
import { registerSaga } from "../store/reducers/authReducer";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import toast, { Toaster } from "react-hot-toast";
import { encryptData } from "../Encrypt-Decrypt/encryption-decryption";

export default function Register() {
  //========================= Global variable =========================//
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //========================= end of code =========================//

  //========================= Local variable =========================//
  const [disable, setDisable] = useState(false);
  const [formError, setFormError] = useState("");
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [phone, setPhone] = useState();

  //========================= end of code =========================//

  //========================= HandleData function =========================//
  const HandleData = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  //========================= end of code =========================//

  //========================= Code For Country Code Flags =========================//
  const HandelPhoneNo = (phone, code) => {
    setInputValue({
      ...inputValue,
      countryCode: code.dialCode,
      phone: phone.slice(code.dialCode.length),
    });
  };
  //========================= end of code =========================//

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

  //========================= Handel Submit =========================//
  const HandleSubmit = async () => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let passregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[^\s]{6,}$/;
    if (!inputValue.name) {
      setFormError("Please enter Name");
    } else if (!regex.test(inputValue.email)) {
      setFormError("Please enter valid email");
    } else if (!inputValue.countryCode) {
      setFormError("Please select Coutry code");
    } else if (!inputValue.phone) {
      setFormError("Please enter phone number");
    } else if (!passregex.test(inputValue.password)) {
      setFormError(
        "Password must contain 1 Uppercase character. Length must be greater or equal to 8 digit & 1 special character"
      );
    } else if (inputValue.password !== inputValue.confirmpassword) {
      setFormError("password and confirm password doesn't match");
    } else {
      setDisable(true);
      setFormError("");

      const RowName = await encryptData(inputValue.name);
      const RowEmail = await encryptData(inputValue.email);
      const RowPhone = await encryptData(inputValue.phone);
      const RowPassword = await encryptData(inputValue.password);
      const RowCountryCode = await encryptData(inputValue.countryCode);

      const payload = {
        name: RowName,
        email: RowEmail,
        phoneNumber: RowPhone,
        password: RowPassword,
        countryCode: RowCountryCode,
      };
      dispatch(
        registerSaga({
          payload,
          navigate,
          toast,
          setDisable,
        })
      );
    }
  };
  //========================= end of code =========================//
  const handleKeyDown = (e) => {
    const input = e.target;
    const cursorPosition = input.selectionStart;
    const countryCodeLength = input.value.match(/^\+?\d*/)[0].length;

    // Check if the backspace key is pressed and the cursor is within the country code
    if ((e.key === 'Backspace' && cursorPosition <= countryCodeLength) ||
        (e.key === 'Delete' && cursorPosition < countryCodeLength)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Layout />
      <section className="signup-sec">
        <Toaster />
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="outer-bg-signup">
                <h3>Register for XOTAK</h3>
                <h5>Fill this form to create an account.</h5>

                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={HandleData}
                        value={inputValue?.name}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={HandleData}
                        value={inputValue?.email}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Form.Group className="mb-3 position-relative">
                      <PhoneInput
                        country={"in"}
                        name="phone"
                        placeholder=""
                        value={phone}
                        // disableCountryCode={true}
                        onChange={HandelPhoneNo}
                        inputProps={{
                          onKeyDown: handleKeyDown
                        }}
                      />

                      {!inputValue?.phone && (
                        <span className="custom-placeholder">
                          Enter Phone No.
                        </span>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-3 password-eye-field">
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="password"
                          id="id_pass"
                          name="password"
                          placeholder="Password"
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
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="password"
                          id="id_pass1"
                          name="confirmpassword"
                          placeholder="Confirm Password"
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
                  </Col>
                </Row>
                <p style={{ color: "red" }}>{formError}</p>

                <div>
                  <button
                    className="common-btn w-100 m-0"
                    onClick={() => {
                      HandleSubmit();
                    }}
                    disabled={disable}
                  >
                    {disable ? "Processing" : "Register"}
                  </button>
                </div>

                <div className="outer-forgot-pass-link justify-content-end">
                  <p className="dont-have-acc">
                    Already have an account? <Link to="/login">Login</Link>
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
