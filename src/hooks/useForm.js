import {useState} from 'react';

export function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const getOnChangeHandler = (name) =>
    ({target: {value}}) => setValues((previousFormData) => ({...previousFormData, [name]: value}));

  const handlers = Object.keys(initialState)
    .reduce((acc, key) => ({...acc, [key]: getOnChangeHandler(key)}), {});

  return {
    values,
    handlers
  };
}
