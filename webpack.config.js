// Import config
const browserConfig = require('./config/browser');
const browserPolyfillsConfig = require('./config/browser.polyfills');
const nodeConfig = require('./config/node');

module.exports = [browserConfig, browserPolyfillsConfig, nodeConfig];
