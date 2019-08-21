class Index {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
}

Index.staticFunction = () => 'this is a static function';

module.exports = Index;
