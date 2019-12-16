import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../../Hooks/useForm";
import validate from "../../utils/validate";
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
import { delete_product } from "../../redux/actions/productActions";
const DeleteProduct = props => {
  const { nombre } = props.product;
  const dispatch = useDispatch();
  let none = null;

  const { handleChange, handleSubmit, values, errors, isInvalid } = useForm(
    submit,
    validate,
    { productoBorrar: "" },
    none,
    nombre
  );
  function submit() {
    delete_product(props.product._id)(dispatch);
    console.log("borrar producto");
  }
  return (
    <div>
      <Container>
        <section>
          <h1>Desea eliminar el producto: "{nombre}" de la base de datos?</h1>
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
                <Input
                  name="productoBorrar"
                  value={values.productoBorrar}
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

export default DeleteProduct;
