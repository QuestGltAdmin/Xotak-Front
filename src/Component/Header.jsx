import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Col,
  Row,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { setWallet } from "../store/reducers/authReducer";
import ConnectWalletModal from "../component/ConnectWalletModal";
import { Connect, ReConnect, onDisconnect } from "../helpers/Connect";

export default function Header() {
  //========================= Global variable =========================//

  const { Wallet } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //========================= end of code =========================//

  //========================= local variable =========================//

  const [show, setShow] = useState(false);
  const [forMobileView, setForMobileView] = useState(
    window.innerWidth < 992 ? true : false
  );
  const [walletAddress, setWalletAddress] = useState("");
  //=========================End of code =========================//

  const HandleLogout = async () => {
    toast.success("Logged Out Successfully!");
    navigate("/", { replace: true });
    dispatch(logout());
  };

  const handleClose = useCallback((e) => {
    setShow(false);
  });

  const ConnectWalletModalProps = useMemo(() => ({
    modalProps: {
      show: show,
      onHide: handleClose,
    },
    forMobileView,
  }));

  //=================Account change code===============//
  const getWalletAddress = async () => {
    const walletAcc = await ReConnect(Wallet.type);
    if (Wallet.type === "walletConnect") {
      document.addEventListener("ACCOUNT_CONNECTED", (e) => {
        if (e.detail) {
          dispatch(setWallet(e.detail));
        }
      });
      document.addEventListener("SELECT_WALLET", (e) => {
        if (e.detail) {
          dispatch(setWallet(e.detail));
        }
      });
      document.addEventListener("MODAL_CLOSE", (e) => {
        if (e.detail) {
          dispatch(setWallet(e.detail));
        }
      });
      document.addEventListener("CONNECT_SUCCESS", (e) => {
        if (e.detail) {
          dispatch(setWallet(e.detail));
        }
      });
    } else {
      dispatch(setWallet(walletAcc));
    }
  };

  useEffect(() => {
    if (Wallet) {
      let objData = localStorage.getItem("Wallet");
      if (objData !== "undefined") {
        objData = JSON.parse(objData);
        setWalletAddress(objData?.selectedAccount);
      }
    }
  }, [Wallet]);

  useEffect(() => {
    if (walletAddress) {
      getWalletAddress();
    }
  }, [walletAddress]);

  const logout = async () => {
    try {
      await onDisconnect(Wallet?.type);
      dispatch(setWallet({}));
      toast.success("Wallet Disconnected SuccessFully!");
    } catch (err) {}
  };

  return (
    <>
      <header className="main-header login-header-home">
        <Navbar expand="lg" sticky="top">
          <Container fluid>
            <Row className="w-100 m-auto">
              <Col>
                <div className="d-flex justify-content-between align-items-center">
                  <Navbar.Brand href="/">
                    <img src="assets/img/logo.svg" />
                  </Navbar.Brand>

                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/Dashboard">
                        <i className="fa fa-th-large"></i> Dashboard
                      </Nav.Link>
                      <Nav.Link href="/buy-coin">
                        <i className="fa fa-money"></i> Buy Coin
                      </Nav.Link>
                      <Nav.Link href="/Transactions">
                        <i className="fa fa-exchange"></i> Transactions
                      </Nav.Link>
                      <Nav.Link href="/Profile">
                        <i className="fa fa-user"></i> Profile
                      </Nav.Link>
                      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown> */}

                      <Nav.Link href="/">
                        <i className="fa fa-sign-out"></i> Logout
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>

                  {!Wallet?.selectedAccount ? (
                    <button
                      onClick={() => {
                        setShow(true);
                      }}
                      className="connect-wallet-btn"
                    >
                      Connect Wallet
                    </button>
                  ) : (
                    <Dropdown className="after-connect-dropdown">
                      <Dropdown.Toggle
                        className="connect-wallet-btn"
                        id="dropdown-basic"
                      >
                        <img
                          src={
                            Wallet?.type === "metamask"
                              ? "assets/Compress-img/metamask.svg"
                              : Wallet?.type === "walletConnect"
                              ? "assets/Compress-img/walletconnect.svg"
                              : "assets/Compress-img/coinbase.webp"
                          }
                          loading="lazy"
                          alt="Img"
                        />
                        {Wallet?.selectedAccount.replace(
                          Wallet?.selectedAccount.substring(5, 37),
                          "..."
                        )}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            logout();
                          }}
                        >
                          Disconnect
                        </Dropdown.Item>
                        {/* <Dropdown.Item>Test Link</Dropdown.Item> */}
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                  <ConnectWalletModal {...ConnectWalletModalProps} />

                  <Link to="/" className="ms-auto profile-dropdown">
                    <img src="assets/img/coin.png" /> GTH4536675...
                  </Link>
                  <Link to="/" className="border-btn">
                    Logout <i className="fa fa-sign-out"></i>
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
