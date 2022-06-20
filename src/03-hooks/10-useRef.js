import React, { useState, useRef } from "react";

export default function App() {
  const [List, setList] = useState([]);
  const mytext = useRef(); //react.creatRef()

  const handleChange = (evt) => {
    console.log(evt.target.value);
  };
  const handleClick = () => {
    console.log("Click", mytext.current.value);
    setList([...List, mytext.current.value]);
    mytext.current.value = "";
  };
  const handleDelete = (value) => {
    console.log(value);
    let newList = [...List];
    newList.splice(value, 1);
    setList(newList);
  };
  return (
    <div>
      <input
        ref={mytext}
        onChange={(evt) => {
          handleChange(evt);
        }}
      ></input>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        add
      </button>
      <ul>
        {List.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      {!List.length && <div>暂无待办事务</div>}
    </div>
  );
}
