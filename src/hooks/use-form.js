import {useState} from 'react';

export function useForm(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(
      () => Object.keys(initialState).reduce(
          (acc, key) => ({...acc, [key]: validate ? validate(key, initialState[key]) : undefined}), {}
      )
  );

  const getOnChangeHandler = (name) =>
    ({target: {value}}) => {
      if (validate) {
        setErrors((prevErrors) => ({...prevErrors, [name]: validate(name, value)}));
      }
      setValues((previousFormData) => ({...previousFormData, [name]: value}));
    };

  const handlers = Object.keys(initialState)
    .reduce((acc, key) => ({...acc, [key]: getOnChangeHandler(key)}), {});

  const isValid = Object.values(errors).every((item) => item === undefined);

  return {
    errors,
    values,
    handlers,
    isValid,
  };
}
