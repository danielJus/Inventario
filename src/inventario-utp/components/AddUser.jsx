import React, { useState } from "react";

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
  Col
} from "reactstrap";
const AddUser = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [facultad, setFacultad] = useState("");
  const [sede, setSede] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Col lg="12" md="12">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <h1 className="display-1">Agregar usuario</h1>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <h3 className="display-4">Datos del usuario</h3>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nombre"
                    type="text"
                    value={nombreUsuario}
                    onChange={e => setNombreUsuario(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
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
                    onChange={e => setCedula(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Correo elecótronico"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <select
                    className="custom-select"
                    name="facultad"
                    value={facultad}
                    onChange={e => setFacultad(e.target.value)}
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

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <select
                    className="custom-select"
                    name="sedes"
                    value={sede}
                    onChange={e => setSede(e.target.value)}
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

              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  type="button"
                  onClick={handleSubmit}
                >
                  Agregar usuario
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
