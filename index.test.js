const Index = require('./index');

test('Index exists', () => {
  expect(Index).toBeDefined();
});

test('Index is a class', () => {
  expect(typeof Index).toBe('function');
  expect(typeof new Index()).toBe('object');
});

test('Index contains a static function export', () => {
  expect(typeof Index.staticFunction).toBe('function');
  expect(Index.staticFunction()).toBe('this is a static function');
});
