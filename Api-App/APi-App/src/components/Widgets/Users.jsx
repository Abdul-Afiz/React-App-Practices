import React from "react";

function Users({ img, firstname, lastname, comment }) {
  return (
    <div className="Users">
      <div className="fullname">
        <h2>
          <span>{firstname}</span> <span>{lastname}</span>
        </h2>
      </div>
      <img src={img} alt="" />
      <div className="comment">{comment}</div>
    </div>
  );
}

export default Users;
