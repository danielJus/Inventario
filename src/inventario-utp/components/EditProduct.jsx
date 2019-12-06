import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import validate from "../utils/validate";
import logo from "../img/logo_utp_1_300.png";

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

const EditProduct = props => {
  console.log("edit product", props);
  const dispatch = useDispatch();
  const {
    nombre,
    estado,
    precio,
    sede,
    descripcion,
    responsable
  } = props.product;
  //const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    {
      nombre: "",
      descripcion: "",
      imagen: "",
      precio: undefined,
      estado: "",
      responsable: {
        nombre: "",
        correo: "",
        unidad: "",
        sede: "",
        cedula: ""
      }
    }
  );

  function submit() {
    console.log("guardar edit");
  }
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md="6">
              <img style={{ maxWidth: "30rem" }} src={logo} alt="..." />
            </Col>
            <Col>
              <h1 className="mb-4">Editar datos del producto</h1>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="nombre">Nombre</Label>
                    <Input
                      type="text"
                      name="nombre"
                      defaultValue={nombre}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="estado">Estado del producto</Label>
                    <select
                      className="custom-select"
                      name="estado"
                      defaultValue={estado}
                      onChange={handleChange}
                    >
                      <option value="">Elija...</option>
                      <option value="disponible">Disponible</option>
                      <option value="en_uso">En uso</option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="precio">Precio</Label>
                    <Input type="number" name="precio" defaultValue={precio} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="sede">Sede</Label>
                    <select
                      className="custom-select"
                      name="sede"
                      defaultValue={sede}
                      onChange={handleChange}
                    >
                      <option value="">Sede del producto</option>
                      <option value="azuero">Azuero</option>
                      <option value="bocas">Bocas del toro</option>
                      <option value="central">Central </option>
                      <option value="chiriqui">Chiriqui</option>
                      <option value="cocle">Coclé</option>
                      <option value="panama_oeste">Panamá Oeste</option>
                      <option value="veraguas">Veraguas</option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FormGroup>
                    <Label for="descripcion">Descripcion</Label>
                    <textarea
                      name="descripcion"
                      className="form-control"
                      id=""
                      cols="30"
                      rows="10"
                      defaultValue={descripcion}
                      onChange={handleChange}
                    ></textarea>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="responsable.nombre">
                      Nombre del responsable
                    </Label>

                    <Input
                      type="text"
                      defaultValue={responsable.nombre}
                      name="responsable.nombre"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="responsable.cedula">
                      Cédula del responsable
                    </Label>

                    <Input
                      type="text"
                      name="responsable.cedula"
                      defaultValue={responsable.cedula}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="responsable.correo">
                      Correo electrónico del responsable
                    </Label>

                    <Input
                      type="email"
                      name="responsable.correo"
                      placeholder="Correo electrónico"
                      defaultValue={responsable.correo}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="responsable.nombre">
                      Unidad del responsable
                    </Label>

                    <select
                      className="custom-select"
                      name="responsable.unidad"
                      defaultValue={responsable.unidad}
                      onChange={handleChange}
                    >
                      <option value="">Unidad</option>
                      <option value="facultad">Facultad</option>
                      <option value="centro de investigacion">
                        Centro de investigación
                      </option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="responsable.nombre">Sede del responsable</Label>
                    <select
                      className="custom-select"
                      name="responsable.sede"
                      defaultValue={responsable.sede}
                      onChange={handleChange}
                    >
                      <option value="">Sede del responsable</option>
                      <option value="azuero">Azuero</option>
                      <option value="bocas">Bocas del toro</option>
                      <option value="central">Central </option>
                      <option value="chiriqui">Chiriqui</option>
                      <option value="cocle">Coclé</option>
                      <option value="panama_oeste">Panamá Oeste</option>
                      <option value="veraguas">Veraguas</option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md="6"></Col>

            <Col md="6">
              <Button color="success">Guardar cambios</Button>
              <Button color="danger">Cancelar </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default EditProduct;
