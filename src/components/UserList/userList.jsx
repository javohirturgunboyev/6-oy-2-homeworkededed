import React from "react";
import "./userList.css";
import User from "../User/User";

function UserList(props) {
  const { data } = props;
  return (
    <div className="container">
      <User/>
    </div>
  );
}

export default UserList;
