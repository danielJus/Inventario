import React, { useState, useEffect } from "react";

import { Card, CardHeader, Container, Row, Col, Alert } from "reactstrap";
import "./Index.scss";
import { useSelector } from "react-redux";
import ProductList from "../ProductList/ProductList";
const Index = props => {
  const user = useSelector(({ auth }) => auth.user);
  console.log("user", user);

  const [alert, setAlert] = useState(false);
  const showAlerts = () => {
    if (user) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  };

  useEffect(() => {
    showAlerts();
  }, []);
  return (
    <React.Fragment>
      <div>
        <Container className="mt-7" fluid>
          <Row></Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <Alert className="alert" color="success" isOpen={alert}>
                  <p className="text-center">
                    Bienvenido: {user && user.nombreUsuario}
                  </p>
                </Alert>

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
