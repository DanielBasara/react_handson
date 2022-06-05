import React, { Component, useCallback } from "react";

export default class App extends Component {
  a = 100;
  myref = React.createRef();

  render() {
    return (
      <div>
        <input ref="mytext"></input>
        <button
          onClick={() => {
            console.log("click", this.refs.mytext.value);
          }}
        >
          add1
        </button>
        <input ref={this.myref}></input>
        <button
          onClick={() => {
            console.log("click", this.myref.current.value);
          }}
        >
          add2
        </button>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          add3
        </button>
        <button onClick={this.handleClick2}>add4</button>
      </div>
    );
  }

  handleClick = () => {
    console.log("click", this.myref.current.value);
  };
  handleClick2 = () => {
    console.log("click3", this.myref.current.value);
  };
}

// refs(引用)不确定到底是哪个input所以不好用最好别用
