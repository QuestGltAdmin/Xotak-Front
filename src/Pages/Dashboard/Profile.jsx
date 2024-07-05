import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Form, InputGroup } from "react-bootstrap";
import Layout from "../../Component/Layout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { encryptData } from "../../Encrypt-Decrypt/encryption-decryption";
import axiosMain from "../../http/axios/axios_main";
import { setUserprofileData } from "../../store/reducers/authReducer";

const Profile = () => {
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user , wallet } = useAuth();
console.log(wallet,"waaa")
  console.log(user, "llllll");

  const [disable, setDisable] = useState(false);
  const [formError, setFormError] = useState("");

  const [inputvalue, setInputValue] = useState({
    name: user?.name || "",
    file: "",
    photoUrl: user?.profilePic,
  });

  console.log(inputvalue?.file, "opopop");
  const fromdatauser = (e) => {
    setInputValue({
      ...inputvalue,
      [e.target.name]: e.target.value,
    });
  };

  let formdata = new FormData();
  //==========================Image upload functions==============================//

  const [imageData, setImageData] = useState({
    file: "",
    photoUrl: "",
  });
  const { file, photoUrl } = imageData;

  const photoUploadHandler = (event, setState) => {
    console.log("1111");
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
  console.log(file.name, "ffiiiif");
  //==========================Handle Student details update============================//
  const HandleUpdate = async () => {
    console.log("lllll");
    if (!inputvalue?.name) {
      setFormError("Please enter your name");
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
        console.log(profile, "profiledata");
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
        console.log(err, "ffffff");
        toast.error(err.response.data.message);
      }
    }
  };
  //==========================End of code============================//
  console.log(user?.profilePic, "proff");
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
                            {/* <label class="-label" for="file">
                              <span class="glyphicon glyphicon-camera"></span>
                              <span>Change Image</span>
                            </label> */}
                            {/* <input
                              id="file"
                              type="file"
                              onchange="loadFile(event)"
                            /> */}

                            {/* {user?.profilePic ? (
                              <img
                                onError={() => {
                                  ImageHandler();
                                }}
                                src={
                                  user?.profilePic || "assets/img/download.jpg"
                                }
                                alt=""
                              />
                            ) : ( */}
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
                            {/* )} */}
                          </div>

                          {/* <div className="edit-image"> */}
                            {/* <img
                              src="assets/img/tabler_edit.png"
                              className="img-fluid "
                              alt="image"
                            /> */}
                            {/* <input
                              type="file"
                              onChange={(e) =>
                                photoUploadHandler(e, setImageData)
                              }
                              ondragover="drag()"
                              ondrop="drop()"
                              id="uploadFile"
                            /> */}
                          {/* </div> */}
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
                          <p>{formError}</p>
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
                              <Form.Control placeholder="Current Password" />
                              <InputGroup.Text>
                                <i class="fa fa-eye"></i>
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control placeholder="New Password" />
                              <InputGroup.Text>
                                <i class="fa fa-eye"></i>
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control placeholder="Confirm Password" />
                              <InputGroup.Text>
                                <i class="fa fa-eye"></i>
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>

                      <div>
                        <button className="common-btn m-0">Update</button>
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
