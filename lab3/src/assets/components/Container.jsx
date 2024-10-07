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
    <div>
      <AddToDoComponent onSubmit={addTodo} />
      <SearchInput
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearch={onSearch} // Передайте обробник
      />
      <ToDoList
        todos={todos}
        removeTodo={removeTodo}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default Container;
