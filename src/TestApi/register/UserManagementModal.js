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
  const register = title === "register";
  const modalTitle = title === "edit" ? "编辑" : "注册";

  const onFinish = (values) => {
    onSubmit(values);
    onCancel();
  };

  useEffect(() => {
    !register && form.setFieldsValue(userToEdit);
  }, [userToEdit, visible]);

  return (
    <Modal
      open={visible}
      afterClose={() => {
        form.resetFields();
        resetCountdown();
      }}
      title={modalTitle}
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
          rules={[
            { required: true, message: "请输入昵称" },
            () => ({
              validator(_, value) {
                if (!/^[\u4e00-\u9fa5a-zA-Z0-9_$!]+$/.test(value)) {
                  return Promise.reject("昵称只能包含中文大小写字母数字_$!");
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input placeholder="请输入昵称" />
        </Form.Item>

        <Form.Item
          label="年龄"
          name="age"
          rules={[
            { required: true, message: "请输入年龄" },
            () => ({
              validator(_, value) {
                if (!/^\d+$/.test(value)) {
                  return Promise.reject("年龄不合法，请重新输入");
                }
                if (value < 1 || value > 130) {
                  return Promise.reject("年龄需在1到130之间且为数字");
                }
                return Promise.resolve();
              },
            }),
          ]}
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

        {register && (
          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: "请输入密码" },
              () => ({
                validator(_, value) {
                  if (
                    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.@!$])[a-zA-Z0-9@!$]+$/.test(
                      value
                    )
                  ) {
                    return Promise.reject(
                      "密码必须包含数字、大写字母、小写字母和@!$中的至少一个字符"
                    );
                  }
                  if (value && value.length < 8) {
                    return Promise.reject("密码最少 8 位");
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
        )}

        {register && (
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
          rules={[
            { required: true, message: "请输入电话号码" },
            () => ({
              validator(_, value) {
                if (!/^1[3-9]\d{9}$/.test(value)) {
                  return Promise.reject("请输入正确的手机号");
                }
                if (!/^\d+$/.test(value)) {
                  return Promise.reject("手机号只能输入数字");
                }
                if (value.length > 11) {
                  return Promise.reject("手机号最多 11 位");
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          {!register && (
            <Form.Item name="phoneNumber">
              <Input placeholder="请输入电话号码" />
            </Form.Item>
          )}
          {register && (
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

        {register && (
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
