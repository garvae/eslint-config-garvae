/**
 *  =========================================================
 *  Main Config
 *  =========================================================
 */

const {
  overridesHtml,
  overridesHtmlIndex,
} = require('./rules/html');
const { overridesJavaScript } = require('./rules/javascript');
const { overridesJest } = require('./rules/jest');
const { overridesJson } = require('./rules/json');
const { overridesMarkdown } = require('./rules/markdown');
const { overridesTypeScript } = require('./rules/typescript');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    document: true,
    window: true,
  },
  overrides: [
    overridesTypeScript,
    overridesJavaScript,
    overridesMarkdown,
    overridesHtml,
    overridesHtmlIndex,
    overridesJest,
    overridesJson,
  ],
  root: true,
};
