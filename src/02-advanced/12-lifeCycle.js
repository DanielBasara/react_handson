import React, { Component } from "react";

export default class App extends Component {
  state = {
    myname: "jo",
  };

  //钩子函数
  UNSAFE_componentWillMount() {
    console.log(
      "will mount",
      this.state.myname,
      document.getElementById("myname")
    );
    //第一次上dom前的最后一次修改,或者做状态的初始化或定义
    this.setState({
      myname: "jojo",
    });
  }
  componentDidMount() {
    console.log("did mount", document.getElementById("myname"));
    //数据请求
    //比如，axios，订阅函数，setInterval,基于创建完的dom进行初始化(第三方的库BetterScroll)
  }
  render() {
    console.log("render");
    return (
      <div>
        <span id="myname">{this.state.myname}</span>
      </div>
    );
  }
}
