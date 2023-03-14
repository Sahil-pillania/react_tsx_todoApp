import React, { FormEvent, useState } from "react";

import "./App.css";
import InputF from "./components/InputF";
import Todolist from "./components/Todolist";
import { Todo } from "./model";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputF todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
