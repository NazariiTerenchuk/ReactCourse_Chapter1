import React from "react";
import AddToDoComponent from "./AddToDoComponent";
import SearchInput from "./SearchInput";

const ToDoControls = ({ addTodo, searchQuery, setSearchQuery }) => {
  return (
    <div>
      <AddToDoComponent onSubmit={addTodo} />
      <SearchInput searchQuery={searchQuery} onSearchChange={setSearchQuery} />
    </div>
  );
};

export default ToDoControls;
