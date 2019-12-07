import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { Button, Table } from "reactstrap";
import EditProduct from "./EditProduct";

const ProductList = () => {
  const products = useSelector(({ products }) => products.products);
  const [product, setProduct] = useState("");

  const [modal, setModal] = useState(false);

  const toggle = data => {
    setProduct(data);
    setModal(!modal);
  };
  const close = () => {
    setModal(false);
  };

  console.log("producto elegido", product);
  console.log("modal", modal);

  useEffect(() => {
    Modal.setAppElement("body");
  }, [modal]);
  return (
    <React.Fragment>
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
                <Button color="primary" onClick={() => toggle(product)}>
                  Ver
                </Button>
                <Button color="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} onRequestClose={close}>
        <EditProduct product={product} />
      </Modal>
    </React.Fragment>
  );
};

export default ProductList;
