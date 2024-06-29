/**
 * Updates the plugin version in the 'meta' section
 */

const {
  readFile,
  writeFile,
} = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../');

let version = ''

const SCRIPT_NAME = 'plugin-version-update'
const PATH_PACKAGE_JSON = `${root}/package.json`
const PATH_LIB_ROOT = `${root}/lib/index.js`

readFile(PATH_PACKAGE_JSON, 'utf8', (error, contents) => {
  if (error) {
    console.log(`
        Something went wrong while "${SCRIPT_NAME}" script running.
        Error while reading the file: "${PATH_PACKAGE_JSON}"
        Error: ${error}
        `);
    return;
  }

  const packageJsonObject = JSON.parse(contents)
  version = packageJsonObject.version
});

readFile(PATH_LIB_ROOT, 'utf8', (error, contents) => {
  if (error) {
    console.log(`
        Something went wrong while "${SCRIPT_NAME}" script running.
        Error while reading the file: "${PATH_LIB_ROOT}"
        Error: ${error}
        `);
    return;
  }

  const replaced = contents.replace(/version:\s((["']\d+\.\d+\.\d+["'])|(["']{2}))/g, `version: '${version}'`);

  writeFile(
    PATH_LIB_ROOT, replaced, 'utf8', error => {
      if (error){
        console.log(`
             Something went wrong while "${SCRIPT_NAME}" script running.
             Error while writing the file: "${PATH_LIB_ROOT}"
             Error: ${error}
             `);
      }
    },
  );
});
