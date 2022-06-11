//函数式组件的属性
import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default class App extends Component {
  render() {
    var obj1 = {
      background: "yellow",
      width: "200px",
      position: "left",
      right: 0,
    };
    return (
      <div>
        <Navbar title="导航"></Navbar>

        <Sidebar {...obj1}></Sidebar>
      </div>
    );
  }
}
