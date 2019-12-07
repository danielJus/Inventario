import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import validate from "../utils/validate";
import { delete_user } from "../redux/actions/userActions";
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
  const { _id, nombre } = props.user;

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    { nombre: "" }
  );
  function submit() {
    delete_user(_id)(dispatch);
    console.log("borrar usuario");
  }
  return (
    <div>
      <Container>
        <section>
          <h1>Desea al usuario: "{nombre}" de la base de datos?</h1>
          <p className="display-4">
            Para poder eliminar este producto de la base de datos introduzca: "
            {nombre}" y luego presione el botón "eliminar producto"
          </p>
        </section>

        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label>Nombre del producto</Label>
                <Input value={values.nombre} onChange={handleChange} />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <Button color="danger" onClick={handleSubmit}>
                Eliminar producto
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
