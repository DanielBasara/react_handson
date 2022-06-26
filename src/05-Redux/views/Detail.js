import React, { useEffect } from "react";
import store from "../redux/store";
import { hide, show } from "../redux/actionCreate/TabbarActionCreator";

export default function Detail(props) {
  console.log("dateil", props.match.params.myid);
  //   console.log("dateil", props.location.query.myid);
  //   console.log("dateil", props.location.state.myid);
  // useEffect(() => {
  //   console.log("create");
  //   store.dispatch({
  //     type: "hide-tabbar",
  //   });

  //   return () => {
  //     console.log("destroy");
  //     store.dispatch({
  //       type: "show-tabbar",
  //     });
  //   };
  // }, []);
  useEffect(() => {
    console.log("create");
    store.dispatch(hide());

    return () => {
      console.log("destroy");
      store.dispatch(show());
    };
  }, []);
  //模拟生命周期
  return <div>Detail</div>;
}
