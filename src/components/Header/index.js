import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          MyApp
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/users">
                Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/all-post">
                All Posts
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
