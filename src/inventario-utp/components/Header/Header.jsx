import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector(({ products }) => products.products);
  let costo = 0,
    productosUso = [],
    productosDisponibles = [];

  for (let i = 0; i < products.length; i++) {
    costo += products[i].precio;
    if (products[i].estado === "en_uso") {
      productosUso.push(products[i]);
    } else if (products[i].estado === "disponible") {
      productosDisponibles.push(products[i]);
    }
  }

  return (
    <div className="">
      <Container fluid>
        <div className="header-body">
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
                        Costo total de productos
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {"$" + costo.toFixed(2)}
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
                        cantidad de productos en uso
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {productosUso.length}
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
                        <i className="fas fa-percent" />
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
