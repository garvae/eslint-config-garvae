/**
 *  =========================================================
 *  Markdown
 *  =========================================================
 */

const rulesMarkdown = {

  /* MD013/line-length - Line length */
  'markdownlint/md013': 'off',


  /* MD024/no-duplicate-heading/no-duplicate-header - Headings with the same content */
  'markdownlint/md024': [ 'error', { siblings_only: true } ],


  /* MD033/no-inline-html - Inline HTML */
  'markdownlint/md033': [ 'error', { allowed_elements: [ 'hr', 'br' ] } ],
};

const overridesMarkdown = {
  extends: [ 'plugin:markdownlint/recommended' ],
  files: [ '*.md' ],
  parser: 'eslint-plugin-markdownlint/parser',
  rules: rulesMarkdown,
};

module.exports = { overridesMarkdown };
