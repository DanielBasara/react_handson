import React, { useReducer, useContext } from "react";

const intialState = {
  a: "111",
  b: "111",
};

const reducer = (prevState, action) => {
  let newState = { ...prevState };
  console.log(prevState);
  switch (action.type) {
    case "change a":
      newState.a = action.value;
      newState.b = "111";
      return newState;
    case "change b":
      newState.a = "111";
      newState.b = action.value;
      return newState;

    default:
      return prevState;
  }
};

const GlobalContext = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </div>
    </GlobalContext.Provider>
  );
}

function Child1() {
  const { dispatch } = useContext(GlobalContext);
  console.log(GlobalContext);
  return (
    <div style={{ background: "yellow" }}>
      <button
        onClick={() => {
          dispatch({ type: "change a", value: "2222" });
        }}
      >
        改变a
      </button>
      <button
        onClick={() => {
          dispatch({ type: "change b", value: "2222" });
        }}
      >
        改变b
      </button>
    </div>
  );
}
function Child2() {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: "red" }}>{state.a}</div>;
}
function Child3() {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: "blue" }}>{state.b}</div>;
}
