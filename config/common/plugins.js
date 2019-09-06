const webpack = require('webpack');

module.exports = [
  new webpack.DefinePlugin({
    'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT || 'https://api.rand.fun'),
  })
];
