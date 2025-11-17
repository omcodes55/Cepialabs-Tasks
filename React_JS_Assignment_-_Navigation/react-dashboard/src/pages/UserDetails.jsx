import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const users = {
    1: { name: "Gautam", email: "gautam@demo.com" },
    2: { name: "Priya", email: "priya@demo.com" },
  };

  const user = users[id] || null;

  if (!user) return <div>User with id {id} not found</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>User Details - {user.name}</h2>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
