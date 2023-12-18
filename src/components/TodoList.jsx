import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoList({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, isComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const isCompleted = () => {
    isComplete(todo.id);
  };

  return (
    <div className="flex border bg-gray-400 rounded-lg px-4 py-3 gap-4 shadow-sm duration-300 text-gray-800  ">
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={isCompleted}
      />
      <input
        type="text"
        className={`border outline-none flex-1 bg-transparent rounded-lg ${
          isTodoEditable ? "border-gray-500 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}  `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className="inline-flex p-2 text-bold text-xl rounded-lg border border-gray-300 bg-green-100 hover:bg-green-300 "
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        <span className="  text-bold text-xl">
          {isTodoEditable ? "Save" : "Edit"}
        </span>
      </button>

      <button
        className="inline-flex p-2  text-bold text-xl rounded-lg border border-gray-300 bg-red-200 hover:bg-red-300 "
        onClick={() => deleteTodo(todo.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default TodoList;
