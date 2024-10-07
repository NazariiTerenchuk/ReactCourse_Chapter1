import React from 'react';

const ToDoList = ({ toDoList, onDelete }) => {
  return (
    <ul>
      {toDoList.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
