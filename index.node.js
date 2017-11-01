// Import fetch
const fetch = require('node-fetch');
const API = require('./lib/api');

// Build the API and export
module.exports = API(fetch);
