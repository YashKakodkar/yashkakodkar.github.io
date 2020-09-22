import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo.png";

class NavBar extends Component {

  render() {
    let navStyle = { backgroundColor: '#000000', color: '#ffffff', paddingLeft: 60, paddingRight: 60, paddingTop: 20, paddingBottom: 20 };
    let linkStyle = { color: '#ffffff', fontWeight: 600, outline: '#FE6E41' };
    return (
      <Navbar style={navStyle}>
        <Navbar.Brand className="d-flex w-100 order-0 mr-auto" href="#/">
          <img src={logo} width="50" height="50" />
        </Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link style={linkStyle} href="#/">Home</Nav.Link>
          <Nav.Link style={linkStyle} href="#/about">About</Nav.Link>
          <Nav.Link style={linkStyle} href="#/projects">Projects</Nav.Link>
        </Nav>

      </Navbar>
    );
  }
}

export default NavBar;