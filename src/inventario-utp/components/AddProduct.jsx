import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import validate from "../utils/validate";
import { create_product } from "../redux/actions/productActions";
import "./AddProduct.scss";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    {
      nombre: "",
      descripcion: "",
      imagen: "",
      precio: 0,
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
    create_product(values)(dispatch);
    console.log("submit");
  }

  return (
    <div>
      <Col className="mx-auto d-flex justify-content-center" lg="12" md="12">
        <Card className="form-card bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <h3 className="display-1">Agregar producto</h3>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <h3 className="display-4">Datos del producto</h3>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nombre del producto"
                        type="text"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend"></InputGroupAddon>
                      <select
                        className="custom-select"
                        name="estado"
                        value={values.estado}
                        onChange={handleChange}
                      >
                        <option value="">Estado del producto</option>
                        <option value="disponible">Disponible</option>
                        <option value="en_uso">En uso</option>
                      </select>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <select
                        className="custom-select"
                        name="sede"
                        value={values.sede}
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
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Precio del producto"
                        type="number"
                        name="precio"
                        value={values.precio}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <label htmlFor="descripcion">
                      Descripción del producto
                    </label>
                    <InputGroup className="input-group-alternative">
                      <textarea
                        className="form-control"
                        name="descripcion"
                        id=""
                        cols="30"
                        rows="10"
                        value={values.descripcion}
                        onChange={handleChange}
                      ></textarea>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label htmlFor="iamgen">Imágen</label>
                    <InputGroup className="input-group-alternative">
                      <Input
                        name="imagen"
                        type="file"
                        value={values.imagen}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>

              <h3 className="display-4">Datos del responsable</h3>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <Input
                        type="text"
                        placeholder="Nombre del responsable"
                        value={values.responsable.nombre}
                        name="responsable.nombre"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <Input
                        type="text"
                        name="responsable.cedula"
                        placeholder="Cédula del responsable"
                        value={values.responsable.cedula}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <Input
                        type="email"
                        name="responsable.correo"
                        placeholder="Correo electrónico"
                        value={values.responsable.correo}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <select
                        className="custom-select"
                        name="responsable.unidad"
                        value={values.responsable.unidad}
                        onChange={handleChange}
                      >
                        <option value="">Unidad</option>
                        <option value="facultad">Facultad</option>
                        <option value="centro de investigacion">
                          Centro de investigación
                        </option>
                      </select>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <select
                        className="custom-select"
                        name="responsable.sede"
                        value={values.responsable.sede}
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
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>

              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  type="button"
                  onClick={handleSubmit}
                >
                  Agregar Producto
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default AddProduct;
