import React from "react";

const RemoveToDoComponent = ({ todo, onRemove }) => {
  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <div style={styles.todoItem}>
      <span>{todo.text}</span>
      <button onClick={handleRemove} style={styles.button}>
        Видалити
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "5px 0",
  },
  button: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
  },
};

export default RemoveToDoComponent;
