import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" light expand="md">
        <NavbarBrand href="/">Dollar</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="header" isOpen={isOpen} navbar>
          <Nav className="menu" navbar>
            <NavItem className="menu__link">
              <NavLink className="menu__link-item" href="/components/">About me</NavLink>
            </NavItem>
            <NavItem className="menu__link">
              <NavLink className="menu__link-item" href="/components/">Experience</NavLink>
            </NavItem>
            <NavItem className="menu__link">
              <NavLink className="menu__link-item" href="/components/">Skill</NavLink>
            </NavItem>
            <NavItem className="menu__link">
              <NavLink className="menu__link-item" href="/components/">Project</NavLink>
            </NavItem>
            <NavItem className="menu__link">
              <NavLink className="menu__link-item" href="/components/">Activiti</NavLink>
            </NavItem>
            <NavItem className="menu__link">
              <NavLink className="menu__link-item" href="/components/">Contact Me</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;