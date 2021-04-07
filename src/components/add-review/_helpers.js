import {FIELD_NAMES} from './_const';

export const validate = (name, value) => {
  switch (name) {
    case FIELD_NAMES.COMMENT:
      if (value.length < 50) {
        return `Comment should be at least 50 characters long.`;
      } else if (value.length > 400) {
        return `Comment should be at most 400 characters long.`;
      } else {
        return undefined;
      }
    case FIELD_NAMES.RATING: {
      if (value === null) {
        return `Film should be rated`;
      } else {
        const numValue = Number(value);
        if (!(Number.isInteger(numValue) || numValue > 10 || numValue < 0)) {
          return `Unknown rating value`;
        } else {
          return undefined;
        }
      }
    }
    default:
      return undefined;
  }
};

export const formatValues = (values) => {
  return {
    ...values,
    [FIELD_NAMES.RATING]: Number(values[FIELD_NAMES.RATING])
  };
};
