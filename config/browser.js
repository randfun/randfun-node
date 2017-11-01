const path = require('path');
const plugins = require('./common/plugins');

const browserConfig = {
  context: path.resolve(__dirname, '../'),
  entry: ['whatwg-fetch', './index.browser.js'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'randfun.browser.js',
    library: 'randfun',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins,
};

module.exports = browserConfig;
