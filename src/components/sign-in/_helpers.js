import {FIELD_NAMES} from './_const';

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validate = (name, value) => {
  switch (name) {
    case FIELD_NAMES.EMAIL:
      if (!emailRegExp.test(value)) {
        return `The e-mail is invalid`;
      } else {
        return undefined;
      }
    case FIELD_NAMES.PASSWORD:
      if (value.length < 1) {
        return `Well, at least enter A SINGLE CHARACTER in the password field :P`;
      } else {
        return undefined;
      }
    default:
      return undefined;
  }
};
