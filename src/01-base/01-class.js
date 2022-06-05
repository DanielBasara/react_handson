import React, { Component } from "react";

class Test {
  constructor() {
    this.a = 1;
  }
  testa() {
    console.log("testa");
  }
  testb() {}
}
var obj = new Test();
obj.testa();
// console.log(obj.a);

class ChildTest extends Test {
  testc() {
    console.log("testc");
  }
}

var obj2 = new ChildTest();
obj2.testa();
obj2.testc();

console.log(obj2.a);

class App extends React.Component {
  render() {
    return <div>hello react Component</div>;
  }
}

export default App;
