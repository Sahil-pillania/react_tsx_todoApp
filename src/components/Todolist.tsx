import React from "react";
import { Todo } from "../model";

import TodoItem from "./TodoItem";

interface types {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist = ({ todos, setTodos }: types) => {
  return (
    <div className="todos">
      {todos.map((todo: Todo) => (
        <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};
export default Todolist;
