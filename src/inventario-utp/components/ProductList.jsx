import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { Button } from "reactstrap";
import EditProduct from "./EditProduct";

const ProductList = () => {
  const products = useSelector(({ products }) => products.products);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  return (
    <React.Fragment>
      {products.map((product, i) => (
        <tr key={product._id}>
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
            <Modal isOpen={modal} onRequestClose={toggle}>
              <EditProduct product={product} />
            </Modal>
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default ProductList;
