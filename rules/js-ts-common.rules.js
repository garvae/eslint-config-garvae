/**
 *  =========================================================
 *  JavaScript / TypeScript common rules
 *  =========================================================
 */

/* eslint-disable sort-keys-fix/sort-keys-fix -- don't need it here */

const { LINE_LENGTH } = require('../vars/common');

const rulesCommonJavaScriptTypeScript = {

  /* --- eslint --- */
  'array-bracket-spacing': [ 'error', 'always' ],
  'array-callback-return': 'warn',
  'arrow-parens': [ 2, 'as-needed' ],
  'class-methods-use-this': 0,
  'max-len': 0,
  'comma-dangle': [ 'error', 'always-multiline' ],
  indent: [
    'warn',
    2,
    {
      ignoredNodes: [ 'JSXElement' ],
      SwitchCase: 1,
    },
  ],
  'linebreak-style': 'off',
  'max-classes-per-file': [ 'error', 100 ],
  'no-console': 'warn',
  'no-implicit-coercion': 'off',
  'no-multiple-empty-lines': [ 'error', {
    max: 2,
    maxBOF: 1,
    maxEOF: 10,
  } ],
  'no-plusplus': 0,
  'no-shadow': 'off',
  'no-underscore-dangle': 0,
  'object-curly-spacing': [ 'error', 'always' ],
  'padded-blocks': 0,
  'space-in-parens': [ 'error', 'never' ],
  'max-params': [ 'error', 2 ],
  'quote-props': [
    'error',
    'as-needed',
    { keywords: false },
  ],

  /* --- array-func --- */
  'array-func/prefer-array-from': 'off',

  /* --- unicorn --- */
  // 'unicorn/filename-case': 'off',
  'unicorn/no-useless-undefined': 'off',
  'unicorn/prevent-abbreviations': [ 'error', {
    allowList: {
      props: true,
      getInitialProps: true,
    },
    checkFilenames: false,
  } ],

  /* --- better-styled-components --- */
  'better-styled-components/sort-declarations-alphabetically': 2,

  /* --- stylistic/js --- */
  '@stylistic/js/quotes': [ 'error', 'single' ],

  /* --- comments --- */
  'no-warning-comments': [ process.env.NODE_ENV === 'production' ? 'error' : 'warn', {
    terms: [ 'TODO', 'FIXME' ],
    location: 'anywhere',
  } ],
  'react/jsx-no-comment-textnodes': 1,
  'eslint-comments/require-description': [ 'error', { ignore: [ 'eslint-enable' ] } ],
  'eslint-comments/no-restricted-disable': [ 'error', 'react-hooks/exhaustive-deps' ],
  'eslint-comments/disable-enable-pair': [ 'error', { allowWholeFile: true } ],
  'eslint-comments/no-duplicate-disable': 'error',
  'eslint-comments/no-unlimited-disable': 'off',
  'eslint-comments/no-use': 'off',
  'spaced-comment': [
    'error',
    'always',
    {
      markers: [ '/' ],
      exceptions: [ '-' ],
      block: { balanced: true },
    },
  ],
  'lines-around-comment': [ 'error', { beforeBlockComment: true } ],
  'multiline-comment-style': 0,
  'write-good-comments/write-good-comments': 0,

  /**
   * '@garvae/comments/no-line-comments': [ 'error', {
   *     fixable: false,
   *     singleLineToSingleLineBlock: true,
   *   } ],
   */

  // '@garvae/comments/no-line-comments': 0,

  /* --- newline / wrapping --- */
  'array-bracket-newline': [ 'error', { minItems: 3 } ],
  'array-element-newline': [ 'error', { minItems: 3 } ],
  'function-paren-newline': [ 'error', { minItems: 4 } ],
  'newline-destructuring/newline': [ 'error', {
    items: 2,
    itemsWithRest: 2,
    maxLength: 20,
  } ],
  'newline-per-chained-call': [ 'error' ],
  'object-curly-newline': [ 'error', {
    ObjectExpression: {
      multiline: false,
      minProperties: 2,
    },
    ObjectPattern: {
      multiline: false,
      minProperties: 2,
    },
    ImportDeclaration: {
      multiline: false,
      minProperties: 2,
    },
    ExportDeclaration: {
      multiline: false,
      minProperties: 2,
    },
  } ],
  'object-property-newline': [ 'error', { allowMultiplePropertiesPerLine: false } ],
  'object-shorthand': 2,
  curly: 'error',

  /* --- unused detection --- */
  'no-unused-vars': 'off',

  /* --- sorting --- */
  'sort-destructure-keys/sort-destructure-keys': [ 2, { caseSensitive: true } ],
  'sort-keys-fix/sort-keys-fix': 'error',

  /* --- imports --- */
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [ 'warn', {
    vars: 'all',
    varsIgnorePattern: '^_',
    args: 'after-used',
    argsIgnorePattern: '^_',
  } ],
  'import/no-extraneous-dependencies': [ 'error', { devDependencies: [ '**/*.test.ts', '**/*.test.tsx' ] } ],
  'import/prefer-default-export': 'off',
  'import/no-anonymous-default-export': 'off',
  'import/namespace': 'error',
  'import/no-named-as-default': 'off',
  'import/export': 'error',
  'import/order': [ 'error', {
    alphabetize: {
      order: 'asc',
      caseInsensitive: true,
    },
    groups: [
      'builtin',
      'external',
      'internal',
      'parent',
      'sibling',
      'index',
    ],
    pathGroups: [
      {
        pattern: 'react*',
        group: 'external',
        position: 'before',
      },
      {
        pattern: '*',
        group: 'external',
        position: 'before',
      },
      {
        pattern: './*.[^scss]',
        group: 'index',
        position: 'before',
      },
      {
        pattern: './*.module.scss',
        group: 'index',
        position: 'after',
      },
    ],
    pathGroupsExcludedImportTypes: [ 'react' ],
    'newlines-between': 'always',
  } ],
  // 'no-restricted-imports': [ 'error', { patterns: aliases.map(alias => `../${alias}/*`) } ],
  'modules-newline/import-declaration-newline': 'warn',
  'modules-newline/export-declaration-newline': 'warn',
  'no-restricted-imports': [ 'error', { patterns: [ '@mui/*/*/*' ] } ],

  /* --- perfectionist --- */
  'perfectionist/sort-array-includes': [ 'error', {
    type: 'natural',
    order: 'asc',
  } ],
  'perfectionist/sort-classes': [ 'error', {
    type: 'natural',
    order: 'asc',
    groups: [
      'index-signature',
      'static-property',
      'private-property',
      'property',
      'constructor',
      'static-method',
      'private-method',
      'method',
    ],
  } ],
  'perfectionist/sort-maps': [ 'error', {
    type: 'natural',
    order: 'asc',
  } ],
  'perfectionist/sort-union-types': [ 'error', {
    type: 'natural',
    order: 'asc',
  } ],

  /* --- react --- */
  'react-hooks/exhaustive-deps': 2,
  'react/destructuring-assignment': 0,
  'react/function-component-definition': [ 2, {
    namedComponents: 'arrow-function',
    unnamedComponents: 'arrow-function',
  } ],
  'react/jsx-boolean-value': 0,
  'react/jsx-closing-bracket-location': [ 2, 'line-aligned' ],
  'react/jsx-closing-tag-location': [ 2, 'line-aligned' ],
  'react/jsx-curly-newline': [ 2, {
    multiline: 'require',
    singleline: 'forbid',
  } ],
  'react/jsx-equals-spacing': 2,
  'react/jsx-filename-extension': 0,
  'react/jsx-first-prop-new-line': [ 2, 'multiline-multiprop' ],
  'react/jsx-fragments': [ 2, 'syntax' ],
  'react/jsx-indent': [
    2,
    2,
    {
      indentLogicalExpressions: true,
      checkAttributes: false,
    },
  ],
  'react/jsx-indent-props': [ 2, 2 ],
  'react/jsx-key': 2,
  'react/jsx-max-props-per-line': [ 1, { maximum: 1 } ],
  'react/jsx-newline': [ 2, { prevent: false } ],
  'react/jsx-no-bind': 0,
  'react/jsx-no-constructed-context-values': 0,
  'react/jsx-no-duplicate-props': 2,
  'react/jsx-no-target-blank': 0,
  'react/jsx-no-useless-fragment': 2,
  'react/jsx-props-no-multi-spaces': 2,
  'react/jsx-props-no-spreading': 0,
  'react/sort-default-props': 1,
  'react/jsx-sort-props': 2,
  'react/jsx-tag-spacing': [ 2, {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  } ],
  'react/jsx-wrap-multilines': [ 2, {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
  } ],
  'react/no-danger': 0,
  'react/no-typos': 2,
  'react/no-unescaped-entities': 2,
  'react/no-unstable-nested-components': 0,
  'react/no-unused-prop-types': 1,
  'react/prop-types': 0,
  'react/react-in-jsx-scope': 0,
  'react/jsx-curly-brace-presence': 2,
  'react/require-default-props': [ 0 ],
  'react/sort-comp': 2,

  /* --- jsdoc --- */
  'jsdoc/tag-lines': [
    'warn',
    'any',
    { startLines: 1 },
  ],

  /* --- @getify --- */
  '@getify/proper-ternary/nested': 'error',
  '@getify/proper-ternary/parens': 0,
  '@getify/proper-ternary/where': [ 'error', {
    statement: true,
    property: false,
    argument: true,
    return: false,
    default: true,
    sub: true,
    assignment: false,
  } ],
  '@getify/proper-arrows/name': 'off',
  '@getify/proper-arrows/params': 'off' /* replaced with <'max-params': ['error', 1]>, */,
  '@getify/proper-arrows/return': [ 'error', {
    object: false,
    chained: false,
    sequence: true,
    trivial: true,
    ternary: 2,
  } ],
  '@getify/proper-arrows/this': 'off',
  '@getify/proper-arrows/where': 'off',

  /* --- no-unsanitized --- */
  'no-unsanitized/method': 'error',
  'no-unsanitized/property': 'error',

  /* --- destructuring --- */
  'destructuring/no-rename': 'off',
  'destructuring/in-params': [ 'error', { 'max-params': 1 } ],
  'destructuring/in-methods-params': 'off',

  /* --- prettier config --- */
  'prettier/prettier': [ 'error', {
    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    endOfLine: 'auto',
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    jsxSingleQuote: true,
    lineLength: LINE_LENGTH,
    printWidth: LINE_LENGTH,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    rangeEnd: 0,
    rangeStart: 0,
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
    vueIndentScriptAndStyle: false,
  } ],
};


module.exports = { rulesCommonJavaScriptTypeScript };

/* eslint-enable */
