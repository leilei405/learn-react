import React from "react";
import { Space, Table, Button, message as Message, Popconfirm } from "antd";
import type { TableProps, PopconfirmProps } from "antd";
import { ModalRef } from "./modalForm";

interface DataType {
  id: string;
  name: string;
  age: number;
  address: string;
}

interface UserListProps {
  eleRef: ModalRef;
}

const UserList = (props: UserListProps) => {
  const { eleRef } = props || {};

  // 确认是否删除
  const ConfirmSure = () => {
    const confirm: PopconfirmProps["onConfirm"] = (e) => {
      Message.success("删除成功");
    };

    const cancel: PopconfirmProps["onCancel"] = (e) => {
      console.log(e);
      Message.warning("取消删除");
    };
    return (
      <Popconfirm
        title="删除用户信息"
        description="想清楚，确定要删除吗?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="确定"
        cancelText="取消"
      >
        <Button type="link">删除</Button>
      </Popconfirm>
    );
  };

  const handleEdit = (record: any) => {
    eleRef?.current?.open();
    eleRef?.current?.setTitle("编辑用户");
    eleRef?.current?.echoObj(record);
  };

  // 表格列
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "姓名",
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
      key: "action",
      render: (_value, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <ConfirmSure />
        </Space>
      ),
    },
  ];

  // 数据
  const data: DataType[] = [
    {
      id: "1",
      name: "令狐冲",
      age: 32,
      address: "华山省",
    },
    {
      id: "2",
      name: "乔峰",
      age: 42,
      address: "丹麦省",
    },
    {
      id: "3",
      name: "杨过",
      age: 22,
      address: "古墓省",
    },
    {
      id: "4",
      name: "风清扬",
      age: 58,
      address: "无涯省",
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default UserList;
