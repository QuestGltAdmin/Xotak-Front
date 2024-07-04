import React from "react";
import { Navbar, Container, Nav, Button, Col, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Header() {


    return (
        <>
            <header className="main-header login-header-home login-without-scroll">
              <Navbar  className="" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="assets/img/logo.svg" />
                    </Navbar.Brand>
                    <div>
                        <a className="border-btn" href="/">Login</a>
                        <a className="common-btn" href="/Register">Register</a>
                    </div>
                   
                </Container>
                </Navbar>
            </header>
        </>
    )
}