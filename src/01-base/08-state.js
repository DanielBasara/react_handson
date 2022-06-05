import React, { Component } from "react";

export default class App extends Component {
  a = 1;
  //   state = {
  //     mytext: "收藏",
  //     myshow: true,
  //   };

  constructor() {
    super();
    this.state = {
      mytext: "收藏",
      myshow: true,
      myName: "Daniel",
      myNickname: "Basara",
    };
  }
  render() {
    return (
      <div>
        <h1>
          欢迎来到react开发{" "}
          {this.state.myshow ? this.state.myName : this.state.myNickname}
        </h1>
        <button
          onClick={() => {
            this.setState({ mytext: "取消收藏" });
          }}
        >
          {this.state.mytext}
        </button>
        <button
          onClick={() => {
            this.setState({ myshow: !this.state.myshow });
            if (this.state.myshow) {
              console.log("确认收藏的逻辑");
            } else {
              console.log("不收藏的逻辑");
            }
          }}
        >
          {this.state.myshow ? "收藏" : "取消收藏"}
        </button>
      </div>
    );
  }
}

// state是固定的，不能写成别的变量名
// 需要使用setState来更改状态,react自动修正dom
