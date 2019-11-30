import React from "react";
import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import Header from "./Header";

const Index = props => {
  return (
    <div>
      <Header />
      <Container className="mt--7" fluid>
        <Row></Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Productos</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Responsable</th>
                    <th scope="col">Facultad</th>
                    <th scope="col">Sede</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
