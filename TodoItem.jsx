import React from "react";

const TodoItem = ({ id, text, completed, deleteTodoItem, toggleTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{text}</span>
      <span
        onClick={() => deleteTodoItem(id)}
        style={{ color: "orange", cursor: "pointer" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
