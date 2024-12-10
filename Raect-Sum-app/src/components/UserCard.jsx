import React from "react";
import DeleteButton from "./DeleteButton";

const UserCard = ({ user, deleteUser }) => {
  return (
    <li>
      <img src={user.avatar} alt={user.first_name} />
      <div>
        <p>
          {user.first_name} {user.last_name}
        </p>
        <DeleteButton userId={user.id} deleteUser={deleteUser} />
      </div>
    </li>
  );
};

export default UserCard;
