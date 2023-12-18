import React, { useCallback, useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border text-black outline-none rounded-l-lg px-3  bg-white/20"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-slate-600 text-white shrink-0 ml-2"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
