import React, { Component, useCallback } from "react";

export default class App extends Component {
  a = 100;
  render() {
    return (
      <div>
        <input></input>
        <button
          onClick={() => {
            console.log("click", "逻辑过多的时候不推荐", this.a);
          }}
        >
          add1
        </button>
        <button onClick={this.handleClick2.bind(this)}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button
          onClick={(evt) => {
            this.handleClick4(); //比较推荐
          }}
        >
          add4
        </button>
      </div>
    );
  }
  handleClick2() {
    console.log("click2", this.a);
  }

  handleClick3 = (evt) => {
    console.log("click3", this.a, evt);
  };
  handleClick4 = () => {
    console.log("click4", this.a);
  };
}

// call 修正this指向,自动执行函数 obj1.getName.call(obj2)
// apply 修正this指向,自动执行函数
// bind 修正this指向,不执行函数，需要执行的话后面加小括号 obj1.getName.bind(obj2)()
// react采用时间代理的模式绑定事件
