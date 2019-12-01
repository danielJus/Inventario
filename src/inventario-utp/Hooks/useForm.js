import { useState } from "react";

const useForm = (callback, validate, formFields) => {
  const [values, setValues] = useState({ ...formFields });
  const [errors, setErrors] = useState({ ...formFields });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setErrors(validate(name, value, errors));
    console.log(errors);
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    const valid = Object.values(errors).every(value => value === "");

    if (valid && isSubmitting) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};

export default useForm;
