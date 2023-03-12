import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
function App() {
  const [todoItem, setTodoItem] = React.useState([]);
  const [text, setText] = React.useState("");
  const addTodo = () => {
    if (text.trim().length)
      setTodoItem([
        ...todoItem,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ]);
    // setText("");
  };
  const deleteTodoItem = (id) => {
    // с помощью setTodoItem добавляю в массив задач отфильтрованный массив задач без той задачи на которуб был сделан клик
    setTodoItem(todoItem.filter((item) => item.id !== id));
  };
  const toggleTodo = (id) => {
    setTodoItem(
      todoItem.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          completed: !item.completed,
        };
      })
    );
  };
  return (
    <div className="App">
      <Input addTodo={addTodo} setText={setText} text={text} />
      <TodoList
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        toggleTodo={toggleTodo}
        deleteTodoItem={deleteTodoItem}
      />
    </div>
  );
}

export default App;
