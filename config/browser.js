const path = require('path');
const plugins = require('./common/plugins');

const browserConfig = {
  context: path.resolve(__dirname, '../'),
  entry: './index.browser.js',
  devtool: 'source-map',
  mode: 'production',
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
