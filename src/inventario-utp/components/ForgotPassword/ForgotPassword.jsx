import React from "react";
import useForm from "../../Hooks/useForm";
import { useDispatch } from "react-redux";
import {
  Button,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  Alert
} from "reactstrap";
import validate from "../../utils/validate";
import { useSelector } from "react-redux";
import { forgot_password } from "../../redux/actions/authActions";
import "./ForgotPassword.scss";
const ForgotPassword = () => {
  const status = useSelector(({ auth }) => auth.forgot_password);
  const dispatch = useDispatch();
  console.log("status", status);
  const { values, errors, handleChange, handleSubmit, isInvalid } = useForm(
    submit,
    validate,
    {
      correo: ""
    }
  );
  function submit() {
    forgot_password(values)(dispatch);
  }
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col>
              <Card className="card">
                <CardTitle>
                  <h1 className=" mt-4 text-center">Recuperar contraseña</h1>
                </CardTitle>
                <CardBody>
                  <FormGroup>
                    <Label>Correo electrónico</Label>
                    <Input name="correo" onChange={handleChange} />
                    {errors.correo && (
                      <span className="error">{errors.correo}</span>
                    )}
                  </FormGroup>

                  <Button
                    disabled={isInvalid}
                    type="button"
                    className="enviar"
                    onClick={handleSubmit}
                  >
                    Enviar correo
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {status && status === true && (
            <Alert color="success">
              Por favor revise su correo electrónico para poder cambiar su
              contraseña
            </Alert>
          )}

          {status === false && (
            <Alert color="danger">
              No hay usuarios con este correo en la base de datos
            </Alert>
          )}
        </Form>
      </Container>
    </div>
  );
};

export default ForgotPassword;
