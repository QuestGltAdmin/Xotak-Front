import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Col,
  Row,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const HeaderHome = () => {
  const { isUserAuthenticated ,user} = useAuth();
  const controlNavbar = () => {
    if (window.scrollY) {
      document.getElementById("headerId").classList.add("darker-header");
      //   HandleClass12();
    }
    if (window.scrollY == 0) {
      document.getElementById("headerId").classList.remove("darker-header");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);


  return (
    <>
      <header className="home-header" id="headerId">
        <Navbar className="" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src="assets/img/home/home-logo.png" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/#" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="/#usp">Services</Nav.Link>
                <Nav.Link href="/#tokenomics">Tokenomics</Nav.Link>
                <Nav.Link href="/#roadmap">Roadmap</Nav.Link>
                <Nav.Link href="/#team">Team</Nav.Link>
                <Nav.Link href="/#faq">FAQ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div>
              {isUserAuthenticated ? (
                user?.user_role === "admin" ? (
                  <Link
                    className="black-btn-home header-btn me-3"
                    to="/dashboard-admin"
                  >
                    AdminDashboard
                  </Link>
                ) : (
                  <Link
                    className="black-btn-home header-btn me-3"
                    to="/Dashboard"
                  >
                    Dashboard
                  </Link>
                )
              ) : (
                <>
                  <Link className="black-btn-home header-btn me-3" to="/login">
                    Login Now
                  </Link>
                  <Link className="white-btn-home header-btn" to="/Register">
                    Register
                  </Link>
                </>
              )}
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </header>
    </>
  );
};
