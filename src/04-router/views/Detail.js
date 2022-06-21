import React from "react";

export default function Detail(props) {
  console.log("dateil", props.match.params.myid);
  //   console.log("dateil", props.location.query.myid);
  //   console.log("dateil", props.location.state.myid);
  return <div>Detail</div>;
}
