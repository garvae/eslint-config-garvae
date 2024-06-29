/**
 *  =========================================================
 *  TypeScript
 *  =========================================================
 */

const {
  configCommonJavaScriptTypeScript,
  extendsCommonJavaScriptTypeScript,
  pluginsCommonJavaScriptTypeScript,
  rulesCommonJavaScriptTypeScript,
} = require('./js-ts-common');

const PROJECT = './tsconfig.eslint.json';

const pluginsTypeScript = [
  ...pluginsCommonJavaScriptTypeScript,
  '@typescript-eslint',
  'typescript-sort-keys',
];

const extendsTypeScript = [
  ...extendsCommonJavaScriptTypeScript,
  'airbnb-typescript',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
  'plugin:import/typescript',
  'plugin:prefer-type-alias/recommended',
];

const rulesTypeScript = {
  ...rulesCommonJavaScriptTypeScript,


  /* --- typescript-eslint --- */
  '@typescript-eslint/ban-ts-comment': 'error',


  '@typescript-eslint/naming-convention': [
    2,
    {
      format: [
        'camelCase',
        'UPPER_CASE',
        'PascalCase',
      ],
      leadingUnderscore: 'allow',
      selector: 'variable',
      trailingUnderscore: 'allow',
    },
    {
      format: [ 'PascalCase', 'camelCase' ],
      selector: 'function',
    },
    {
      custom: {
        match: true,
        regex: '^I[A-Z]',
      },
      format: [ 'PascalCase' ],
      selector: 'interface',
      trailingUnderscore: 'allow',
    },
    {
      format: [ 'PascalCase' ],
      selector: 'typeLike',
    },
    {
      custom: {
        match: true,
        regex: '^T[A-Z]',
      },
      format: [ 'PascalCase' ],
      selector: 'typeAlias',
    },
  ],


  '@typescript-eslint/no-explicit-any': 'error',


  '@typescript-eslint/no-shadow': [ 'error', { ignoreTypeValueShadow: true } ],


  '@typescript-eslint/no-unnecessary-condition': 'error',


  '@typescript-eslint/no-unsafe-argument': 'off',


  '@typescript-eslint/no-unsafe-assignment': 'off',


  '@typescript-eslint/no-unsafe-call': 'off',

  
  '@typescript-eslint/no-unsafe-member-access': 'off',

  
  '@typescript-eslint/no-unsafe-return': 'off',

  
  '@typescript-eslint/no-unused-vars': 'off',

  
  '@typescript-eslint/restrict-template-expressions': 'off',

  
  '@typescript-eslint/space-before-blocks': 'off',

  
  /* --- jsdoc --- */
  'jsdoc/no-types': 0,
  
  
  'jsdoc/require-param': 0,
  
  
  'jsdoc/require-returns': 0,

  /* --- typescript-sort-keys --- */
  'typescript-sort-keys/interface': 'error',
  'typescript-sort-keys/string-enum': 'error',
};

const overridesTypeScript = {
  ...configCommonJavaScriptTypeScript,
  extends: extendsTypeScript,
  files: [ '*.ts', '*.tsx' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...configCommonJavaScriptTypeScript.parserOptions,
    project: PROJECT,
  },
  plugins: pluginsTypeScript,
  rules: rulesTypeScript,
  settings: {
    ...configCommonJavaScriptTypeScript.settings,
    'import/parsers': {
      ...configCommonJavaScriptTypeScript['import/parsers'],
      '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    },
    'import/resolver': {
      ...configCommonJavaScriptTypeScript['import/resolver'],
      typescript: {

        /**
         * Always try to resolve types under `<root>@types` directory
         * even it doesn't contain any source code, like `@types/unist`
         */
        alwaysTryTypes: true,
        project: PROJECT,
      },
    },
  },
};

module.exports = { overridesTypeScript };
