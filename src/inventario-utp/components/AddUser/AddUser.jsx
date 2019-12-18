import React from "react";
import useForm from "../../Hooks/useForm";
import validate from "../../utils/validate";
import { create_user } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import "./AddUser.scss";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

const AddUser = props => {
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleSubmit, isInvalid } = useForm(
    submit,
    validate,
    {
      nombreUsuario: "",
      apellidoUsuario: "",
      cedula: "",
      correo: "",
      password: "",
      passwordConfirm: "",
      facultad: "",
      sede: ""
    }
  );

  function submit() {
    create_user(values)(dispatch);

    console.log("valores", values, "errores", errors);
  }

  return (
    <div>
      <Col className=" d-flex justify-content-center" lg="12" md="12">
        <Card className="form-card bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <h1 className="display-1">Agregar usuario</h1>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <h3 className="display-4">Datos del usuario</h3>

              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nombre"
                        type="text"
                        name="nombreUsuario"
                        value={values.nombreUsuario}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.nombreUsuario && (
                      <span className="error">{errors.nombreUsuario}</span>
                    )}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Apellido"
                        type="text"
                        name="apellidoUsuario"
                        value={values.apellidoUsuario}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.apellidoUsuario && (
                      <span className="error">{errors.apellidoUsuario}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-id-card" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Cédula"
                        type="text"
                        name="cedula"
                        value={values.cedula}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.cedula && (
                      <span className="error">{errors.cedula}</span>
                    )}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-at" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Correo elecótronico"
                        type="email"
                        name="correo"
                        value={values.correo}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.correo && (
                      <span className="error">{errors.correo}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-key" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Contraseña"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-key" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Confirmar contraseña"
                        type="password"
                        name="passwordConfirm"
                        value={values.passwordConfirm}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.passwordConfirm && (
                      <span className="error">{errors.passwordConfirm}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <select
                        className="custom-select"
                        name="facultad"
                        value={values.facultad}
                        onChange={handleChange}
                      >
                        <option value="">Facultad</option>
                        <option value="ciencias_tecnologia">
                          Ciencias y Tecnología
                        </option>
                        <option value="civil">Ingeniería Civil</option>
                        <option value="electrica">Ingeniería Eléctrica</option>
                        <option value="industrial">
                          Ingeniería Industrial
                        </option>
                        <option value="mecanica">Ingeniería Mecánica</option>
                        <option value="sistemas">
                          Ingeniería de Sistemas Computacionales
                        </option>
                      </select>
                    </InputGroup>
                    {errors.facultad && (
                      <span className="error">{errors.facultad}</span>
                    )}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <select
                        className="custom-select"
                        name="sede"
                        value={values.sede}
                        onChange={handleChange}
                      >
                        <option value="">Sede </option>
                        <option value="azuero">Azuero</option>
                        <option value="bocas">Bocas del toro</option>
                        <option value="central">Central </option>
                        <option value="chiriqui">Chiriqui</option>
                        <option value="cocle">Coclé</option>
                        <option value="panama_oeste">Panamá Oeste</option>
                        <option value="veraguas">Veraguas</option>
                      </select>
                    </InputGroup>
                    {errors.sede && (
                      <span className="error">{errors.sede}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              <div className="text-center">
                <Button
                  disabled={isInvalid}
                  className="mt-4"
                  color="primary"
                  type="button"
                  onClick={handleSubmit}
                >
                  Agregar Usuario
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default AddUser;
