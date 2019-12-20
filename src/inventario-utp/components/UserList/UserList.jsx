import React, { useState, useEffect } from "react";

import Modal from "react-modal";
import { Button, Table } from "reactstrap";
import EditUser from "../EditUser/EditUser";
import DeleteUser from "../DeleteUser/DeleteUser";

const UserList = props => {
  const { users } = props;

  const [user, setUser] = useState("");
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggle = data => {
    setModal(!modal);
    setUser(data);
  };

  const toggleDeleteModal = data => {
    setUser(data);
    setDeleteModal(!deleteModal);
  };

  const close = () => {
    setModal(false);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
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
            <th scope="col">Apellido</th>
            <th scope="col">Cédula</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col">Facultad</th>
            <th scope="col">Sede</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users
            .slice()
            .reverse()
            .map((user, i) => (
              <tr key={user._id}>
                <td>{user.nombreUsuario}</td>
                <td>{user.apellidoUsuario}</td>
                <td>{user.cedula}</td>
                <td>{user.correo}</td>
                <td>{user.facultad}</td>
                <td>{user.sede}</td>
                <td>
                  <Button className="editar" onClick={() => toggle(user)}>
                    Editar
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => toggleDeleteModal(user)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Modal isOpen={modal} onRequestClose={close}>
        <EditUser user={user} />
      </Modal>

      <Modal isOpen={deleteModal} onRequestClose={closeDeleteModal}>
        <DeleteUser user={user} />
      </Modal>
    </React.Fragment>
  );
};

export default UserList;
