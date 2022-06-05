import React, { Component } from "react";
import axios from "axios";

export default class cinema extends Component {
  constructor() {
    super();
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //生命周期函数更适合发送ajax

  render() {
    return <div>cinema</div>;
  }
}
