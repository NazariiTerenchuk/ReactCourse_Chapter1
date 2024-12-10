import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import Loading from "./components/Loading";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { useFilteredUsers } from "./hooks/useFilteredUsers";

const App = () => {
  const { users, loading, error, getUsers, deleteUser } = useFetchUsers();
  const [search, setSearch] = useState("");
  const filteredUsers = useFilteredUsers(users, search);

  return (
    <div >
      <h1>Users List</h1>
      <SearchBar search={search} setSearch={setSearch} getUsers={getUsers} />
      {loading && <Loading />}
      {error && <p className="error">{error}</p>}
      <UserList users={filteredUsers} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
