// UserManagement.tsx
import React, { useState, useEffect } from "react";
import { Button, List, Form } from "antd";
import UserModal from "./UserForm";

const UserManagement: React.FC = () => {
  const [userList, setUserList] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [modalForm] = Form.useForm();

  // 从 localStorage 加载用户数据
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUserList(JSON.parse(savedUsers));
    }
  }, []);

  // 保存用户数据到 localStorage
  const saveUserListToLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify([...userList]));
  };

  // 添加用户
  const handleAdd = () => {
    setIsModalVisible(true);
    setEditingUser(null);
    modalForm.resetFields();
  };

  // 编辑用户
  const handleEdit = (user: any) => {
    setIsModalVisible(true);
    setEditingUser(user);
    modalForm.setFieldsValue(user);
  };

  // 删除用户
  const handleDelete = (user: any) => {
    const updatedList = userList.filter((u) => u.id !== user.id);
    setUserList(updatedList);
    saveUserListToLocalStorage();
  };

  // 提交
  const handleModalSubmit = (values: any) => {
    setIsModalVisible(false);
    modalForm.resetFields();
    if (editingUser) {
      setEditingUser({});
      // 编辑现有用户
      const updatedUserList = userList.map((user) =>
        user.id === editingUser.id ? { ...user, ...values } : user
      );
      setUserList(updatedUserList);
    } else {
      // 添加新用户
      const newUserList = [...userList, { ...values, id: Date.now() }];
      setUserList(newUserList);
    }
    // 确保 userList 更新后再保存到 localStorage
    saveUserListToLocalStorage();
  };

  // 模态框取消
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={handleAdd}>
        新增
      </Button>
      <List
        dataSource={userList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={`Email: ${item.email}`}
            />
            <List.Item>
              <Button type="link" onClick={() => handleEdit(item)}>
                编辑
              </Button>
              <Button type="link" danger onClick={() => handleDelete(item)}>
                删除
              </Button>
            </List.Item>
          </List.Item>
        )}
      />
      <UserModal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onSubmit={handleModalSubmit}
        initialValues={editingUser}
        form={modalForm}
      />
    </div>
  );
};

export default UserManagement;
