// Challenge 7: User List with Active Status
// Objective: Display a list of users, showing their online status.
// Props:
// users (array of objects, each with id, name, isOnline boolean)
// Example Data:
// const usersData = [
//   { id: 1, name: "Charlie", isOnline: true },
//   { id: 2, name: "Diana", isOnline: false },
//   { id: 3, name: "Eve", isOnline: true }
// ];
// Hints: Use map() to render each user. For each user, display their name. Conditionally display a small circle (e.g., using a span with backgroundColor and borderRadius: '50%') or text ("Online"/"Offline") next to their name based on isOnline.
// Expected Output (Conceptual): A list of names, each with a visual indicator (e.g., green/red dot) for online/offline status.


import React from "react";

function StatusList({ data }) {  
    return (
        <div className="status-list">
        {data.map((user) => (
            <div key={user.id} className="user-status">
            <span
                className="status-indicator"
                style={{
                backgroundColor: user.isOnline ? "green" : "red",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                display: "inline-block",
                marginRight: "8px",
                }}
            ></span>
            {user.name}
            </div>
        ))}
        </div>
    );   
}