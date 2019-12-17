import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../redux/actions/authActions";
import { history } from "../../utils/history";

const Navigation = props => {
  const user = useSelector(({ auth: { user } }) => user);
  const dispatch = useDispatch();

  //console.log("user nav", user.rol);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout()(dispatch);
    history.push("/");
  };

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">Inventario UTP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" ml-auto d-flex justify-content-end" navbar>
            {user && user.rol === "coordinador" ? (
              <React.Fragment>
                <LinkContainer to="/products-info">
                  <NavItem className="mx-4">Informcaión de productos</NavItem>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavItem className="mx-4">Productos</NavItem>
                </LinkContainer>
                <LinkContainer to="/add-product">
                  <NavItem className="mx-4">Agregar Producto</NavItem>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <NavItem className="mx-4">Perfil</NavItem>
                </LinkContainer>
                <NavItem className="mx-4" onClick={handleLogout}>
                  Cerrar sesión
                </NavItem>
              </React.Fragment>
            ) : user && user.rol === "director" ? (
              <React.Fragment>
                <LinkContainer to="/products-info">
                  <NavItem className="mx-4">Informcaión de productos</NavItem>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavItem className="mx-4">Productos</NavItem>
                </LinkContainer>
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
