import React, { useEffect, useState } from "react";
import {
  Table,
  Modal,
  Form,
  Input,
  Button,
  InputNumber,
  Popconfirm,
} from "antd";

interface Item {
  key: number;
  name: string;
  age: number | any;
  address: string;
}

const ManageUserList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [form] = Form.useForm();

  // 获取本地存储中的数据
  useEffect(() => {
    const savedItems = sessionStorage.getItem("items");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // 保存数据到本地存储中
  useEffect(() => {
    sessionStorage.setItem("items", JSON.stringify(items));
  }, [items]);

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
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "操作",
      key: "actions",
      render: (_: any, record: Item) => (
        <>
          <Button type="link" onClick={() => editItem(record)}>
            编辑
          </Button>
          <Popconfirm
            title="确定要删除此项吗？"
            onConfirm={() => deleteItem(record.key)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger>
              删除
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const addItem = () => {
    setIsModalVisible(true);
    setEditingItem(null);
    form.resetFields();
    const newKey = Date.now();

    const newItem: Item = {
      key: newKey,
      name: "",
      age: null,
      address: "",
    };

    form.setFieldsValue(newItem);
  };

  const editItem = (item: Item) => {
    setIsModalVisible(true);
    setEditingItem(item);
    form.setFieldsValue({
      name: item.name,
      age: item.age,
      address: item.address,
    });
  };

  const deleteItem = (key: number) => {
    setItems(items.filter((item) => item.key !== key));
  };

  const saveItem = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingItem) {
          editingItem.name = values.name;
          editingItem.age = values.age;
          editingItem.address = values.address;
          setItems((prevItems) =>
            prevItems.map((item) =>
              item.key === editingItem.key ? editingItem : item
            )
          );
        } else {
          const newItem: Item = { ...values, key: Date.now() };
          setItems((prevItems) => [...prevItems, newItem]);
        }
        setIsModalVisible(false);
        setEditingItem(null);
      })
      .catch((info) => {
        console.log("Error Info", info);
      });
  };

  const cancelItem = () => {
    setIsModalVisible(false);
    setEditingItem(null);
  };

  return (
    <div style={{ width: "100%" }}>
      <h1>用户管理列表</h1>
      <Button type="primary" onClick={addItem}>
        添加用户
      </Button>
      <Table rowKey={"key"} columns={columns} dataSource={items} />
      <Modal
        title={editingItem ? "编辑用户信息" : "添加新用户"}
        open={isModalVisible}
        onOk={saveItem}
        onCancel={cancelItem}
        okText="保存"
        cancelText="取消"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="名字"
            rules={[{ required: true, message: "请输入名字!" }]}
          >
            <Input placeholder="请输入名字" />
          </Form.Item>
          <Form.Item
            name="age"
            label="年龄"
            rules={[
              {
                required: true,
                message: "请输入年龄",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} placeholder="请输入年龄" />
          </Form.Item>
          <Form.Item
            name="address"
            label="地址"
            rules={[{ required: true, message: "请输入地址" }]}
          >
            <Input.TextArea placeholder="请输入地址" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageUserList;
