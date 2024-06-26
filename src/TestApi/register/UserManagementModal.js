import React, { useEffect } from "react";
import { Form, Input, Button, Modal, Space } from "antd";
import useCountdown from "../hook/useCountdown";

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

const wrapperCol = {
  offset: 6,
  span: 16,
};

const CustomCom = (props) => {
  const { visible, onCancel, title, userToEdit, onSubmit } = props;
  const { countdown, startCountdown, resetCountdown } = useCountdown(5);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values);
    onCancel();
  };

  useEffect(() => {
    title === "edit" && form.setFieldsValue(userToEdit);
  }, [userToEdit, visible]);

  return (
    <Modal
      open={visible}
      afterClose={() => {
        form.resetFields();
        resetCountdown();
      }}
      title={title === "edit" ? "编辑" : "注册"}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form}
        onFinish={onFinish}
        {...formItemLayout}
        autoComplete="off"
      >
        <Form.Item
          label="昵称"
          name="nickname"
          rules={[{ required: true, message: "请输入昵称" }]}
        >
          <Input placeholder="请输入昵称" />
        </Form.Item>

        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: "请输入年龄" }]}
        >
          <Input placeholder="请输入年龄" />
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
          <Input placeholder="请输入邮箱" />
        </Form.Item>

        {title === "register" && (
          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: "请输入密码" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value && value.length < 6) {
                    return Promise.reject("密码最少 6 位");
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
        )}

        {title === "register" && (
          <Form.Item
            label="确认密码"
            name="confirmPassword"
            rules={[
              { required: true, message: "请再次输入密码" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("两次输入的密码不一致");
                },
              }),
            ]}
          >
            <Input.Password placeholder="请再次输入密码" />
          </Form.Item>
        )}

        <Form.Item
          label="电话号码"
          name="phoneNumber"
          rules={[{ required: true, message: "请输入电话号码" }]}
        >
          {title === "edit" && (
            <Form.Item name="phoneNumber">
              <Input placeholder="请输入电话号码" />
            </Form.Item>
          )}
          {title === "register" && (
            <Space>
              <Input placeholder="请输入电话号码" />
              <Button type="primary" onClick={startCountdown}>
                {countdown === 5 || !!!countdown
                  ? "发送验证码"
                  : `${countdown}秒后重新发送`}
              </Button>
            </Space>
          )}
        </Form.Item>

        {title === "register" && (
          <Form.Item
            label="验证码"
            name="sms"
            rules={[{ required: true, message: "验证码" }]}
            hasFeedback
            validateStatus="success"
          >
            <Input.OTP />
          </Form.Item>
        )}

        <Form.Item wrapperCol={wrapperCol}>
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

export default CustomCom;
