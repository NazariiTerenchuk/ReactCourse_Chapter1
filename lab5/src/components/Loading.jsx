import React from "react";
import LoadingIcons from "./LoadingIcons";
const Loading = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && <LoadingIcons />}
      {children}
    </>
  );
};

export default Loading;