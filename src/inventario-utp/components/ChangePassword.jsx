import React from "react";
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
  Col
} from "reactstrap";

const ChangePassword = () => {
  return (
    <div>
      <Form>
        <h3 className=" mb-4 ">Cambiar contraseña</h3>
        <div className="pl-lg-4">
          <Row>
            <Col md="12">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-address">
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
                <label className="form-control-label" htmlFor="input-city">
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
                <label className="form-control-label" htmlFor="input-country">
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
      </Form>
    </div>
  );
};

export default ChangePassword;
