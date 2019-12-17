import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Card,
  CardHeader,
  FormGroup,
  Row,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Table,
  CardBody,
  CardTitle
} from "reactstrap";
const ProductsInfo = () => {
  const products = useSelector(({ products }) => products.products);
  let costo = 0,
    productosUso = [],
    productosDisponibles = [],
    azuero = 0,
    bocas = 0,
    chiriqui = 0,
    cocle = 0,
    colon = 0,
    panama = 0,
    pOeste = 0,
    veraguas = 0;

  for (let i = 0; i < products.length; i++) {
    costo += products[i].precio;
    if (products[i].estado === "en_uso") {
      productosUso.push(products[i]);
    } else if (products[i].estado === "disponible") {
      productosDisponibles.push(products[i]);
    }

    if (products[i].sede === "azuero") {
      azuero++;
    }
    if (products[i].sede === "bocas") {
      bocas++;
    }
    if (products[i].sede === "chiriqui") {
      chiriqui++;
    }
    if (products[i].sede === "cocle") {
      cocle++;
    }
    if (products[i].sede === "colon") {
      colon++;
    }

    if (products[i].sede === "central") {
      panama++;
    }
    if (products[i].sede === "pOeste") {
      pOeste++;
    }

    if (products[i].sede === "veraguas") {
      veraguas++;
    }
  }

  let porcentajeUso = (productosUso.length / products.length) * 100;
  let porcentajeDisponible =
    (productosDisponibles.length / products.length) * 100;
  let costoPromedio = costo / products.length;
  return (
    <div>
      <Container>
        <Row>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Porcentaje de productos en uso
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {porcentajeUso}
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i className="fas fa-chart-bar" />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Porcentaje de productos disponibles
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {porcentajeDisponible}
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                      <i className="fas fa-chart-pie" />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Costo promedio de producto
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {"$" + costoPromedio.toFixed(2)}
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                      <i className="fas fa-users" />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <h3>Cantidad de productos por sede</h3>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th scope="col">Azuero</th>
                  <th scope="col">Bocas del toro</th>
                  <th scope="col">Chiriquí</th>
                  <th scope="col">Coclé</th>
                  <th scope="col">Colón</th>
                  <th scope="col">Panamá </th>
                  <th scope="col">Panamá Oeste</th>
                  <th scope="col">Veraguas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{azuero}</td>
                  <td>{bocas}</td>
                  <td>{chiriqui}</td>
                  <td>{cocle}</td>
                  <td>{colon}</td>
                  <td>{panama}</td>
                  <td>{pOeste}</td>
                  <td>{veraguas}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <h3>Productos divididos por estado</h3>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Disponibles</th>
                  <th>En uso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {productosDisponibles.map(producto => producto.nombre)}
                  </td>
                  <td> {productosUso.map(producto => producto.nombre)}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsInfo;
