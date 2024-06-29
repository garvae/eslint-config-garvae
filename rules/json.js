/**
 *  =========================================================
 *  JSON
 *  =========================================================
 */

const rulesJson = {};

const overridesJson = {
  extends: [ 'plugin:jsonc/recommended-with-json' ],
  files: [ '*.json' ],
  parser: 'jsonc-eslint-parser',
  rules: rulesJson,
};

module.exports = { overridesJson };
