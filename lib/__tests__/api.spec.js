const fs = require('fs');
const path = require('path');
const animals = require('../endpoints/animals');
const number = require('../endpoints/number');
const queryString = require('query-string');

// API Imports
const APIBuilder = require('../api');
const fetchMock = jest.fn().mockImplementation((url, fetchParams) => {
  return new Promise((resolve, _reject) => {
    resolve({
      status: 200,
      json: function() {
        return { seed: 'seed', result: 'test' };
      }
    });
  });
});
const API = APIBuilder(fetchMock);

// Expected headers
const fetchParams = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

// Tests
describe('APIBuilder', () => {
  it('return a function', () => {
    expect(typeof APIBuilder).toBe('function');
  });

  it('build an object with all the data from endpoints', () => {
    const build = APIBuilder(() => {});
    expect(typeof build).toBe('object');
    const buildKeys = Object.keys(build);

    fs.readdirSync(path.resolve(__dirname, '../endpoints/')).forEach(file => {
      if(file.endsWith('.js')) {
        const name = file.split('.')[0];
        expect(buildKeys).toContain(name);
      }
    });
  });
});

describe('API', () => {
  it('return a result when call a method', () => {
    API.animals.name().then((res) => {
      expect(res.seed).toBe('seed');
      expect(res.result).toBe('test');
    });
  });

  it('send the URL and fetch params correctly', () => {
    API.animals.name().then(() => {});
    const url = `${process.env.API_ENDPOINT}/${animals[0].url}?`;
    expect(fetchMock).lastCalledWith(url, fetchParams);
  });

  it('format the query params correctly', () => {
    const params = { min: 0, max: 10 };
    const queryParams = queryString.stringify(params);

    API.number.integer(params).then(() => {});
    const url = `${process.env.API_ENDPOINT}/${number[0].url}?${queryParams}`;
    expect(fetchMock).lastCalledWith(url, fetchParams);
  });
});
