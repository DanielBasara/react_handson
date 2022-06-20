import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function NowPlaying(props) {
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=961500",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653834564517406120214529","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data.data.films);
      setlist([...res.data.data.films]);
    });
  }, []);
  const history = useHistory();
  const handleChange = (id) => {
    // window.location.href = "#/detail/" + id;
    console.log(props);
    // props.history.push(`/detal/${id}`);
    history.push(`/detal/${id}`);
  };
  return (
    <div>
      {/* {list.map((item) => (
        <li key={item.filmId}>
          <NavLink to={"/detail/" + item.filmId}>{item.name}</NavLink>
        </li>
      ))} */}
      {list.map((item) => (
        <li
          key={item.filmId}
          onClick={() => {
            handleChange(item.filmId);
          }}
        >
          <NavLink to={"#/detail/" + item.filmId}>{item.name}</NavLink>
        </li>
      ))}
    </div>
  );
}
