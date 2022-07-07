import React from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";

class NavigationBar extends React.Component() {
  render() {
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
        <NavDropdown
          eventKey={3}
          title="Dropdown"
          id="basic-nav-dropdown"
        ></NavDropdown>
      </Nav>
    </Navbar>;
  }
}
export default NavigationBar;