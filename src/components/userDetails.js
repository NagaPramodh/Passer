import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../App.css";
const UserDetails = () => {
  const { id } = useParams(); // Retrieve the user ID from URL params
  const user = useSelector((state) =>
    state.users.list.find((user) => user.id === Number(id))
  ); // Get the user details from Redux store based on the ID

  return (
    <div>
      <div class="card user-details-card">
        <div class="card-header">User Details</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>User Id: {user.id}</p>
            <p>Name: {user.value}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
