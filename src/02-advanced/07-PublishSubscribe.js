import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <div>App</div>;
  }
}

//调度中心
var bus = {
  list: [],
  subscribe(callback) {
    // console.log(callback);
    this.list.push(callback);
  },

  publish(value) {
    //遍历所有的列表，将回调函数执行
    this.list.forEach((callback) => {
      callback && callback(value);
    });
  },
};

//订阅者
bus.subscribe((value) => {
  console.log("11111", value);
});
bus.subscribe((value) => {
  console.log("2222", value);
});

//发布者(迟于订阅者)
setTimeout(() => {
  bus.publish("News");
}, 0);
setTimeout(() => {
  bus.publish("News");
}, 1000);
setTimeout(() => {
  bus.publish("News");
}, 2000);

// Redux 基于订阅发布
