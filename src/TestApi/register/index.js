import React, { useState, useEffect } from "react";
import { Button, Space, Table, message, Popconfirm } from "antd";
import UserManagementModal from "./UserManagementModal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState("");
  const [userToEdit, setUserToEdit] = useState({});

  // 模拟异步请求
  const fetchUserData = async () => {
    // 模拟网络延迟
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "张三",
            age: 25,
            phoneNumber: "13800138000",
            email: "zhangsan@example.com",
          },
          {
            id: 2,
            name: "李四",
            age: 30,
            phoneNumber: "13900139000",
            email: "lisi@example.com",
          },
          {
            id: 3,
            name: "王五",
            age: 28,
            phoneNumber: "13700137000",
            email: "wangwu@example.com",
          },
        ]);
      }, 1000);
    });
  };

  useEffect(() => {
    fetchUserData().then((data) => {
      setUsers(data);
    });
  }, []);

  const columns = [
    {
      title: "名字",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "电话号码",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "操作",
      key: "action",
      render: (_text, record) => (
        <Space>
          <Button type="primary" onClick={() => showModal("edit", record)}>
            编辑
          </Button>

          <Popconfirm
            title="删除！"
            description="是否确定要删除呢"
            onConfirm={() => {
              handleDelete(record.id);
              message.success("删除成功");
            }}
            onCancel={() => {
              message.error("取消删除");
            }}
            okText="确定"
            cancelText="取消"
          >
            <Button danger>删除</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // 显示弹窗
  const showModal = (mode, user = null) => {
    setMode(mode);
    setUserToEdit(user);
    setVisible(true);
  };

  // 提交表单
  const handleSubmit = (user) => {
    if (mode === "register") {
      setUsers([...users, { id: Date.now(), ...user }]);
      message.success("注册成功");
    } else if (mode === "edit") {
      setUsers(
        users.map((u) => (u.id === userToEdit.id ? { ...u, ...user } : u))
      );
      message.success("编辑成功");
    }
    setVisible(false);
  };

  // 删除
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>用户信息管理</h1>
      <Button type="primary" onClick={() => showModal("register")}>
        注册
      </Button>
      <Table columns={columns} dataSource={users} rowKey="id" />
      <UserManagementModal
        visible={visible}
        onCancel={() => setVisible(false)}
        mode={mode}
        userToEdit={userToEdit}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
