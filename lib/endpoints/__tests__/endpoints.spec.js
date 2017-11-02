// Import all the endpoints!
const endpoints = {
  animals: require('../animals'),
  country: require('../country'),
  games: require('../games'),
  geo: require('../geo'),
  hash: require('../hash'),
  internet: require('../internet'),
  number: require('../number'),
  people: require('../people'),
  text: require('../text'),
};

const checkDefinedProperty = (prop) => {
  expect(prop).toBeDefined();
  expect(typeof prop).toBe('string');
  expect(prop.length).toBeGreaterThan(0);
}

describe('endpoints', () => {
  it('return an array', () => {
    Object.keys(endpoints).forEach(k => {
      const exported = endpoints[k];
      expect(Array.isArray(exported)).toBe(true);
    });
  });

  it('define required properties', () => {
    Object.keys(endpoints).forEach(k => {
      const exported = endpoints[k];

      exported.forEach((el) => {
        const { url, method } = el;
        checkDefinedProperty(url);
        checkDefinedProperty(method);
      })
    });
  });
});
