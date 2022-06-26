import React from "react";
import { NavLink } from "react-router-dom";
// import "./tabbar.css";
import style from "./tabbar.module.css";

export default function Tabbar() {
  return (
    <div className={style.tabbar}>
      <ul>
        {/* <li>
          <a href="#/films">电影</a>
        </li>
        <li>
          <a href="#/cinemas">影院</a>
        </li>
        <li>
          <a href="#/center">我的</a>
        </li> */}
        <li>
          <NavLink to="/films" activeClassName="red">
            电影
          </NavLink>
        </li>
        <li>
          <NavLink to="/cinemas" activeClassName="red">
            影院
          </NavLink>
        </li>
        <li>
          <NavLink to="/center" activeClassName="red">
            我的
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
