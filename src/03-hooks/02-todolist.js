import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [List, setList] = useState([]);

  const handleChange = (evt) => {
    console.log(evt.target.value);
    setText(evt.target.value);
  };
  const handleClick = () => {
    // console.log(text);
    let newList = [...List];
    console.log(newList);
    newList.push(text);
    setList(newList);
    setText("");
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
        onChange={(evt) => {
          handleChange(evt);
        }}
        value={text}
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
