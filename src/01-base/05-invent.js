import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <input></input>
        <button
          onClick={() => {
            console.log("click");
          }}
        >
          add
        </button>
        <button
          onMouseOver={() => {
            console.log("click");
          }}
        >
          add
        </button>
        <button onClick={this.handleClick1}>add</button>
        <button onClick={this.handleClick3}>add4</button>
        <button
          onClick={() => {
            this.handleClick4();
          }}
        >
          add4
        </button>
      </div>
    );
  }
  handleClick1() {
    console.log("click2");
  }

  handleClick3 = () => {
    console.log("click3");
  };
  handleClick4 = () => {
    console.log("click4");
  };
}
