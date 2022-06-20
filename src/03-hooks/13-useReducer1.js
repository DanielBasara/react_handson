import React, { useReducer } from "react";

//处理函数
const reducer = (preState, action) => {
  let newCount = { ...preState };
  console.log(newCount);
  switch (action.type) {
    case "jo-minus":
      newCount.count--;
      return newCount;

    case "jo-plus":
      newCount.count++;
      return newCount;
    default:
      return preState;
  }
};

//外部对象
const intialState = {
  count: 0,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "jo-minus",
          });
        }}
      >
        -
      </button>
      {state.count}
      {/* {console.log(state)} */}
      <button
        onClick={() => {
          dispatch({
            type: "jo-plus",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
