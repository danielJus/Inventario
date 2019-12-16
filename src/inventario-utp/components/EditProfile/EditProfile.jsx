import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../Hooks/useForm";
import validate from "../../utils/validate";
import { edit_user } from "../../redux/actions/userActions";
import {
  Button,
  FormGroup,
  InputGroup,
  Label,
  Form,
  Input,
  Row,
  Col,
  Container
} from "reactstrap";
import "./EditProfile.scss";

const EditProfile = () => {
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors, isInvalid } = useForm(
    submit,
    validate,
    user,
    {
      nombreUsuario: "",
      apellidoUsuario: "",
      cedula: "",
      correo: "",
      facultad: "",
      sede: ""
    }
  );
  console.log("user", user);
  function submit() {
    edit_user(user._id, values)(dispatch);
    console.log("object");
  }
  return (
    <div>
      <Container>
        <h1>Editar mi información</h1>

        <Form>
          <Row>
            <Col>
              <Label>Nombre</Label>
              <Input
                name="nombreUsuario"
                onChange={handleChange}
                defaultValue={user.nombreUsuario}
              />
              {errors.nombreUsuario && (
                <span className="error">{errors.nombreUsuario}</span>
              )}
            </Col>
            <Col>
              <Label>Apellido</Label>
              <Input
                name="apellidoUsuario"
                onChange={handleChange}
                defaultValue={user.apellidoUsuario}
              />
              {errors.apellidoUsuario && (
                <span className="error">{errors.apellidoUsuario}</span>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Correo electrónico</Label>
              <Input
                name="correo"
                onChange={handleChange}
                defaultValue={user.correo}
              />
              {errors.correo && <span className="error">{errors.correo}</span>}
            </Col>
            <Col>
              <Label>Cédula</Label>
              <Input
                name="cedula"
                onChange={handleChange}
                defaultValue={user.cedula}
              />
              {errors.cedula && <span className="error">{errors.cedula}</span>}
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Facultad</Label>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <select
                    className="custom-select"
                    name="facultad"
                    defaultValue={user.facultad}
                    onChange={handleChange}
                  >
                    <option value="">Facultad</option>
                    <option value="ciencias_tecnologia">
                      Ciencias y Tecnología
                    </option>
                    <option value="civil">Ingeniería Civil</option>
                    <option value="electrica">Ingeniería Eléctrica</option>
                    <option value="industrial">Ingeniería Industrial</option>
                    <option value="mecanica">Ingeniería Mecánica</option>
                    <option value="sistemas">
                      Ingeniería de Sistemas Computacionales
                    </option>
                  </select>
                </InputGroup>
                {errors.facultad && (
                  <span className="error">{errors.facultad}</span>
                )}
              </FormGroup>
            </Col>
            <Col>
              <Label>Sede</Label>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <select
                    className="custom-select"
                    name="sede"
                    defaultValue={user.sede}
                    onChange={handleChange}
                  >
                    <option value="">Sede </option>
                    <option value="azuero">Azuero</option>
                    <option value="bocas">Bocas del toro</option>
                    <option value="central">Central </option>
                    <option value="chiriqui">Chiriqui</option>
                    <option value="cocle">Coclé</option>
                    <option value="panama_oeste">Panamá Oeste</option>
                    <option value="veraguas">Veraguas</option>
                  </select>
                </InputGroup>
                {errors.sede && <span className="error">{errors.sede}</span>}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                disabled={isInvalid}
                type="button"
                color="success"
                onClick={handleSubmit}
              >
                Guardar cambios
              </Button>
              <Button type="button">Cancelar</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default EditProfile;
