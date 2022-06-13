import React, { Component } from "react";

export default class Tabbar extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "我的",
      },
    ],
    current: 1,
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item) => (
            <li
              key={item.id}
              className={this.state.current === item.id ? "active" : ""}
              onClick={() => {
                this.props.event(item.id);
                this.setState({ current: item.id });
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
