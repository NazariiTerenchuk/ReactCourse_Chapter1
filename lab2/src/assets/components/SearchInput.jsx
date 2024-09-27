import React from "react";

const SearchInput = ({ searchQuery, onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search tasks"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
