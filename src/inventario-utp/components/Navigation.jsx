import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  DropdownItem
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../redux/actions/authActions";

const Navigation = () => {
  const user = useSelector(({ auth: { user } }) => user);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout()(dispatch);
  };

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">Inventario UTP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" ml-auto d-flex justify-content-end" navbar>
            {user ? (
              <React.Fragment>
                <LinkContainer to="/users">
                  <NavItem className="mx-4">Usuarios</NavItem>
                </LinkContainer>
                <LinkContainer to="/add-product">
                  <NavItem className="mx-4">Agregar Producto</NavItem>
                </LinkContainer>
                <LinkContainer to="/add-user">
                  <NavItem className="mx-4">Agregar Usuario</NavItem>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <NavItem className="mx-4">Perfil</NavItem>
                </LinkContainer>
                <NavItem className="mx-4" onClick={handleLogout}>
                  Cerrar sesión
                </NavItem>
              </React.Fragment>
            ) : (
              <LinkContainer to="/login">
                <NavItem>Iniciar Sesión</NavItem>
              </LinkContainer>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
