import React from "react";
import UserList from "./UserList";

const UserManagement: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1>管理用户功能</h1>
      <UserList />
    </div>
  );
};

export default UserManagement;
