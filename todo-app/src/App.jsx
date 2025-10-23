import "./App.css";
import { use } from "react";

import { getTodos } from "./api/api.mjs";

import TodoItem from "./components/TodoItem/TodoItem";
import AddTodo from "./components/AddTodo/AddTodo";

const getTodosPromise = getTodos();

function App() {
  const { todos } = use(getTodosPromise);

  const todoComponents = todos.map((todo) => {
    return <TodoItem task={todo.title} done={todo.done} key={todo.id} />;
  });

  return (
    <main className="app">
      <h1>Todo App</h1>
      <ul className="app__todos">{todoComponents}</ul>
      <AddTodo />
    </main>
  );
}

export default App;
