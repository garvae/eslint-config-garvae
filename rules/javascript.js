/**
 *  =========================================================
 *  JavaScript
 *  =========================================================
 */

const {
  configCommonJavaScriptTypeScript,
  extendsCommonJavaScriptTypeScript,
  pluginsCommonJavaScriptTypeScript,
  rulesCommonJavaScriptTypeScript,
} = require('./js-ts-common');

const pluginsJavaScript = [ ...pluginsCommonJavaScriptTypeScript ];

const extendsJavaScript = [ ...extendsCommonJavaScriptTypeScript ];

const rulesJavaScript = {
  ...rulesCommonJavaScriptTypeScript,

  /* unicorn/prefer-module */
  'unicorn/prefer-module': 'off',
};

const overridesJavaScript = {
  ...configCommonJavaScriptTypeScript,
  extends: extendsJavaScript,
  files: [ '*.js', '*.jsx' ],
  parser: '@babel/eslint-parser',
  plugins: pluginsJavaScript,
  rules: rulesJavaScript,
};

module.exports = { overridesJavaScript };
