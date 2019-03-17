import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import "../App.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="left">
          <NavLink tag={RRNavLink} className="nav-link" activeClassname="active" to="/Home">
            Home
          </NavLink>
          <NavLink tag={RRNavLink} className="nav-link" activeClassname="active" to="/About">
            About Me
          </NavLink>
        </div>
        {/* NEED TO FIX Splitting the nav bar into 2 divs // created 2 lines rather than splitting them left and right */}
        <div className="right">
          <NavLink tag={RRNavLink} className="nav-link" activeClassname="active" to="/Login">
            Login
          </NavLink>
          <NavLink tag={RRNavLink} className="nav-link" activeClassname="active" to="/Logout">
            Logout
          </NavLink>
          <NavLink tag={RRNavLink} className="nav-link" activeClassname="active" to="/Register">
            Register
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;