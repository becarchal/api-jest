// https://jestjs.io/docs/en/configuration#__docusaurus
const {defaults} = require('jest-config');
// const testInstance = ;

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  testEnvironment: 'node',
  bail: true,
  verbose: true,
  collectCoverage: false,
  testTimeout: 5000
};
