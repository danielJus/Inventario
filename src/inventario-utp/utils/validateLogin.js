export default function validate(name, value, errors) {
  switch (name) {
    case "email":
      errors.email = value.length < 6 || !value ? "Email is required" : "";
      break;
    case "password":
      errors.password =
        value.length < 6 || value === ""
          ? "Password needs to be longer than 6 characters"
          : "";
      break;
    case "nombreUsuario":
      errors.nombreUsuario =
        value.length < 3 || !value ? "Nombre invalido" : "";
      break;
    default:
      break;
  }

  return errors;
}
