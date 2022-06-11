import React, { Component } from "react";
import Navbar from "./Navbar/index";

export default class props extends Component {
  state = {
    list: {
      id: 1,
      value: 10,
    },
  };
  render() {
    var obj = {
      title: "测试",
      leftShow: false,
    };

    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" leftShow={false} />
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title="列表" />
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title="购物车" />
        </div>
        <div>
          <h2>测试</h2>
          <Navbar {...obj} />
        </div>
      </div>
    );
  }
}
