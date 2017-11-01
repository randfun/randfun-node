// Deps
const queryString = require('query-string');

// Endpoints of the API
const animals = require('./endpoints/animals');
const country = require('./endpoints/country');
const games = require('./endpoints/games');

// Load the endpoint from the env
const API_ENDPOINT = process.env.API_ENDPOINT;

// Default fetch params
const fetchParams = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

/**
 * Method to connect the given endpoint with the API
 */
const connect = (url, fetch) => {
  return (params) => {
    const queryParams = queryString.stringify(params);
    return fetch(
      `${API_ENDPOINT}/${url}?${queryParams}`,
      fetchParams
    ).then((res) => {
      return res.json();
    }).then((json) => {
      return json;
    }).catch((err) => {
      console.log(err);
    });
  }
}

const buildEndpoints = (endpoints, connect, fetch) => {
  // Exported methods
  const exports = {};

  // Iterate over the endpoints
  endpoints.forEach((e) => {
    // Define the methods for the given endpoints
    exports[e.method] = connect(e.url, fetch);
  });

  return exports;
}

// Import all the endpoints and send the fetch lib to them
module.exports = (fetch) => {
  return {
    animals: buildEndpoints(animals, connect, fetch),
    country: buildEndpoints(country, connect, fetch),
    games: buildEndpoints(games, connect, fetch),
  }
}
