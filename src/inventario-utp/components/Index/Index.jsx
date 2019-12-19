import React, { useState } from "react";
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
  Col
} from "reactstrap";
import "./Index.scss";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
const Index = props => {
  const [query, setQuery] = useState("");
  const products = useSelector(({ products }) => products.products);
  let userChoice = products.filter(
    product =>
      product.estado.includes(query) ||
      product.nombre.toLowerCase().includes(query) ||
      product.responsable.nombre.toLowerCase().includes(query) ||
      product.facultad.includes(query) ||
      product.sede.includes(query)
  );

  return (
    <React.Fragment>
      <div>
        <Container className="mt-7" fluid>
          <Header />
          <Container>
            <Form className="mt-4">
              <Row>
                <Col>
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Buscar..."
                        className="search"
                        type="text"
                        name="query"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Container>

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

                <ProductList products={query ? userChoice : products} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Index;
