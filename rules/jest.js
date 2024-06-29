/**
 *  =========================================================
 *  Jest
 *  =========================================================
 */

const JEST_PACKAGE_JSON_PATH = 'jest/package.json'

const extendsJest = [  ];

const pluginsJest = [ 'jest' ];

const rulesJest = {
  'jest/expect-expect': 'warn',
  'jest/no-alias-methods': 'error',
  'jest/no-commented-out-tests': 'warn',
  'jest/no-conditional-expect': 'error',
  'jest/no-deprecated-functions': 'error',
  'jest/no-disabled-tests': 'warn',
  'jest/no-done-callback': 'error',
  'jest/no-export': 'error',
  'jest/no-focused-tests': 'error',
  'jest/no-identical-title': 'error',
  'jest/no-interpolation-in-snapshots': 'error',
  'jest/no-jasmine-globals': 'error',
  'jest/no-mocks-import': 'error',
  'jest/no-standalone-expect': 'error',
  'jest/no-test-prefixes': 'error',
  'jest/prefer-to-be': 'error',
  'jest/prefer-to-contain': 'error',
  'jest/prefer-to-have-length': 'warn',
  'jest/valid-describe-callback': 'error',
  'jest/valid-expect': 'error',
  'jest/valid-expect-in-promise': 'error',
  'jest/valid-title': 'error',
};

const getJestVersion = () => {
  try {
    // eslint-disable-next-line global-require, import/no-unresolved, import/no-dynamic-require -- this is recommended solution
    const jest = require(JEST_PACKAGE_JSON_PATH);

    if (jest) {
      return jest.version;
    }
  } catch {
    return undefined;
  }

  return undefined;
};

const overridesJest = {
  env: { jest: true },
  extends: extendsJest,
  files: [ '*.test.*', '*.spec.*' ],
  plugins: pluginsJest,
  rules: rulesJest,
  settings: { jest: { version: getJestVersion() } },
};

module.exports = { overridesJest };
