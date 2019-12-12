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
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import validate from "../utils/validate";
import { change_password } from "../redux/actions/authActions";
const ChangePassword = () => {
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    { passwordCurrent: "", password: "", passwordConfirm: "" }
  );

  function submit() {
    change_password(values)(dispatch);
  }

  return (
    <div>
      <Form>
        <h3 className=" mb-4 ">Cambiar contraseña</h3>
        <div className="pl-lg-4">
          <Row>
            <Col md="12">
              <FormGroup>
                <label className="form-control-label">Contraseña actual</label>
                <Input
                  className="form-control-alternative"
                  placeholder="Contraseña actual"
                  name="passwordCurrent"
                  onChange={handleChange}
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label">Nueva contraseña</label>
                <Input
                  className="form-control-alternative"
                  placeholder="Nueva contraseña"
                  name="password"
                  onChange={handleChange}
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
                  placeholder="Confimar nueva contraseñas"
                  name="passwordConfirm"
                  onChange={handleChange}
                  type="password"
                />
              </FormGroup>
            </Col>
            <Col lg="12">
              <Button color="primary" onClick={handleSubmit}>
                {" "}
                Cambiar contraseña
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default ChangePassword;
