import React from "react";
import { Space, Table, Button, message, Popconfirm } from "antd";
import type { TableProps, PopconfirmProps } from "antd";
import { DataType, TableListProps } from "./types";

const UserList = (props: TableListProps) => {
  const { setTitle, setEditObj, setIsModalOpen } = props;

  const ConfirmSure = () => {
    const confirm: PopconfirmProps["onConfirm"] = (e) => {
      message.success("删除成功");
    };

    const cancel: PopconfirmProps["onCancel"] = (e) => {
      console.log(e);
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
          <Button
            type="link"
            onClick={() => {
              setTitle("编辑用户");
              setIsModalOpen(true);
              setEditObj(record);
              // 刷新列表
              // queryList()
            }}
          >
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
      key: "1",
      name: "令狐冲",
      age: 32,
      address: "华山省",
    },
    {
      key: "2",
      name: "乔峰",
      age: 42,
      address: "丹麦省",
    },
    {
      key: "3",
      name: "杨过",
      age: 22,
      address: "古墓省",
    },
    {
      key: "4",
      name: "风清扬",
      age: 58,
      address: "无涯省",
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default UserList;
