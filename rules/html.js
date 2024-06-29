/**
 *  =========================================================
 *  HTML
 *  =========================================================
 */

const { LINE_LENGTH } = require('../vars/common');

const rulesHtml = {

  /**
   * The reason for disabling this rule is that sometimes we want to use HTML template builders like Gulp.
   * and break the HTML code into smaller chunks that we can reuse across multiple HTML files.
   * or to simplify HTML development.
   * Such HTML chunks do not need to contain the document type in each file.
   * We can't disable this rule at the top of our HTML chunks because this rule will only be disabled
   * after the first line, but not on the first line.
   *
   * Today we do not need to add a doctype, because modern browsers can parse html files without it.
   */
  '@html-eslint/require-doctype': [ 'off' ],


  'max-len': [ 'error', { code: LINE_LENGTH } ],


  /**
   * The reason of disabling this rule is some kind of bug in the "eslint-plugin-html" library.
   * It breaks the ESLint parser when this rule is enabled
   */
  'spaced-comment': [ 'off' ],
};

const overridesHtml = {
  extends: [ 'plugin:@html-eslint/recommended' ],
  files: [ '*.html' ],
  parser: '@html-eslint/parser',
  plugins: [ 'html', '@html-eslint' ],
  rules: rulesHtml,
};

const overridesHtmlIndex = {
  ...overridesHtml,
  files: [ 'public/index.html' ],
  rules: {
    ...overridesHtml.rules,
    'max-len': 'off',
  },
};

module.exports = {
  overridesHtml,
  overridesHtmlIndex,
};
