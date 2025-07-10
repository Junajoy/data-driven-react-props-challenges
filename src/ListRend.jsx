import React from "react";


function ListRend({ data }) {
  return (
    <ul>
      {data.map((item,index)=>
        <li>id:{item.id};;;;name:{item.name}</li>
      )}
    </ul>
  );
}

export default ListRend;