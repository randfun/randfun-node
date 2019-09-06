const path = require('path');
const plugins = require('./common/plugins');

const nodeConfig = {
  context: path.resolve(__dirname, '../'),
  entry: './index.node.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'randfun.node.js',
    library: 'randfun',
    libraryTarget: 'commonjs2'
  },
  plugins,
};

module.exports = nodeConfig;
