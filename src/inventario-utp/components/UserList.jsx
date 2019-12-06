import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { Button } from "reactstrap";
import EditUser from "./EditUser";

const UserList = () => {
  const users = useSelector(({ user }) => user.users);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      {users.map((user, i) => (
        <tr key={user._id}>
          <td>{user.nombre}</td>
          <td>{user.cedula}</td>
          <td>{user.correo}</td>
          <td>{user.facultad}</td>
          <td>{user.sede}</td>
          <td>
            <Button color="primary" onClick={toggle}>
              Editar
            </Button>
          </td>
          <Modal isOpen={modal} onRequestClose={toggle}>
            <EditUser user={user} />
          </Modal>
        </tr>
      ))}
    </>
  );
};

export default UserList;
