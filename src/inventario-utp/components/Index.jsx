import React from "react";

import { Card, CardHeader, Table, Container, Row, Col } from "reactstrap";

import ProductList from "./ProductList";
const Index = props => {
  return (
    <React.Fragment>
      <div>
        <Container className="mt-7" fluid>
          <Row></Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Productos</h3>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Imagen</th>
                      <th scope="col">Estado</th>

                      <th scope="col">Precio</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Responsable</th>
                      <th scope="col">Sede</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ProductList />
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Index;
