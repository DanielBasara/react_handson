import React, { Component } from "react";
import "./css/01-index.css";

export default class App extends Component {
  render() {
    var myname = "Daniel";
    var obj = {
      backgroundColor: "yellow",
      fontSize: "30px",
    };
    return (
      <div>
        app
        {10 + 20}-{myname}
        {10 > 20 ? "aaa" : "bbb"}
        <div style={obj}>111</div>
        <div className="active">33333333333</div>
        <div id="daniel">222222</div>
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username"></input>
      </div>
    );
  }
}
