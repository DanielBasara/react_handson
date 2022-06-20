import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

export default function Cinema() {
  const [mytext, setmytext] = useState("");
  const [cinemalist, setcinemalist] = useState([]);
  useEffect(() => {
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
        setcinemalist(res.data.data.cinemas);
      })
      .catch((err) => {
        console.log("axios error", err);
      });

    return () => {};
  }, []);

  //1.我不希望每次更新dom都要重新定义函数2.我不希望每次更新dom都重新计算函数，只需要函数2返回的值即可可以使用useMemo，当第二参数更新后才会重新计算函数
  const getCinemaList = useMemo(
    () =>
      cinemalist.filter(
        (item) =>
          item.name.toUpperCase().includes(mytext.toUpperCase()) ||
          item.address.toUpperCase().includes(mytext.toUpperCase())
      ),
    [cinemalist, mytext]
  );

  return (
    <div>
      <input
        value={mytext}
        onChange={(evt) => {
          setmytext(evt.target.value);
        }}
      ></input>
      <h1>cinema</h1>
      <div>
        {getCinemaList.map((item) => (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    </div>
  );
}
