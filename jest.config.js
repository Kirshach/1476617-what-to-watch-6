module.exports = {
  "moduleNameMapper": {
    "\\.(css|less)$": `<rootDir>/src/style-mock.js`
  },
  "setupFilesAfterEnv": [
    `./setup-tests.js`
  ]
};
