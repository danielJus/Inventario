import React, { useState } from "react";

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
  Col
} from "reactstrap";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [status, setStatus] = useState("");
  const [sedeProducto, setSedeProducto] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [responsableName, setResponsableName] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [unidad, setUnidad] = useState("");
  const [sedeResponsable, setSedeResponsable] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  console.log(
    productName,
    status,
    sedeProducto,
    description,
    image,
    responsableName,
    cedula,
    email,
    unidad,
    sedeResponsable
  );
  return (
    <div>
      <Col lg="12" md="12">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <h3 className="display-1">Agregar producto</h3>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <h3 className="display-4">Datos del producto</h3>
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
                    value={productName}
                    onChange={e => setProductName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend"></InputGroupAddon>
                  <select
                    className="custom-select"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                  >
                    <option value="">Estado del producto</option>
                    <option value="disponible">Disponible</option>
                    <option value="en_uso">En uso</option>
                  </select>
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <select
                    className="custom-select"
                    name="sedes"
                    value={sedeProducto}
                    onChange={e => setSedeProducto(e.target.value)}
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
              <FormGroup>
                <label htmlFor="descripcion">Descripción del producto</label>
                <InputGroup className="input-group-alternative">
                  <textarea
                    className="form-control"
                    name="descripcion"
                    id=""
                    cols="30"
                    rows="10"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  ></textarea>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label htmlFor="iamgen">Imágen</label>
                <InputGroup className="input-group-alternative">
                  <Input
                    name="imagen"
                    type="file"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <h3 className="display-4">Datos del responsable</h3>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <Input
                    type="text"
                    placeholder="Nombre del responsable"
                    value={responsableName}
                    onChange={e => setResponsableName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <Input
                    type="text"
                    placeholder="Cédula del responsable"
                    value={cedula}
                    onChange={e => setCedula(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <select
                    className="custom-select"
                    name="unidad"
                    value={unidad}
                    onChange={e => setUnidad(e.target.value)}
                  >
                    <option value="">Unidad</option>
                    <option value="facultad">Facultad</option>
                    <option value="centro_investigacion">
                      Centro de investigación
                    </option>
                  </select>
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <select
                    className="custom-select"
                    name="sedes"
                    value={sedeResponsable}
                    onChange={e => setSedeResponsable(e.target.value)}
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
