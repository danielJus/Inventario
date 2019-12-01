import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => (
  <div>
    <Navbar bg="primary" expand="lg">
      <Navbar.Text href="#home">
        <LinkContainer to="/">
          <Nav.Item>Inventario UTP</Nav.Item>
        </LinkContainer>
      </Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer to="/add-product">
            <Nav.Item>Agregar Producto</Nav.Item>
          </LinkContainer>
          <LinkContainer to="/add-user">
            <Nav.Item>Agregar Usuario</Nav.Item>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Item>Iniciar Sesión</Nav.Item>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Item>Perfil</Nav.Item>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
