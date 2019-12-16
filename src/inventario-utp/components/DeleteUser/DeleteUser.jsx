import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../../Hooks/useForm";
import validate from "../../utils/validate";
import { delete_user } from "../../redux/actions/userActions";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const DeleteUser = props => {
  const dispatch = useDispatch();
  let none = null;
  const { _id, nombreUsuario } = props.user;

  const { handleChange, handleSubmit, values, isInvalid } = useForm(
    submit,
    validate,
    { usuarioBorrar: "" },
    none,
    nombreUsuario
  );
  function submit() {
    delete_user(_id)(dispatch);
    console.log("borrar usuario");
  }
  return (
    <div>
      <Container>
        <section>
          <h1>Desea al usuario: "{nombreUsuario}" de la base de datos?</h1>
          <p className="display-4">
            Para poder eliminar este producto de la base de datos introduzca: "
            {nombreUsuario}" y luego presione el botón "eliminar producto"
          </p>
        </section>

        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label>Nombre del usuario</Label>
                <Input
                  name="usuarioBorrar"
                  value={values.usuarioBorrar}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <Button
                color="danger"
                disabled={isInvalid}
                onClick={handleSubmit}
              >
                Eliminar usuario
              </Button>
              <Button color="secondary">Cancelar</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default DeleteUser;
