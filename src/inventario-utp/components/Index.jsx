import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import validate from "../utils/validate";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import EditProduct from "./EditProduct";
import Modal from "react-modal";
const Index = props => {
  const products = useSelector(({ products }) => products.products);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

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
                    {products.map((product, i) => (
                      <tr key={i}>
                        <td>{product.nombre}</td>
                        <td>Imagen</td>
                        <td>{product.estado}</td>
                        <td>{product.precio}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.responsable.nombre}</td>
                        <td>{product.sede}</td>
                        <td>
                          <Button color="primary" onClick={toggle}>
                            Editar
                          </Button>
                        </td>
                        <Modal isOpen={modal} onRequestClose={toggle}>
                          <EditProduct product={product} />
                        </Modal>
                      </tr>
                    ))}
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
