const index = require('./index');

test('index contains an index function', () => {
  expect(index.Index).toBeDefined();
});

test('index contains a constructor export', () => {
  expect(typeof index.Index).toBe('function');
  expect(typeof new index.Index()).toBe('object');
});
