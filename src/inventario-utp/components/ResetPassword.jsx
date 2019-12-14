import React from "react";

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
import useForm from "../Hooks/useForm";
import validate from "../utils/validate";
import { useDispatch } from "react-redux";
import { reset_password } from "../redux/actions/authActions";
const ResetPassword = () => {
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    { password: "", passwordConfirm: "", token: "" }
  );
  function submit() {
    let passwords = {
      password: values.password,
      passwordConfirm: values.passwordConfirm
    };
    reset_password(values.token, passwords)(dispatch);
  }
  return (
    <React.Fragment>
      <Container>
        <Col className="mt-5" lg="12" md="12">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <h2>Introduzca su nueva contraseña</h2>
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
                      placeholder="Pegue el código aquí"
                      type="text"
                      name="token"
                      onChange={handleChange}
                      value={values.token}
                    />
                  </InputGroup>
                  {errors.password && <label>{errors.password}</label>}
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Nueva contraseña"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                    />
                  </InputGroup>
                  {errors.password && <label>{errors.password}</label>}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirme su contraseña"
                      name="passwordConfirm"
                      type="password"
                      onChange={handleChange}
                      value={values.passwordConfirm}
                    />
                  </InputGroup>
                  {errors.passwordConfirm && (
                    <label>{errors.passwordConfirm}</label>
                  )}
                </FormGroup>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Cambiar contraseña
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

export default ResetPassword;
