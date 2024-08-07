import React, { useState, useEffect } from "react";
import { Button, Space, Table, message, Popconfirm } from "antd";
import CustomCom from "./UserManagementModal";

const UserListManage = () => {
  const [userList, setUserList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [userToEdit, setUserToEdit] = useState({});

  const countRef = useRef(null);
  const [count, setCount] = useState(0);

  const handClick = () => {
    setCount(count + 1);
    countRef.current = count;
  };

  useEffect(() => {
    alert(count);
  }, [count]);

  // 模拟异步请求
  const fetchUserData = async () => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              nickname: "张三",
              age: 25,
              phoneNumber: "13800138000",
              email: "zhangsan@example.com",
            },
            {
              id: 2,
              nickname: "李四",
              age: 30,
              phoneNumber: "13900139000",
              email: "lisi@example.com",
            },
            {
              id: 3,
              nickname: "王五",
              age: 28,
              phoneNumber: "13700137000",
              email: "wangwu@example.com",
            },
          ]);
        }, 1000);
      });
    } catch (error) {
      message.error("获取用户数据时出错: " + error.message);
    }
  };

  useEffect(() => {
    fetchUserData().then((data) => {
      setUserList(data.reverse());
    });
  }, []);

  const columns = [
    {
      title: "名字",
      dataIndex: "nickname",
      key: "nickname",
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
          <Button type="primary" onClick={() => handleBtn("edit", record)}>
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

  const handleBtn = (actionType, userData) => {
    setTitle(actionType);
    setVisible(true);
    actionType === "edit" && setUserToEdit(userData);
  };

  // 提交表单
  const onSubmit = (user) => {
    if (title === "register") {
      setUserList([{ id: Date.now(), ...user }, ...userList]);
      message.success("注册成功");
      setVisible(false);
      return;
    }
    setUserList(
      userList.map((u) => (u.id === userToEdit.id ? { ...u, ...user } : u))
    );
    message.success("编辑成功");
    setVisible(false);
  };

  // 删除
  const handleDelete = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1 onClick={handClick}>{count}</h1>
    </div>
  );
};

export default UserListManage;
