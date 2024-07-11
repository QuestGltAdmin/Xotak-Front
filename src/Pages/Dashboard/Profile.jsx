import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Form, InputGroup } from "react-bootstrap";
import Layout from "../../Component/Layout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import {
  encryptData,
  encryptDataPath,
} from "../../Encrypt-Decrypt/encryption-decryption";
import axiosMain from "../../http/axios/axios_main";
import { setUserprofileData } from "../../store/reducers/authReducer";

const Profile = () => {
  //==================================Global Variable================================//
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  //==================================End of code================================//

  //==================================Local Variable================================//
  const [disable, setDisable] = useState(false);
  const [formError, setFormError] = useState("");
  const [formError1, setFormError1] = useState("");
  const [disablepass, setDisablepass] = useState(false);
  //==================================End of code================================//

  //================================Profile Update code===============================//

  const [inputValuepass, setInputValuepass] = useState({
    password: "",
    newpassword: "",
    confirmnewpassword: "",
  });

  //========================= show password on eye click =========================//

  const [inputvalue, setInputValue] = useState({
    name: user?.name || "",
    file: "",
    photoUrl: user?.profilePic,
  });

  const fromdatauser = (e) => {
    setInputValue({
      ...inputvalue,
      [e.target.name]: e.target.value,
    });
  };

  //==========================Image upload functions==============================//
  let formdata = new FormData();

  const [imageData, setImageData] = useState({
    file: "",
    photoUrl: "",
  });
  const { file, photoUrl } = imageData;

  const photoUploadHandler = (event, setState) => {
    const { files } = event.target;
    if (files[0]) {
      if (files[0].type.includes("image")) {
        const filename = files[0].name;
        const fileExtension = filename.substr(filename.lastIndexOf(".") + 1);
        if (
          fileExtension.toLowerCase() === "png" ||
          fileExtension.toLowerCase() === "jpg" ||
          fileExtension.toLowerCase() === "gif" ||
          fileExtension.toLowerCase() === "jpeg"
        ) {
          setState({
            ...inputvalue,
            file: event.currentTarget.files[0],
            photoUrl: URL.createObjectURL(files[0]),
          });
        }
      } else {
        toast.error("Upload image only");
      }
    }
  };
  //==========================End of code==============================//

  //==========================Handle Student details update============================//
  const HandleUpdate = async () => {
    if (!inputvalue?.name) {
      setFormError1("Please enter your name");
    } else {
      setDisable(true);

      formdata.append("name", inputvalue?.name);
      formdata.append("file", file || user.profilePic || "");

      try {
        const profile = await axiosMain.post("/edit-accountInfo", formdata, {
          headers: {
            "content-type": "multipart/form-data",
            authorization: `bearer ${user.token}`,
          },
        });
        if (profile?.data?.status) {
          setDisable(false);
          dispatch(setUserprofileData(profile?.data?.data));
          toast.success("User details updated successfully");
          setImageData({
            file: "",
            photoUrl: "",
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } catch (err) {
        setDisable(false);
        toast.error(err.response.data.message);
      }
    }
  };
  //==========================End of code============================//

  //==================================change password code================================//

  const [eyeShow, setEyeShow] = useState(false);
  const [eyeShow1, setEyeShow1] = useState(false);
  const [eyeShow2, setEyeShow2] = useState(false);

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
  const seepass2 = () => {
    const password = document.getElementById("id_pass2");
    {
      password.type === "password"
        ? (password.type = "text")
        : (password.type = "password");
    }
  };

  const showeye2 = () => {
    const password = document.getElementById("id_pass2");
    {
      password.type === "password" ? setEyeShow1(true) : setEyeShow1(false);
    }
  };
  useEffect(() => {
    showeye();
    showeye1();
    showeye2();
  }, []);

  //========================= end of code =========================//
  const HandlePasswordData = (e) => {
    setInputValuepass({ ...inputValuepass, [e.target.name]: e.target.value });
  };

  const HandelPassword = async () => {
    let passregex = new RegExp("^(?=.*[A-Z])(?=.{8,})");
    if (!inputValuepass?.password) {
      setFormError("Please enter your password");
    } else if (!passregex.test(inputValuepass.newpassword)) {
      setFormError(
        "Password must contain 1 Uppercase character. Length must be greater or equal to 8 digit"
      );
    } else if (
      inputValuepass.newpassword !== inputValuepass.confirmnewpassword
    ) {
      setFormError("Password and Confirm password not same");
    } else {
      setDisablepass(true);
      setFormError("");
      const RowPassword = await encryptData(inputValuepass?.password);
      const RowNewPassword = await encryptData(inputValuepass?.newpassword);

      try {
        const payload = {
          oldPassword: RowPassword,
          password: RowNewPassword,
        };

        const api = await axiosMain.post("/change-password", payload, {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${user.token}`,
          },
        });
        if (api?.data?.status) {
          setDisablepass(false);
          toast.success("Password Updated successfully.");
        }
      } catch (error) {
        setDisablepass(false);
        setFormError(error.response.data.message);
      }
    }
  };
  //==================================Local Variable================================//

  return (
    <>
      <Layout>
        <section className="outer-dash-section">
          <Toaster />
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Account Info</h2>
                    <div className="inner-dash-form shadow-box-main">
                      <Row>
                        <Col lg={4} className="text-center">
                          <div class="profile-pic">
                            <input
                              type="file"
                              onChange={(e) =>
                                photoUploadHandler(e, setImageData)
                              }
                              ondragover="drag()"
                              ondrop="drop()"
                              id="uploadFile"
                            />
                            <img
                              onError={() => {
                                ImageHandler();
                              }}
                              className="position-relative"
                              src={
                                photoUrl ||
                                imageData.photoUrl ||
                                user?.profilePic ||
                                "assets/img/download.jpg"
                              }
                              alt=""
                            />
                          </div>
                        </Col>
                        <Col lg={8}>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Name"
                                  name="name"
                                  onChange={fromdatauser}
                                  value={inputvalue?.name}
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="email"
                                  placeholder="Email"
                                  value={user?.email}
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="country code"
                                  value={user?.countryCode}
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Phone No."
                                  value={user?.mobile_no}
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <p style={{ color: "red" }}>{formError1}</p>
                          <div>
                            <button
                              className="common-btn  m-0"
                              onClick={() => {
                                HandleUpdate();
                              }}
                              disabled={disable}
                            >
                              {" "}
                              {disable === true ? "Processing" : "Submit"}
                            </button>
                          </div>
                        </Col>
                      </Row>

                      <h2 className="inner-page-heading mt-5">
                        Change Password
                      </h2>

                      <Row>
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="Current Password"
                                type="password"
                                name="password"
                                onChange={HandlePasswordData}
                                value={inputValuepass.password}
                                id="id_pass"
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
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="New Password"
                                type="password"
                                name="newpassword"
                                onChange={HandlePasswordData}
                                value={inputValuepass.newpassword}
                                id="id_pass1"
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
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="Confirm Password"
                                type="password"
                                name="confirmnewpassword"
                                onChange={HandlePasswordData}
                                value={inputValuepass.confirmnewpassword}
                                id="id_pass2"
                              />
                              <InputGroup.Text
                                onClick={() => {
                                  seepass2();
                                  showeye2();
                                }}
                              >
                                {eyeShow2 ? (
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
                          className="common-btn m-0"
                          disabled={disablepass}
                          onClick={() => {
                            HandelPassword();
                          }}
                        >
                          {" "}
                          {disablepass === true ? "Processing" : "Update"}
                        </button>
                      </div>
                    </div>
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

export default Profile;
