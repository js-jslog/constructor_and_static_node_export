const Class = require('./index');

test('Class exists', () => {
  expect(Class).toBeDefined();
});

test('Class is a class', () => {
  expect(typeof Class).toBe('function');
  expect(typeof new Class()).toBe('object');
});

test('Class contains a static function export', () => {
  expect(typeof Class.staticFunction).toBe('function');
  expect(Class.staticFunction()).toBe('this is a static function');
});

test('Class has a constructor which sets instance variables', () => {
  const instance = new Class('one', 'two');
  expect(instance.param1).toBe('one');
  expect(instance.param2).toBe('two');
});
