import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "red" }}>
        <button
          onClick={() => {
            this.props.event(); //调用父组件传来的事件函数
          }}
        >
          Click
        </button>
        <span>navbar</span>
      </div>
    );
  }
}

class Sidbar extends Component {
  render() {
    return (
      <div style={{ background: "yellow", width: "200px" }}>
        <ul>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    isShow: false,
  };
  render() {
    return (
      <div>
        <Navbar
          event={() => {
            this.handleEvent();
          }}
        ></Navbar>
        {this.state.isShow && <Sidbar></Sidbar>}
      </div>
    );
  }

  handleEvent = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
}
