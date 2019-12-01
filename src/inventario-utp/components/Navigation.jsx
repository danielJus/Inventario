import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../redux/actions/authActions";

const Navigation = () => {
  const user = useSelector(({ auth: { user } }) => user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout()(dispatch);
  };

  return (
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
            {user ? (
              <>
                <LinkContainer to="/users">
                  <Nav.Item>Usuarios</Nav.Item>
                </LinkContainer>
                <LinkContainer to="/add-product">
                  <Nav.Item>Agregar Producto</Nav.Item>
                </LinkContainer>
                <LinkContainer to="/add-user">
                  <Nav.Item>Agregar Usuario</Nav.Item>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <Nav.Item>Perfil</Nav.Item>
                </LinkContainer>
                <Nav.Item onClick={handleLogout}>Logout</Nav.Item>
              </>
            ) : (
              <LinkContainer to="/login">
                <Nav.Item>Iniciar Sesión</Nav.Item>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
