import React from "react";
import RemoveToDoComponent from "./RemoveToDoComponent";

const ToDoList = ({ todos, removeTodo, searchQuery }) => {
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredTodos.map((todo) => (
        <RemoveToDoComponent key={todo.id} todo={todo} onRemove={removeTodo} />
      ))}
    </div>
  );
};

export default ToDoList;
