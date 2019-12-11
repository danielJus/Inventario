import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import validate from "../utils/validate";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, erors } = useForm(
    submit,
    validate,
    {
      nombreUsuario: "",
      cedula: "",
      emailUsuario: "",
      facultadUsuario: "",
      sedeUsuario: ""
    }
  );
  function submit() {
    console.log("object");
  }
  return <div>Editar perfil</div>;
};

export default EditProfile;
