import React, { useEffect } from "react";
import { Navbar, Container, Nav, Button, Col, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HeaderHome = () => {
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
              <Navbar  className="" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="assets/img/home/home-logo.png" />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                      <Nav.Link className="active">Home</Nav.Link>
                      <Nav.Link>Product</Nav.Link>
                      <Nav.Link>Services</Nav.Link>
                      <Nav.Link>Why Us</Nav.Link>
                      <Nav.Link>Resources</Nav.Link>
                      <Nav.Link>About</Nav.Link>
                      
                    </Nav>
                  </Navbar.Collapse>
                    <div>
                    <a className="black-btn-home header-btn me-3" href="/login">Login Now</a>
                        <a className="white-btn-home header-btn" href="/Register">Sign Up</a>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   
                </Container>
                </Navbar>
            </header>
    </>
  )
}
