import React from "react";

import { Card, CardHeader, Container, Row, Col, Alert } from "reactstrap";

import ProductList from "../ProductList/ProductList";
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

                <ProductList />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Index;
