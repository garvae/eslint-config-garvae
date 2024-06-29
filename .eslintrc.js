/**
 *  =========================================================
 *  Main Config
 *  =========================================================
 */
const eslintrc = require('./.eslintrc.lib');
const { ignore } = require('./vars/ignore');

module.exports = {
  ...eslintrc,
  ignorePatterns: ignore,
};

