import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams(); // Retrieve the user ID from URL params
  const user = useSelector((state) =>
    state.users.list.find((user) => user.id === Number(id))
  ); // Get the user details from Redux store based on the ID

  return (
    <div>
      <h1>User Details</h1>
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.value}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
