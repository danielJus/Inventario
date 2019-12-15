import { valid_email, valid_string, valid_precio, valid_cedula } from "./regex";
let password = "";
export default function validate(name, value, errors, deleteValue = "") {
  switch (name) {
    case "correo":
      errors.correo =
        valid_email.test(value) !== true || !value
          ? "Introduzca una direccion de correo electrónico válida"
          : "";
      break;
    case "password":
      password = value;
      errors.password =
        value.length < 6 || !value
          ? "La contraseña debe ser mayor a 6 caracteres"
          : "";
      break;
    case "passwordConfirm":
      console.log("password", password, "confirm", value);
      errors.passwordConfirm =
        value !== password ? "Las contraseñas deben coincidir" : "";
      break;
    case "passwordCurrent":
      password = value;
      errors.passwordCurrent =
        value.length < 6 || !value
          ? "La contraseña debe ser mayor a 6 caracteres"
          : "";
      break;
    case "token":
      errors.token =
        !value || value.length < 64
          ? "Código inválido revise su correo y copie el código enviado"
          : "";
      break;
    case "nombreUsuario":
      errors.nombreUsuario =
        !valid_string.test(value) || value.length < 2 || !value
          ? "Nombre inválido"
          : "";
      break;
    case "apellidoUsuario":
      errors.apellidoUsuario =
        !valid_string.test(value) || value.length < 2 || !value
          ? "Apellido inválido"
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
    case "nombre":
      errors.nombre =
        !value || value.length < 3
          ? "Introduzca un nombre de producto válido"
          : "";
      break;
    case "estado":
      errors.estado = !value ? "Seleccione el estado del producto" : "";
      break;
    case "precio":
      errors.precio =
        !valid_precio.test(value) || value < 0
          ? "Introduzca un precio válido"
          : "";
      break;
    case "descripcion":
      errors.descripcion =
        !value || value.length < 6 ? "Introduzca una descripción válida" : "";
      break;
    case "cantidad":
      errors.cantidad =
        !value || value < 1 ? "No puede haber menos de un producto" : "";
      break;
    case "responsable.nombre":
      errors.responsable.nombre =
        !value || value.length < 2 || !valid_string.test(value)
          ? "Introduzca un nombre válido"
          : "";
      break;
    case "responsable.apellido":
      errors.responsable.apellido =
        !value || value.length < 2 || !valid_string.test(value)
          ? "Introduzca un apellido válido"
          : "";
      break;
    case "responsable.cedula":
      errors.responsable.cedula =
        !value || valid_cedula(value) !== true
          ? "Introduzca una cédula válida"
          : "";
      break;
    case "responsable.correo":
      errors.responsable.correo =
        valid_email.test(value) !== true || !value
          ? "Introduzca una direccion de correo electrónico válida"
          : "";
      break;
    case "responsable.unidad":
      errors.responsable.unidad = !value
        ? "Seleccione la unidad del responsable"
        : "";
      break;
    case "responsable.sede":
      errors.responsable.sede = !value
        ? "Seleccione la sede del responsable"
        : "";
      break;
    case "productoBorrar":
      console.log("deletevalue", deleteValue);
      errors.productoBorrar =
        value.toLowerCase() !== deleteValue.toLowerCase() || !value
          ? "los nombres deben coincidir"
          : "";
      break;
    case "usuarioBorrar":
      console.log("deletevalue", deleteValue);
      errors.usuarioBorrar =
        value.toLowerCase() !== deleteValue.toLowerCase() || !value
          ? "los nombres deben coincidir"
          : "";
      break;
    default:
      break;
  }

  return errors;
}
