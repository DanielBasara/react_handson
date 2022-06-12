import React, { Component } from "react";
import "./css/02-maizuo.css";
import Film from "./maizuoComponent/film";
import Center from "./maizuoComponent/center";
import Cinema from "./maizuoComponent/cinema";
import Tabbar from "./maizuoComponent/tabbar";

export default class App extends Component {
  render() {
    return (
      <div>
        {this.showPage()}

        <Tabbar></Tabbar>
      </div>
    );
  }
  //   handleClick = (id) => {
  //     this.setState({ current: id });
  //   };
  showPage = () => {
    //   return this.state.list[this.state.current - 1].page;
    switch (current) {
      case 1:
        return <Film></Film>;
      case 2:
        return <Cinema></Cinema>;
      case 3:
        return <Center></Center>;
      default:
        return null;
    }
  };
}
