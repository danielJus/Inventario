import React, { useState, useEffect } from "react";

import { Button, FormGroup, Form, Input, Row, Col } from "reactstrap";
import EditProfile from "./EditProfile";
import Modal from "react-modal";
const UserInfo = props => {
  const {
    nombreUsuario,
    apellidoUsuario,
    correo,
    cedula,
    facultad,
    sede
  } = props.user;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  return (
    <div>
      <Form>
        <h3 className="mb-4">Información</h3>
        <div className="pl-lg-4">
          <Row>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-username">
                  Nombre
                </label>
                <Input
                  className="form-control-alternative"
                  disabled
                  value={nombreUsuario}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-username">
                  Apellido
                </label>
                <Input
                  className="form-control-alternative"
                  value={apellidoUsuario}
                  disabled
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-email">
                  Correo electrónico
                </label>
                <Input type="email" value={correo} disabled />
              </FormGroup>
            </Col>

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
                  value={cedula}
                  disabled
                  type="text"
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
                  Facultad
                </label>
                <Input
                  className="form-control-alternative"
                  value={facultad}
                  disabled
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-last-name">
                  Sede
                </label>
                <Input
                  className="form-control-alternative"
                  disabled
                  value={sede}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <div>
                <Button type="button" onClick={toggle} color="success">
                  Editar información
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Form>
      <Modal isOpen={modal} onRequestClose={toggle}>
        <EditProfile />
      </Modal>
    </div>
  );
};

export default UserInfo;
