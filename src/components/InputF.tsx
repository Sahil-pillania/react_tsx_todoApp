import React, { FormEvent, useRef } from "react";
import "../App";

interface type {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}

const InputF = ({ todo, setTodo, handleAdd }: type) => {
  const Ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        Ref.current?.blur();
      }}
    >
      <input
        ref={Ref}
        type="text"
        placeholder="Enter the task"
        className="input_box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputF;
