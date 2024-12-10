import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      {users.length > 0 ? (
        <ul >
          {users.map((user) => (
            <UserCard key={user.id} user={user} deleteUser={deleteUser} />
          ))}
        </ul>
      ) : (
        <p>Users not found.</p>
      )}
    </div>
  );
};

export default UserList;
