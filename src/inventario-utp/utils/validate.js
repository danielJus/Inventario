import { valid_email, valid_string, valid_precio, valid_cedula } from "./regex";

export default function validate(name, value, errors, deleteValue = "") {
  let password = "";
  switch (name) {
    case "correo":
      errors.correo =
        valid_email.test(value) !== true || !value ? "Email is required" : "";
      break;
    case "password":
      password = value;
      errors.password =
        value.length < 6 || !value
          ? "Password needs to be longer than 6 characters"
          : "";
      break;
    case "passwordConfirm":
      errors.passwordConfirm =
        value !== password ? "Las contraseñas deben coincidir" : "";
      break;
    case "nombreUsuario":
      errors.nombreUsuario =
        !valid_string.test(value) || value.length < 3 || !value
          ? "Nombre invalido"
          : "";
      break;
    case "cedula":
      errors.cedula =
        !value || valid_cedula(value) !== true
          ? "Introduzca una cédula válida"
          : "";
      break;

    case "facultad":
      errors.facultad = !value ? "Seleccione una facultad" : "";
      break;
    case "sede":
      errors.sede = !value ? "Seleccione una sede" : "";
      break;
    default:
      break;
  }

  return errors;
}
