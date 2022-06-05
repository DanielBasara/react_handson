import React, { Component } from "react";

export default class App extends Component {
  state = {
    x: 0,
  };
  render() {
    return (
      <div>
        {this.state.x}
        <button onClick={() => this.handleClick()}>add</button>
        <button onClick={() => this.handleClick2()}>add2</button>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      x: this.state.x + 1,
    });
    this.setState({
      x: this.state.x + 1,
    });
    this.setState({
      x: this.state.x + 1,
    });
    //setState 处在同步逻辑中是异步更新
    //setState处在异步逻辑中，是同步更新状态
    //setState接受第二个参数，第二个参数是回调函数，状态和dom更新完后会被触发
  };
  handleClick2 = () =>
    setTimeout(() => {
      this.setState({
        x: this.state.x + 1,
      });
      this.setState({
        x: this.state.x + 1,
      });
      this.setState({
        x: this.state.x + 1,
      });
    }, 2000);
}
