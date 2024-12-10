import { useState } from "react";
import { fetchUsers, deleteUserById } from "../fetchMethods";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    } catch (err) {
      setError("Failed to upload data.");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = (id) => {
    const updatedUsers = deleteUserById(users, id);
    setUsers(updatedUsers);
  };

  return { users, loading, error, getUsers, deleteUser };
};
