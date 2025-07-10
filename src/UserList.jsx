import React from "react";

export default function UserList({ users }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.map((user) => (
        <li key={user.id} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          {user.name}
          <span
            style={{
              display: "inline-block",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: user.isOnline ? "green" : "red",
              marginLeft: "8px",
            }}
          ></span>
          
        </li>
      ))}
    </ul>
  );
}
