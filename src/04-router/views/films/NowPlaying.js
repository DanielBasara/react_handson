import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useHistory, withRouter } from "react-router-dom";

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
    history.push(`/detail/${id}`); //页面跳转 动态路由传参
    //history.push({ pathname: "/detail", query: { id: id } }); //query传参
    //history.push({ pathname: "/detail", state: { myid: id } }); //state传参
  };
  const WithFilmitem = withRouter(FilmItem);
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
          // onClick={() => {
          //   handleChange(item.filmId);
          // }}
        >
          {item.name}
          {/* <NavLink to={"#/detail/" + item.filmId}>{item.name}</NavLink> */}
          {/* <FilmItem key={item.filmId} {...item} routerProps={props}></FilmItem> */}
          <WithFilmitem key={item.filmId} {...item}></WithFilmitem>
        </li>
      ))}
    </div>
  );

  function FilmItem(props) {
    return (
      <div>
        {console.log(props)}
        <img
          src={props.poster}
          alt={props.name}
          onClick={() => {
            // console.log(props.history);
            props.history.push(`/detail/${props.filmId}`);
            // props.routerProps.history.push(`/detail/${props.filmId}`);
          }}
        ></img>
      </div>
    );
  }
}
