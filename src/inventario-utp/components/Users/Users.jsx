import React, { useState } from "react";

import {
  Container,
  Card,
  CardHeader,
  FormGroup,
  Row,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";
import UserList from "../UserList/UserList";
import { useSelector } from "react-redux";
import "./Users.scss";

const Users = () => {
  const [query, setQuery] = useState("");
  const users = useSelector(({ user }) => user.users);
  let userChoice = users.filter(
    user =>
      user.nombreUsuario.toLowerCase().includes(query) ||
      user.apellidoUsuario.toLowerCase().includes(query) ||
      user.cedula.includes(query) ||
      user.correo.includes(query) ||
      user.facultad.includes(query) ||
      user.sede.includes(query)
  );

  return (
    <div>
      <Container className="mt-7" fluid>
        <Form className="mt-4">
          <Row>
            <Col>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input
                    className="form-control"
                    placeholder="Buscar..."
                    type="text"
                    name="query"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row></Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Usuarios : {users.length}</h3>
                  </div>
                </Row>
              </CardHeader>
              <UserList users={userChoice ? userChoice : users} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Users;
