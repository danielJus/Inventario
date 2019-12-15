import React, { useState, useEffect } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import Modal from "react-modal";
import ChangePassword from "./ChangePassword";
import UserInfo from "./UserInfo";
import DeleteProfile from "./DeleteProfile";
import { useSelector } from "react-redux";
export const UserProfile = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const user = useSelector(({ auth }) => auth.user);

  return (
    <div>
      <Container className="mt-5" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0 display-4">Mi cuenta</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button color="danger" size="sm" onClick={toggle}>
                      Eliminar mi cuenta
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <UserInfo user={user} />
                <hr className="my-4" />
                <ChangePassword />
                <hr className="my-4" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} onRequestClose={toggle}>
        <DeleteProfile user={user} />
      </Modal>
    </div>
  );
};

export default UserProfile;
