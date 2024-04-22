import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { FormInstance } from "antd/lib/form";
interface UserModalProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: any) => void;
  initialValues?: any;
  form?: FormInstance<any>; // 确保包含 form 属性
}
const UserModal: React.FC<UserModalProps> = ({
  visible,
  onCancel,
  onSubmit,
  initialValues,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      title={initialValues ? "编辑用户" : "新增用户"}
      onCancel={onCancel}
      afterClose={form.resetFields}
      footer={null}
    >
      <Form form={form} onFinish={onSubmit} initialValues={initialValues}>
        <Form.Item
          name="name"
          label="用户名称"
          rules={[{ required: true, message: "请输入用户名称!" }]}
        >
          <Input placeholder="请输入用户名称" />
        </Form.Item>
        <Form.Item
          name="email"
          label="用户Email"
          rules={[
            {
              required: true,
              type: "email",
              message: "请输入用户 email!",
            },
          ]}
        >
          <Input placeholder="请输入用户 email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
