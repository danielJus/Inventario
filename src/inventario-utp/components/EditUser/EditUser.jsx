import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useForm from "../../Hooks/useForm";
import validate from "../../utils/validate";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  Input
} from "reactstrap";
import "./EditUser.scss";

import { edit_user } from "../../redux/actions/userActions";

const EditUser = props => {
  const dispatch = useDispatch();
  const { user } = props;
  const { values, errors, handleChange, handleSubmit, isInvalid } = useForm(
    submit,
    validate,
    user,
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
    edit_user(user._id, values)(dispatch);
    console.log("submit edit user", user);
  }

  const {
    nombreUsuario,
    apellidoUsuario,
    cedula,
    correo,
    facultad,
    sede
  } = values;

  return (
    <div>
      <Container>
        <Form role="form">
          <h3 className="display-4">Editar usuario</h3>
          <Row>
            <Col>
              <FormGroup>
                <Label>Nombre</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nombre"
                    type="text"
                    name="nombreUsuario"
                    defaultValue={nombreUsuario}
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
                <Label>Apellido</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Apellido"
                    type="text"
                    name="apellidoUsuario"
                    defaultValue={apellidoUsuario}
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
                <Label>Cédula</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Cédula"
                    type="text"
                    name="cedula"
                    defaultValue={cedula}
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
                <Label>Correo electrónico</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Correo elecótronico"
                    type="email"
                    name="correo"
                    defaultValue={correo}
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
                <Label>Facultad</Label>
                <InputGroup className="input-group-alternative">
                  <select
                    className="custom-select"
                    name="facultad"
                    defaultValue={facultad}
                    onChange={handleChange}
                  >
                    <option value="">Facultad</option>
                    <option value="ciencias_tecnologia">
                      Ciencias y Tecnología
                    </option>
                    <option value="civil">Ingeniería Civil</option>
                    <option value="electrica">Ingeniería Eléctrica</option>
                    <option value="industrial">Ingeniería Industrial</option>
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
                <Label>Sede</Label>
                <InputGroup className="input-group-alternative">
                  <select
                    className="custom-select"
                    name="sede"
                    defaultValue={sede}
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
                {errors.sede && <span className="error">{errors.sede}</span>}
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col></Col>
            <Col>
              <Button
                disabled={isInvalid}
                className="mt-4"
                color="success"
                type="button"
                onClick={handleSubmit}
              >
                Guardar Cambios
              </Button>

              <Button className="mt-4" color="danger" type="button">
                Cancelar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default EditUser;
