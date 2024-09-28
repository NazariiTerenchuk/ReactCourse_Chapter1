import React, { useState } from "react";
import ToDoManager from "./assets/components/ToDoManager";

function App() {
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
    <div className="container">
      <h1>Todo List</h1>
      <ToDoManager
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;
