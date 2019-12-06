import React from "react";

import { Button, Container, Row, Col } from "reactstrap";

const DeleteProfile = props => {
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
            <Button color="danger">Eliminar cuenta</Button>

            <Button color="secondary">cancelar</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeleteProfile;
