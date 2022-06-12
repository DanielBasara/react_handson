import React, { Component } from "react";

export default class App extends Component {
  //   myUsername = React.createRef();

  state = {
    userName: "xu-z",
  };

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <input
          type="text"
          value={this.state.userName}
          onChange={(evt) => {
            console.log("onChange", evt.target.value);
            this.setState({ userName: evt.target.value });
          }}
        ></input>
        <button onClick={() => console.log(this.state.userName)}>登录</button>
        <button
          onClick={() => {
            this.setState({ userName: "xu-z" });
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
