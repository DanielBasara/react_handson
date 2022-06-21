import React from "react";
import {
  BrowserRouter,
  HashRouter as JoRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/notFound";
import Detail from "../views/Detail";
import Login from "../views/Login";

function isAuth() {
  return localStorage.getItem("token");
}

export default function IndexRouter(props) {
  return (
    <div>
      <BrowserRouter>
        {/*没有#的路径，但是真正朝后端发请求要页面，后面没有对应的路径处理逻辑，就会404 */}
        <Switch>
          {/*只渲染匹配到的第一个 */}
          <Route path="/films" component={Films}></Route>
          <Route path="/cinemas" component={Cinemas}></Route>
          {/* <Route path="/center" component={Center}></Route> */}
          <Route
            path="/center"
            render={(props) => {
              return isAuth() ? (
                <Center {...props} />
              ) : (
                <Redirect to="/login"></Redirect>
              );
            }}
          ></Route>{" "}
          {/*路由拦截*/}
          <Route path="/login" component={Login}></Route>
          <Route path="/detail/:myid" component={Detail}></Route>
          {/* 模糊的myid表示动态路由 */}
          {/* <Redirect from="/" to="/films" /> */}
          {/*/表示模糊匹配 */}
          <Redirect from="/" to="/films" exact />
          {/*/表示精准匹配 */}
          {/* 路由重定向 */}
          <Route component={NotFound}></Route>
        </Switch>
        {props.children}
      </BrowserRouter>
    </div>
  );
}
