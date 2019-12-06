import { useState } from "react";

const useForm = (callback, validate, formFields) => {
  const [values, setValues] = useState({ ...formFields });
  const [errors, setErrors] = useState({ ...formFields });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);

    //console.log(name, value);
    const propertiesKeys = name.split(".");
    //setErrors(validate(name, value, errors));
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
    setIsSubmitting(true);
    //const valid = Object.values(errors).every(value => value === "");
    callback();
    /*
    if (valid && isSubmitting) {
      
    }

    */
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};

export default useForm;
