import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Alert,
  Col
} from "reactstrap";

import { login } from "../../redux/actions/authActions";
import "./Login.scss";

const Login = props => {
  const dispatch = useDispatch();
  const error = useSelector(({ auth }) => auth.errorMessage);
  const [user, setUser] = useState({
    correo: "",
    password: ""
  });

  const [alert, setAlert] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  function submit() {
    login(user)(dispatch);
    showAlerts();
  }

  function showAlerts() {
    if (error) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Col className="mt-5" lg="12" md="12">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <h2>Iniciar Sesión</h2>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Correo Electrónico"
                      type="email"
                      name="correo"
                      onChange={handleChange}
                      value={user.correo || ""}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Contraseña"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={user.password || ""}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <label htmlFor=" customCheckLogin">
                    <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                  </label>
                </div>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={submit}
                  >
                    Iniciar Sesión
                  </Button>
                </div>
              </Form>
            </CardBody>

            <Alert className="alert" color="danger" isOpen={alert}>
              <p className="text-center">
                Correo electrónico o contraseña incorrectos
              </p>
            </Alert>
          </Card>
        </Col>
      </Container>
    </React.Fragment>
  );
};

export default Login;
