import React, {useContext} from "react";
import UserContext from "../auth/UserContext";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// import UserContext from "../auth/UserContext";
import "./NavBar.css"

const NavBar = ({ logout }) => {
  
  const { currentUser } = useContext(UserContext)

  const loggedInUserNav = () => {
    return (
      <> 
        <NavItem>
          <NavLink href={`/lists`}>{(currentUser.lists).length} Lists</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/" onClick={logout}>Logout</NavLink>
        </NavItem>
      </>
    )
  }

  const loggedOutNav = () => {
    return (
      <>
        <NavItem>
          <NavLink href="/register">Sign Up</NavLink>
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
        {currentUser ? loggedInUserNav() : loggedOutNav()}
        {/* {loggedOutNav()} */}
      </Nav>
    </Navbar>
  )
}

export default NavBar;
