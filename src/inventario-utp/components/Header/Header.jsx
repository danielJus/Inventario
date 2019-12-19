import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";
import { useSelector } from "react-redux";

const Header = () => {
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
    <div className="">
      <Container fluid>
        <div className="header-body">
          <Row>
            <Col>
              <h3>Cantidad de productos por sede</h3>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
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
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Cantidad de Productos
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {products.length}
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="fas fa-balance-scale" />
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
                        Costo total de productos
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {"$" + costo.toFixed(2)}
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                        <i className="fas fa-dollar-sign" />
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
                        cantidad de productos en uso
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {productosUso.length}
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i class="fas fa-ban"></i>
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
                        Cantidad de productos disponibles
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {productosDisponibles.length}
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i className="fas fa-check" />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
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
                        {parseInt(porcentajeUso)}
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i class="fas fa-percentage"></i>
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
                        {parseInt(porcentajeDisponible)}
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                        <i class="fas fa-percentage"></i>
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
                        <i className="fas fa-dollar-sign" />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;
