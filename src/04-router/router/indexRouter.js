import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/notFound";

export default function IndexRouter() {
  return (
    <div>
      <HashRouter>
        <Switch>
          {/*只渲染匹配到的第一个 */}
          <Route path="/films" component={Films}></Route>
          <Route path="/cinemas" component={Cinemas} exact></Route>
          <Route path="/center" component={Center} exact></Route>
          {/* <Redirect from="/" to="/films" />  */}
          {/*/表示模糊匹配 */}
          <Redirect from="/" to="/films" exact /> {/*/表示精准匹配 */}
          {/* 路由重定向 */}
          {/* <Route component={NotFound}></Route> */}
        </Switch>
      </HashRouter>
    </div>
  );
}
