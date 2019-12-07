import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { Button, Table } from "reactstrap";
import EditUser from "./EditUser";

const UserList = () => {
  const users = useSelector(({ user }) => user.users);
  const [user, setUser] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = data => {
    setModal(!modal);
    setUser(data);
  };

  const close = () => {
    setModal(false);
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
            <th scope="col">Cédula</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col">Facultad</th>
            <th scope="col">Sede</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <td>{user.nombre}</td>
              <td>{user.cedula}</td>
              <td>{user.correo}</td>
              <td>{user.facultad}</td>
              <td>{user.sede}</td>
              <td>
                <Button color="primary" onClick={() => toggle(user)}>
                  Editar
                </Button>
                <Button color="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modal} onRequestClose={close}>
        <EditUser user={user} />
      </Modal>
    </React.Fragment>
  );
};

export default UserList;
