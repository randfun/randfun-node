// Fetch is defined by the browser or the whatwg-fetch polyfill
const API = require('./lib/api');

// Build the API and export
module.exports = API(window.fetch);
