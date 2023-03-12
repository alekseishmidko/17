import React from "react";

const Input = ({ addTodo, setText, text }) => {
  return (
    <label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}> ADD task</button>
    </label>
  );
};

export default Input;
