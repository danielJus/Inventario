import React from "react";
// reactstrap components
import { useDispatch } from "react-redux";
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
  Col
} from "reactstrap";
import useForm from "../../Hooks/useForm";
import validate from "../../utils/validate";
import { login } from "../../redux/actions/authActions";

const Login = props => {
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    { correo: "", password: "" }
  );
  function submit() {
    login(values)(dispatch);
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
                      value={values.email}
                    />
                  </InputGroup>
                  {errors.email && <label>{errors.email}</label>}
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
                      value={values.password}
                    />
                  </InputGroup>
                  {errors.password && <label>{errors.password}</label>}
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <Link to="/forgot-password">Olvidaste tu contraseña?</Link>
                  </label>
                </div>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Iniciar Sesión
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </React.Fragment>
  );
};

export default Login;
