class Class {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
}

Class.staticFunction = () => 'this is a static function';

module.exports = staticParam => function ClassPartialApplicator(instanceParam) {
  return new Class(staticParam, instanceParam);
};
