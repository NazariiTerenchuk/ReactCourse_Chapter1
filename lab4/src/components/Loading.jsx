import React from "react";

const Loading = ({ isLoading, children }) => {
  return (
    <>
      {isLoading }
      {children}
    </>
  );
};

export default Loading;