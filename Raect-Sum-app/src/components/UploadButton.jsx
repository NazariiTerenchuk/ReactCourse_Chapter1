import React from "react";

const UploadButton = ({ getUsers }) => {
  return (
    <button onClick={getUsers} style={{ marginRight: "10px" }}>
      Upload users
    </button>
  );
};

export default UploadButton;
