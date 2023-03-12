import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState<string[]>([]);

  const style = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  };

  return (
    <div style={style}>
      <input
        type="text"
        placeholder="Todo item"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => setList([...list, todo])}>Add todo</button>
      <ul>
        {list.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
