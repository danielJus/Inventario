import React, { useState } from "react";
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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Input
} from "reactstrap";
import { edit_product } from "../../redux/actions/productActions.js";
import "./EditProduct.scss";

const EditProduct = props => {
  console.log("edit product", props.product);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState("");
  const { product } = props;

  const { handleChange, handleSubmit, values, errors, isInvalid } = useForm(
    submit,
    validate,
    product,
    {
      nombre: "",
      descripcion: "",
      precio: "",
      estado: "",
      cantidad: "",
      facultad: "",
      sede: "",
      responsable: {
        nombre: "",
        apellido: "",
        correo: "",
        unidad: "",
        sede: "",
        cedula: ""
      }
    }
  );

  const {
    nombre,
    estado,
    precio,
    sede,
    facultad,
    descripcion,
    responsable
  } = values;

  const handlePhoto = e => {
    const { files } = e.target;
    setPhoto(files[0]);
  };
  function submit() {
    const fd = new FormData();
    for (var key in values) {
      if (key === "responsable") {
        fd.append(key, JSON.stringify(values[key]));
      } else {
        fd.append(key, values[key]);
      }
    }
    if (photo) {
      fd.append("photo", photo);
    }

    edit_product(product._id, fd)(dispatch);
    console.log("guardar edit");
  }
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md="6">
              <img
                style={{ maxWidth: "30rem" }}
                src={require(`../../img/products/${product.photo}`)}
                alt="..."
              />
              <Input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handlePhoto}
              />
            </Col>
            <Col>
              <h1 className="mb-4">Editar datos del producto</h1>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="nombre">Nombre</Label>
                    <Input
                      type="text"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                    />
                    {errors.nombre && (
                      <span className="error">{errors.nombre}</span>
                    )}
                  </FormGroup>
                </Col>

                <Col>
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
                    {errors.estado && (
                      <span className="error">{errors.estado}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="precio">Precio</Label>
                    <Input
                      type="number"
                      name="precio"
                      defaultValue={precio}
                      onChange={handleChange}
                    />
                    {errors.precio && (
                      <span className="error">{errors.precio}</span>
                    )}
                  </FormGroup>
                </Col>
                <Col>
                  <Label>Cantidad</Label>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Cantidad de items"
                        type="number"
                        name="cantidad"
                        value={values.cantidad}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    {errors.cantidad && (
                      <span className="error">{errors.cantidad}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label>Facultad</Label>
                    <InputGroup className="input-group-alternative">
                      <select
                        className="custom-select"
                        name="facultad"
                        defaultValue={facultad}
                        onChange={handleChange}
                      >
                        <option value="">Facultad</option>
                        <option value="ciencias_tecnologia">
                          Ciencias y Tecnología
                        </option>
                        <option value="civil">Ingeniería Civil</option>
                        <option value="electrica">Ingeniería Eléctrica</option>
                        <option value="industrial">
                          Ingeniería Industrial
                        </option>
                        <option value="mecanica">Ingeniería Mecánica</option>
                        <option value="sistemas">
                          Ingeniería de Sistemas Computacionales
                        </option>
                      </select>
                    </InputGroup>
                    {errors.facultad && (
                      <span className="error">{errors.facultad}</span>
                    )}
                  </FormGroup>
                </Col>
                <Col>
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
                    {errors.sede && (
                      <span className="error">{errors.sede}</span>
                    )}
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
                    {errors.descripcion && (
                      <span className="error">{errors.descripcion}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
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
                    {errors && errors.responsable.nombre && (
                      <span className="error">{errors.responsable.nombre}</span>
                    )}
                  </FormGroup>
                </Col>

                <Col>
                  <FormGroup>
                    <Label for="responsable.apellido">
                      Apellido del responsable
                    </Label>

                    <Input
                      type="text"
                      defaultValue={responsable.apellido}
                      name="responsable.apellido"
                      onChange={handleChange}
                    />
                    {errors && errors.responsable.apellido && (
                      <span className="error">
                        {errors.responsable.apellido}
                      </span>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
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
                    {errors && errors.responsable.cedula && (
                      <span className="error">{errors.responsable.cedula}</span>
                    )}
                  </FormGroup>
                </Col>
                <Col>
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
                    {errors && errors.responsable.correo && (
                      <span className="error">{errors.responsable.correo}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="responsable.unidad">
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
                    {errors && errors.responsable.unidad && (
                      <span className="error">{errors.responsable.unidad}</span>
                    )}
                  </FormGroup>
                </Col>
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
                    {errors && errors.responsable.sede && (
                      <span className="error">{errors.responsable.sede}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col></Col>

            <Col>
              <Button
                disabled={isInvalid}
                color="success"
                onClick={handleSubmit}
              >
                Guardar cambios
              </Button>
              <Button color="danger">Cancelar </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default EditProduct;
