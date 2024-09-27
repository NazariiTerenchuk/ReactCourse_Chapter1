import { useState } from "react";
import AddToDoComponent from "./assets/components/AddToDoComponent";
import RemoveToDoComponent from "./assets/components/RemoveToDoComponent";
import SearchInput from "./assets/components/SearchInput";
import "./App.css";

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

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <AddToDoComponent onSubmit={addTodo} />
      <SearchInput searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {todos
        .filter((todo) => todo.text.includes(searchQuery))
        .map((todo) => (
          <RemoveToDoComponent
            key={todo.id}
            todo={todo}
            onRemove={removeTodo}
          />
        ))}
    </div>
  );
}

export default App;
