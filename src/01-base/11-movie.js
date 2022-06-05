import React, { Component } from "react";
import "./css/02-maizuo.css";
import Film from "./maizuoComponent/film";
import Center from "./maizuoComponent/center";
import Cinema from "./maizuoComponent/cinema";

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影",
        page: <Film></Film>,
      },
      {
        id: 2,
        text: "影院",
        page: <Cinema></Cinema>,
      },
      {
        id: 3,
        text: "我的",
        page: <Center></Center>,
      },
    ],
    current: 1,
  };
  render() {
    return (
      <div>
        {this.showPage()}
        <ul>
          {this.state.list.map((item) => (
            <li
              key={item.id}
              className={this.state.current === item.id ? "active" : ""}
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  handleClick = (id) => {
    this.setState({ current: id });
  };
  showPage = () => {
    return this.state.list[this.state.current - 1].page;
    // switch (this.state.current) {
    //   case 1:
    //     return <Film></Film>;
    //   case 2:
    //     return <Cinema></Cinema>;
    //   case 3:
    //     return <Center></Center>;
    //   default:
    //     return null;
    // }
  };
}
