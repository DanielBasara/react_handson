import React, { useEffect } from "react";

export default function Detail(props) {
  console.log("dateil", props.match.params.myid);
  //   console.log("dateil", props.location.query.myid);
  //   console.log("dateil", props.location.state.myid);
  useEffect(() => {
    console.log("create");

    return () => {
      console.log("destroy");
    };
  }, []);
  //模拟生命周期
  return <div>Detail</div>;
}
