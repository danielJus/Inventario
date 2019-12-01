import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";

import { Modal } from "react-bootstrap";
export const UserProfile = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [facultad, setFacultad] = useState("");
  const [sede, setSede] = useState("");
  return (
    <div>
      <Container className="mt-5" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0 display-4">Mi cuenta</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="danger"
                      href="#pablo"
                      onClick={() => setSmShow(true)}
                      size="sm"
                    >
                      Eliminar mi cuenta
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h3 className="mb-4">Información</h3>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nombre
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="lucky.jesse"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Correo electrónico
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Cédula
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Lucky"
                            id="input-first-name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Facultad
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Sede
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <div>
                          <Button
                            color="success"
                            onClick={() => setLgShow(true)}
                          >
                            Editar información
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h3 className=" mb-4 ">Cambiar contraseña</h3>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Contraseña actual
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Nueva contraseña
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Confirmar contraseña
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <Button color="primary"> Cambiar contraseña</Button>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Editar datos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md="6">
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
            </Col>
            <Col md="6">
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
            </Col>
          </Row>

          <Row>
            <Col md="6">
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
            </Col>
            <Col md="6">
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
            </Col>
          </Row>
          <Row>
            <Col md="12">
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
            </Col>
          </Row>
          <Row>
            <Col>
              <Button color="success">Guardar cambios</Button>
              <Button onClick={() => setLgShow(false)} color="secondary">
                Cancelar
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title className="display-3" id="example-modal-sizes-title-sm">
            Eliminar cuenta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-5">
            <Col>
              Al aceptar se borrara toda su información de la base de datos
            </Col>
          </Row>
          <Row>
            <Col>
              <Button color="danger">Borrar cuenta</Button>
              <Button onClick={() => setSmShow(false)} color="secondary">
                Cancelar
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserProfile;
