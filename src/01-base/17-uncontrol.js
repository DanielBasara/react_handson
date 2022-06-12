import React, { Component } from "react";

export default class App extends Component {
  myUsername = React.createRef();

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <input type="text" ref={this.myUsername} defaultValue="xu-z"></input>
        <button onClick={() => console.log(this.myUsername.current.value)}>
          登录
        </button>
        <button onClick={() => (this.myUsername.current.value = "")}>
          重置
        </button>
      </div>
    );
  }
}
