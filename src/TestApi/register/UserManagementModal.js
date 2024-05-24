import React, { useEffect } from "react";
import { Form, Input, Button, Modal, Space } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const UserManagementModal = ({
  visible,
  onCancel,
  mode,
  userToEdit = null,
  onSubmit = () => {},
}) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
    onCancel();
  };

  useEffect(() => {
    form.setFieldsValue(userToEdit);
  }, [userToEdit, form]);

  return (
    <Modal
      open={visible}
      afterClose={form.resetFields}
      title={mode === "edit" ? "编辑" : "注册"}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        {...formItemLayout}
        form={form}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <Form.Item
          label="名字"
          name="name"
          rules={[{ required: true, message: "请输入名字" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: "请输入年龄" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="电话号码"
          name="phoneNumber"
          rules={[{ required: true, message: "请输入电话号码" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            {
              type: "email",
              message: "请输入有效的邮箱",
            },
            { required: true, message: "请输入邮箱" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button onClick={onCancel}>取消</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserManagementModal;
