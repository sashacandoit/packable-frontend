import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// import UserContext from "../auth/UserContext";
import "./NavBar.css"

const NavBar = () => {

  // const loggedInUserNav = () => {
  //   return (
  //     <NavItem>
  //       <NavLink href={`/users/${currentUser.username}`}>Hi {currentUser.username}</NavLink>
  //     </NavItem>
  //   )
  // }

  const loggedOutNav = () => {
    return (
      <>
        <NavItem>
          <NavLink href="/signup">Sign Up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
      </>
    )
  }

  return (
    <Navbar className="transparent-nav" expand="md">
      <Nav>
        <NavbarBrand className="navbar-brand-link" href="/">
          packable
        </NavbarBrand>
      </Nav>
      <Nav className="nav-links-sm" fill>
        {/* {currentUser ? loggedInNav() : loggedOutNav()} */}
        {loggedOutNav()}
      </Nav>
    </Navbar>
  )
}

export default NavBar;
