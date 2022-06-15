import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "red" }}>
        <span>navbar</span>
        {this.props.children}
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
        <Navbar>
          <button
            onClick={() => {
              this.setState({ isShow: !this.state.isShow });
            }}
          >
            Click
          </button>
        </Navbar>
        {this.state.isShow && <Sidbar></Sidbar>}
      </div>
    );
  }
}
