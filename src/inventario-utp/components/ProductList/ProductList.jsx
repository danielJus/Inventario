import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { Button, Table } from "reactstrap";
import EditProduct from "../EditProduct/EditProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import RequestProduct from "../RequestProduct/RequestProduct";

const ProductList = () => {
  const products = useSelector(({ products }) => products.products);
  const user = useSelector(({ auth }) => auth.user);
  const [product, setProduct] = useState("");

  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);

  const toggleDeleteModal = data => {
    setProduct(data);
    setDeleteModal(!deleteModal);
  };

  const toggle = data => {
    setProduct(data);
    setModal(!modal);
  };
  const toggleRequestModal = data => {
    setProduct(data);
    setRequestModal(!modal);
  };
  const close = () => {
    setModal(false);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const closeRequestModal = () => {
    setRequestModal(false);
  };

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
            <th scope="col">Cantidad</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Responsable</th>
            <th scope="col">Facultad</th>
            <th scope="col">Sede</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <td>{product.nombre}</td>
              <td>
                <img
                  src={require(`../../img/products/${product.photo}`)}
                  alt="..."
                  style={{ width: "5rem" }}
                />
              </td>
              <td>{product.estado}</td>
              <td>{product.precio}</td>
              <td>{product.cantidad}</td>
              <td>{product.descripcion}</td>
              <td>{product.responsable.nombre}</td>
              <td>{product.facultad}</td>
              <td>{product.sede}</td>
              <td>
                <Button color="primary" onClick={() => toggle(product)}>
                  Editar
                </Button>

                <Button
                  color="success"
                  type="button"
                  onClick={() => toggleRequestModal(product)}
                >
                  Solicitar
                </Button>

                {user && (
                  <Button
                    color="danger"
                    onClick={() => toggleDeleteModal(product)}
                  >
                    Eliminar
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} onRequestClose={close}>
        <EditProduct product={product} />
      </Modal>

      <Modal isOpen={deleteModal} onRequestClose={closeDeleteModal}>
        <DeleteProduct product={product} />
      </Modal>
      <Modal isOpen={requestModal} onRequestClose={closeRequestModal}>
        <RequestProduct product={product} />
      </Modal>
    </React.Fragment>
  );
};

export default ProductList;
