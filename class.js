class Class {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
}

const staticFunction = () => 'this is a static function';

module.exports = function createPartiallyAppliedClass(staticParam) {
  const ClassPartialApplicator = function ClassPartialApplicator(instanceParam) {
    return new Class(staticParam, instanceParam);
  };
  ClassPartialApplicator.staticFunction = staticFunction;

  return ClassPartialApplicator;
};
