import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todoItem, deleteTodoItem, toggleTodo }) => {
  return (
    <ul>
      {todoItem.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          deleteTodoItem={deleteTodoItem}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
