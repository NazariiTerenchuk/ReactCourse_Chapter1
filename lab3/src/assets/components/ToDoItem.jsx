import React from "react";
import RemoveToDoComponent from "./RemoveToDoComponent";

const ToDoItem = ({ todo, onRemove }) => {
  return (
    <li>
      <span>{todo.text}</span>
      <RemoveToDoComponent todo={todo} onRemove={onRemove} />
    </li>
  );
};

export default ToDoItem;
