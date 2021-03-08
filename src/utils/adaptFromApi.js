const toCamelCase = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

export const keysToCamelCase = (data) => {
  if (Array.isArray(data)) {
    return data.map((item) => keysToCamelCase(item));
  } else if (typeof data === `object`) {
    return Object.entries(data)
      .reduce((acc, [key, value]) =>
        ({...acc, [toCamelCase(key)]: keysToCamelCase(value)}),
      {});
  }
  return data;
};

export const adaptFromApi = (data) => keysToCamelCase(data);
