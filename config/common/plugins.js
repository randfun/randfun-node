const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  new webpack.DefinePlugin({
    'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT || 'https://api.rand.fun'),
  }),
  new UglifyJSPlugin({
    sourceMap: true,
  }),
];
