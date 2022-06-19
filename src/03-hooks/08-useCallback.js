import React, { useState, useCallback } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [List, setList] = useState([]);

  //useCallback可以保存函数状态，防止因为组件重新渲染，导致方法被重新创建，起到缓存作用，只有第二个参数变化了，才重新声明
  const handleChange = useCallback((evt) => {
    console.log(evt.target.value);
    setText(evt.target.value);
  }, []);

  const handleClick = useCallback(() => {
    let newList = [...List];
    console.log(newList);
    newList.push(text);
    setList(newList);
    setText("");
  }, [List, text]);

  const handleDelete = useCallback(
    (value) => {
      console.log(value);
      let newList = [...List];
      newList.splice(value, 1);
      setList(newList);
    },
    [List]
  );

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
