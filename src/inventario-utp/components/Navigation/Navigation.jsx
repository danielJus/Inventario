import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Navigation.scss";

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
        <NavbarBrand href="/">
          <img
            src="http://www.edensoftt.com/aportes/imagenes/logo.png"
            alt="Inventario UTP"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" ml-auto d-flex justify-content-end" navbar>
            {user && user.rol === "coordinador" ? (
              <React.Fragment>
                <NavItem className="mx-4">
                  <NavLink href="/">Productos</NavLink>{" "}
                </NavItem>

                <NavItem className="mx-4">
                  {" "}
                  <NavLink href="/add-product">Agregar</NavLink> Producto
                </NavItem>

                <NavItem className="mx-4">
                  {" "}
                  <NavLink href="/profile">Perfil</NavLink>{" "}
                </NavItem>

                <NavItem className="mx-4" onClick={handleLogout}>
                  <NavLink href="/">Cerrar sesión</NavLink>{" "}
                </NavItem>
              </React.Fragment>
            ) : user && user.rol === "director" ? (
              <React.Fragment>
                <NavItem className="mx-4">
                  {" "}
                  <NavLink href="/">Productos</NavLink>
                </NavItem>

                <NavItem className="mx-4">
                  {" "}
                  <NavLink href="/users">Usuarios</NavLink>
                </NavItem>

                <NavItem className="mx-4">
                  {" "}
                  <NavLink href="/add-product">Agregar Producto</NavLink>
                </NavItem>

                <NavItem className="mx-4">
                  {" "}
                  <NavLink href="/add-user">Agregar Usuario</NavLink>
                </NavItem>

                <NavItem className="mx-4">
                  {" "}
                  <NavLink href="/profile">Perfil</NavLink>
                </NavItem>
                <NavItem className="mx-4" onClick={handleLogout}>
                  <NavLink href="/">Cerrar sesión</NavLink>{" "}
                </NavItem>
              </React.Fragment>
            ) : (
              <NavItem>
                {" "}
                <NavLink href="/login">
                  <button className="btn">Iniciar Sesión</button>
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
