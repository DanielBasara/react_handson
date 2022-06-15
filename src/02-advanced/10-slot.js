import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        Child
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
      </div>
    );
  }
}
//1.为了复用 2.减少父子通信
export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>11111</div>
          <div>2222</div>
          <div>3333</div>
        </Child>
      </div>
    );
  }
}
