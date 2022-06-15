import React, { Component } from "react";
import axios from "axios";
import "./css/03-middleMan.css";

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
// bus.subscribe((value) => {
//   console.log("11111", value);
// });
// bus.subscribe((value) => {
//   console.log("2222", value);
// });

// //发布者(迟于订阅者)
// setTimeout(() => {
//   bus.publish("News");
// }, 0);
// setTimeout(() => {
//   bus.publish("News");
// }, 1000);
// setTimeout(() => {
//   bus.publish("News");
// }, 2000);

// Redux 基于订阅发布

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
    };

    axios.get(`http://localhost:3000/test.json`).then((res) => {
      console.log(res.data);
      this.setState({
        filmList: res.data.film,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.filmList.map((item, index) => (
          <FilmItem key={index} filmData={item}></FilmItem>
        ))}

        <FilmDetail></FilmDetail>
      </div>
    );
  }
}

class FilmItem extends Component {
  render() {
    return (
      <div className="filmItem">
        {console.log(this.props.filmData.name)}
        <h2>{this.props.filmData.name}</h2>
        <img
          src={this.props.filmData.poster}
          alt={this.props.filmData.name}
          onClick={() => {
            // console.log(this.props.filmData.synopsis);
            bus.publish(this.props.filmData.synopsis);
          }}
        ></img>
      </div>
    );
  }
}

class FilmDetail extends Component {
  constructor() {
    super();
    this.state = {
      inf: "",
    };
    bus.subscribe((value) => {
      console.log("我在filmDetail中定义", value);
      this.setState({
        inf: value,
      });
    });
  }
  render() {
    return <div className="filmDetail">{this.state.inf}</div>;
  }
}
