import React from "react";

const SearchInput = ({ searchQuery, onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search tasks"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default SearchInput;
