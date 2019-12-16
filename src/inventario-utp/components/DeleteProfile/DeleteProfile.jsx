import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_user } from "../../redux/actions/userActions";
import { logout } from "../../redux/actions/authActions";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import useForm from "../../Hooks/useForm";
import validate from "../../utils/validate";

const DeleteProfile = props => {
  const { _id, nombreUsuario } = props.user;
  const dispatch = useDispatch();
  const none = null;

  const { handleChange, handleSubmit, values, isInvalid } = useForm(
    submit,
    validate,
    { usuarioBorrar: "" },
    none,
    nombreUsuario
  );
  function submit() {
    delete_user(_id)(dispatch);
    logout()(dispatch);
  }
  return (
    <div>
      <Container>
        <h3>Esta seguro que desea eliminar su cuenta</h3>
        <p>Para poder eliminar su cuenta debe introduzca su nombre</p>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label>Nombre del usuario</Label>
                <Input
                  onChange={handleChange}
                  name="usuarioBorrar"
                  value={values.usuarioBorrar}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col>
            <p>
              Al precionar el boton de eliminar cuenta todos los datos de esta
              cuenta seran eliminados!
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button disabled={isInvalid} color="danger" onClick={handleSubmit}>
              Eliminar cuenta
            </Button>

            <Button color="secondary">cancelar</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeleteProfile;
