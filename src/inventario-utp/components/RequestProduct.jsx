import React from "react";
import {
  Button,
  FormGroup,
  InputGroup,
  CardHeader,
  Label,
  Form,
  Input,
  Row,
  Col,
  Card,
  CardBody,
  Container
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../Hooks/useForm";
import validate from "../utils/validate";
import { request_product } from "../redux/actions/productActions";

const RequestProduct = props => {
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    {
      nombreSolicitante: "",
      apellidoSolicitante: "",
      cedulaSolicitante: "",
      correoSolicitante: "",
      descripcion: ""
    }
  );
  const user = useSelector(({ auth }) => auth.user);
  function submit() {
    const requestFields = {};
    requestFields.correo = user.correo;
    requestFields.values = values;
    if (user) {
      requestFields.correo = user.correo;
      requestFields.values = values;
      request_product(props.product._id, requestFields)(dispatch);
    }

    if (!user) {
      requestFields.values = values;
      request_product(props.product._id, requestFields)(dispatch);
    }
  }
  return (
    <div>
      <Container>
        <Col className="mt-5" lg="12" md="12">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <h2>Solicitar Producto: {props.product.nombre}</h2>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form>
                <Row className="mb-3">
                  <Label>Responsable del producto</Label>
                  <Col>
                    <Input
                      disabled={true}
                      value={props.product.responsable.nombre}
                    />
                  </Col>

                  <Col>
                    <Input
                      disabled={true}
                      value={props.product.responsable.nombre}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Label>Correo electrónico</Label>
                  <Col>
                    <Input
                      disabled={true}
                      value={props.product.responsable.correo}
                    />
                  </Col>
                </Row>
                <hr className="my-4" />
                <h2>Datos del solicitante</h2>
                {user ? (
                  <Row className="mb-3">
                    <Col>
                      <Label>Nombre</Label>
                      <Input disabled value={user.nombreUsuario} />
                    </Col>
                    <Col>
                      <Label>Apellido</Label>
                      <Input disabled value={user.apellidoUsuario} />
                    </Col>
                    <Col>
                      <Label>Cédula</Label>
                      <Input disabled value={user.cedula} />
                    </Col>
                    <Col>
                      <Label>Correo electrónico</Label>
                      <Input disabled value={user.correo} />
                    </Col>
                  </Row>
                ) : (
                  <Row className="mb-3">
                    <Col>
                      <Label>Nombre</Label>
                      <Input name="nombreSolicitante" onChange={handleChange} />
                    </Col>
                    <Col>
                      <Label>Apellido</Label>
                      <Input
                        apellido="apellidoSolicitante"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col>
                      <Label>Cédula</Label>
                      <Input name="cedulaSolicitante" onChange={handleChange} />
                    </Col>
                    <Col>
                      <Label>Correo electrónico</Label>
                      <Input name="correoSolicitante" onChange={handleChange} />
                    </Col>
                  </Row>
                )}

                <Row className="mb-3">
                  <Col>
                    <Label>Descripción</Label>
                    <textarea
                      onChange={handleChange}
                      name="descripcion"
                      className="form-control"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col>
                    <Button
                      color="success"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Enviar solicitud
                    </Button>
                    <Button type="button">Cancelar</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default RequestProduct;
