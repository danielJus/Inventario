import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_user } from "../redux/actions/userActions";
import { logout } from "../redux/actions/authActions";
import { Button, Container, Row, Col } from "reactstrap";

const DeleteProfile = props => {
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  function submit() {
    delete_user(user._id)(dispatch);
    logout()(dispatch);
  }
  return (
    <div>
      <Container>
        <h3>Esta seguro que desea eliminar su cuenta</h3>
        <Row>
          <Col>
            <p>
              Al precionar el boton de eliminar cuenta todos los datos de esta
              cuenta seran eliminados!
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button color="danger" onClick={submit}>
              Eliminar cuenta
            </Button>

            <Button color="secondary">cancelar</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeleteProfile;
