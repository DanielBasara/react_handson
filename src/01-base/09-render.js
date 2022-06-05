import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "111",
      },
      {
        id: 2,
        text: "222",
      },
      {
        id: 3,
        text: "333",
      },
    ],
  };
  render() {
    var newList = this.state.list.map((item, index) => (
      <li key={index}>
        {item.text}--{index}
      </li>
    ));
    return (
      <div>
        <ui>
          {this.state.list.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ui>
        <ui>{newList}</ui>
      </div>
    );
  }
}

// 循环渲染列表
// 原生js的map(映射)方法,map有两个形参一个是item(列表中的value)一个是index(索引值)
//不涉及到列表的增加删除,重排.设置成map的索引值没有问题

// var list = ["111", "222", "333"];
// var newList = list.map((item) => `<li>${item}</li>`);
// console.log(newList.join(""));
