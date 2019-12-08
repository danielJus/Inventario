import { useState } from "react";

const useForm = (callback, validate, formFields, deleteValue = "") => {
  const [values, setValues] = useState({ ...formFields });
  const [errors, setErrors] = useState({ ...formFields });

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

  const handleSubmit = e => {
    e.preventDefault();
    callback();
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};

export default useForm;
