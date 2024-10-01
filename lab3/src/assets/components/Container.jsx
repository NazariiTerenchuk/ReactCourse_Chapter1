import React, { useState } from "react";
import ToDoManager from "./ToDoManager";

function Container() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), text: title };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <ToDoManager
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onSearch={handleSearch}
    />
  );
}

export default Container;
