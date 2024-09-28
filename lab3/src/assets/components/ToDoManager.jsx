import React from "react";
import AddToDoComponent from "./AddToDoComponent";
import SearchInput from "./SearchInput";
import ToDoList from "./ToDoList";

const ToDoManager = ({
  todos,
  addTodo,
  removeTodo,
  searchQuery,
  setSearchQuery,
  onSearch,
}) => {
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
};

export default ToDoManager;
