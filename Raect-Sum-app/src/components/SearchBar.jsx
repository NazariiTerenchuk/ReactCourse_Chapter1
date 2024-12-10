import React from "react";
import UploadButton from "./UploadButton";

const SearchBar = ({ search, setSearch, getUsers }) => {
  return (
    <div>
      <UploadButton getUsers={getUsers} />
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;