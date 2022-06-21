import React from "react";
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import NowPlaying from "../views/films/NowPlaying";
import Comingsoon from "../views/films/Comingsoon";
export default function Films() {
  return (
    <div>
      Films
      <ul>
        <li>
          <NavLink to="/films/nowplaying">正在热映</NavLink>
        </li>
        <li>
          <NavLink to="/films/comingsoon">即将上映</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/films/nowplaying" component={NowPlaying}></Route>
        <Route path="/films/comingsoon" component={Comingsoon}></Route>
        <Redirect from="/films" to="/films/nowplaying" />
        {/*/表示精准匹配 */}
      </Switch>
    </div>
  );
}
