import React from "react";
function UserProfile({ data }) {
  //   const { data } = props;
  return (
    <div className="user-profile">
      {/* {console.log(props)} */}
      <img src={data.avatarUrl} alt={`${data.name}'s avatar`} />
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
    </div>
  );
}

export default UserProfile;
