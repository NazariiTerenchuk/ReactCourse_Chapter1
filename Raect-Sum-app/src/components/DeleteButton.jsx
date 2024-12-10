import React from "react";

const DeleteButton = ({ userId, deleteUser }) => {
  return (
    <button
      onClick={() => deleteUser(userId)}
      style={{
        padding: "5px 10px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
