import React from "react";
import ToDoList from "./ToDoList";

const ToDoListContainer = ({ todos, removeTodo }) => {
  return <ToDoList todos={todos} onRemove={removeTodo} />;
};

export default ToDoListContainer;
