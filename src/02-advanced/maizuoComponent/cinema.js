import React, { Component } from "react";
import axios from "axios";

export default class cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
      oldList: [],
    };
    this.searchRef = React.createRef();
    // axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})
    //axios 第三方的库专门用于请求数据

    // axios
    //   .get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2530503")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2530503",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653834564517406120214529","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    })
      .then((res) => {
        // console.log(res.data.data.cinemas);
        this.setState({
          cinemaList: res.data.data.cinemas,
          oldList: res.data.data.cinemas,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //生命周期函数更适合发送ajax

  render() {
    return (
      <div>
        <input
          onInput={(event) => this.handleInput(event)}
          ref={this.searchRef}
        ></input>
        <h1>cinema</h1>
        <div>
          {this.state.cinemaList.map((item) => (
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          ))}
        </div>
      </div>
    );
  }

  handleInput = (event) => {
    console.log("input", event.target.value, this.searchRef.current.value);

    var newList = this.state.oldList.filter(
      (item) =>
        item.name
          .toUpperCase()
          .includes(this.searchRef.current.value.toUpperCase()) ||
        item.address
          .toUpperCase()
          .includes(this.searchRef.current.value.toUpperCase())
    );
    console.log(newList);

    this.setState({
      cinemaList: newList,
    });
    //cinemaList 每次都会重新覆盖
  };
}

// filter用于摘出数组中需要的元素组成新数组
// var arr = ["aaa", "abc", "ccc"];
// var newarr = arr.filter((item) => item.includes("a"));
// console.log(newarr);
