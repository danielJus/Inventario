import React, { useState } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";
const FileUpload = () => {
  const [photo, setPhoto] = useState("");

  const handlePhoto = e => {
    const { files } = e.target;
    setPhoto(files[0]);
  };
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Input type="file" onChange={handlePhoto} />
          </Col>
        </Row>
        <Button></Button>
      </Form>
    </div>
  );
};

export default FileUpload;
