import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import validate from "../utils/validate";

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

const EditUser = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate,
    { nombreUsuario: "" }
  );

  function submit() {
    console.log("submit edit user");
  }

  const { nombre, cedula, correo, facultad, sede } = props.user;
  return (
    <div>
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
                  value={nombre}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormGroup>
          </Col>
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
                  value={cedula}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
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
                  value={correo}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Facultad</Label>
              <InputGroup className="input-group-alternative">
                <select
                  className="custom-select"
                  name="facultad"
                  value={facultad}
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
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <select
                  className="custom-select"
                  name="sedes"
                  value={sede}
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
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col>
            <Button
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
    </div>
  );
};

export default EditUser;
