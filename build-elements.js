const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/login-element/runtime-es2015.js',
    './dist/login-element/polyfills-es2015.js',
    './dist/login-element/scripts.js',
    './dist/login-element/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/login-element.js');
})();