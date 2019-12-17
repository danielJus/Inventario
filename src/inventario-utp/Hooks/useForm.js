import { useState, useEffect } from "react";

const useForm = (
  callback,
  validate,
  formFields,
  formErrors = null,
  deleteValue = ""
) => {
  const [values, setValues] = useState(formFields);
  const [errors, setErrors] = useState("");
  const [isInvalid, setIsInvalid] = useState(true);
  //console.log("values", values);
  useEffect(() => {
    if (formErrors === null) {
      setErrors(formFields);
    } else {
      setErrors(formErrors);
    }
  }, []);
  let inputArray, errorsArray;
  const handleChange = e => {
    const { name, value } = e.target;
    //console.log(name, value);
    const propertiesKeys = name.split(".");
    setErrors(validate(name, value, errors, deleteValue));
    //console.log(errors);

    if (propertiesKeys.length === 1) {
      setValues({
        ...values,
        [name]: value
      });
    } else if (propertiesKeys.length === 2) {
      setValues({
        ...values,
        [propertiesKeys[0]]: {
          ...values[propertiesKeys[0]],
          [propertiesKeys[1]]: value
        }
      });
    }
  };

  useEffect(() => {
    if (!values.responsable) {
      inputArray = Object.values(values);
      errorsArray = Object.values(errors);

      if (
        inputArray.every(val => val !== "") &&
        errorsArray.every(val => val === "")
      ) {
        setIsInvalid(false);
      } else {
        setIsInvalid(true);
      }
      //console.log("input array", inputArray);
      //console.log("errors array", errorsArray);
    } else if (values.responsable) {
      let finalArray, finalErrorsArray;
      let producto = {
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio: values.precio,
        estado: values.estado,
        cantidad: values.cantidad,
        facultad: values.facultad,
        sede: values.sede
      };
      let productoErrors = {
        nombre: errors.nombre,
        descripcion: errors.descripcion,
        precio: errors.precio,
        estado: errors.estado,
        cantidad: errors.cantidad,
        facultad: errors.facultad,
        sede: errors.sede
      };
      let productoArray = Object.values(producto);
      let responsableArray = Object.values(values.responsable);
      let responsableErrorsArray;
      let errorsArray = Object.values(productoErrors);
      if (errors) responsableErrorsArray = Object.values(errors.responsable);
      finalArray = productoArray.concat(responsableArray);
      finalErrorsArray = errorsArray.concat(responsableErrorsArray);
      //console.log("final array", finalArray);
      //console.log("final errors array", finalErrorsArray);

      if (
        finalArray.every(val => val !== "") &&
        finalErrorsArray.every(val => val === "")
      ) {
        setIsInvalid(false);
      } else {
        setIsInvalid(true);
      }
      //console.log("res array", responsableArray);
      //console.log("errrors array", responsableErrorsArray);
    }
  }, [values, values.responsable, errors]);
  const handleSubmit = e => {
    e.preventDefault();
    if (!isInvalid) callback();
  };

  return {
    values,
    errors,
    isInvalid,
    handleChange,
    handleSubmit
  };
};

export default useForm;
