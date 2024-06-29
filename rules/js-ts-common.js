/**
 *  =========================================================
 *  JavaScript / TypeScript common
 *  =========================================================
 */

const { rulesCommonJavaScriptTypeScript } = require('./js-ts-common.rules');

const pluginsCommonJavaScriptTypeScript = [
  '@getify/proper-arrows',
  '@getify/proper-ternary',
  '@stylistic/js',
  'array-func',
  'better-styled-components',
  'destructuring',
  'import',
  'jsdoc',
  'jsx-a11y',
  'modules-newline',
  'newline-destructuring',
  'no-unsanitized',
  'perfectionist',
  'pii',
  'prettier',
  'react',
  'react-hooks',
  'react-redux',
  'sort-destructure-keys',
  'sort-keys-fix',
  'styled-components-a11y',
  'unused-imports',
  'write-good-comments',
];

const extendsCommonJavaScriptTypeScript = [
  'airbnb',
  'airbnb/hooks',
  'plugin:@getify/proper-arrows/getify-says',
  'plugin:@getify/proper-ternary/getify-says',
  'plugin:array-func/recommended',
  'plugin:destructuring/recommended',
  'plugin:eslint-comments/recommended',
  'plugin:import/recommended',
  'plugin:jsdoc/recommended-error',
  'plugin:jsx-a11y/recommended',
  'plugin:no-unsanitized/DOM',
  'plugin:pii/recommended',
  'plugin:prettier/recommended',
  'plugin:react-hooks/recommended',
  'plugin:react-redux/recommended',
  'plugin:react/recommended',
  'plugin:security/recommended-legacy',
  'plugin:styled-components-a11y/recommended',
  'plugin:unicorn/recommended',
  'plugin:you-dont-need-lodash-underscore/compatible',
];

const configCommonJavaScriptTypeScript = {
  parserOptions: {
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
      modules: true,
      restParams: true,
      spread: true,
    },

    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: 'detect' } },
};

module.exports = {
  configCommonJavaScriptTypeScript,
  extendsCommonJavaScriptTypeScript,
  pluginsCommonJavaScriptTypeScript,
  rulesCommonJavaScriptTypeScript,
};
