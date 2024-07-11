import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Col,
  Row,
  NavDropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  let pathname = location?.pathname;
  pathname = pathname?.split("/")[1];

  return (
    <>
      <header className="main-header login-header-home login-without-scroll">
        <Navbar className="" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src="assets/img/logo.svg" />
            </Navbar.Brand>
            {pathname === "auth-admin-login" || pathname === "auth-admin-otp" ? (
              <></>
            ) : (
              <div>
                <a className="border-btn" href="/">
                  Login
                </a>
                <a className="common-btn" href="/Register">
                  Register
                </a>
              </div>
            )}
          </Container>
        </Navbar>
      </header>
    </>
  );
}
