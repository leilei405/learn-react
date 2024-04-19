import React, {
  ReactElement,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";

interface ModalFormProps {
  getFormValue: (val: any) => void;
  children?: ReactElement;
}

export interface ModalRef {
  open?: () => void;
  close?: () => void;
  setTitle?: (val: string) => void;
  echoObj?: (obj: any) => void;
  current?: any;
}

const ModalForm = forwardRef<ModalRef, ModalFormProps>((props, ref) => {
  const { getFormValue, children } = props || {};
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");

  useImperativeHandle(
    ref,
    () => ({
      open: () => setVisible(true),
      close: () => setVisible(false),
      setTitle: (customTitle) => setTitle(customTitle),
      echoObj: (obj) => form.setFieldsValue(obj),
    }),
    []
  );

  const onFinish = (values: string) => {
    getFormValue(values);
  };

  return (
    <Modal
      title={title}
      open={visible}
      onCancel={() => {
        setVisible(false);
      }}
      afterClose={() => form.resetFields()}
      footer={null}
    >
      <Form
        name="params"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: "请输入年龄" }]}
        >
          <Input placeholder="请输入年龄" />
        </Form.Item>
        <Form.Item
          label="地址"
          name="address"
          rules={[{ required: true, message: "请输入地址" }]}
        >
          <Input placeholder="请输入地址" />
        </Form.Item>
        {/* 用户自定义扩展 */}
        {children}
        <Form.Item wrapperCol={{ offset: 5, span: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              onClick={() => {
                setVisible(false);
              }}
            >
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default ModalForm;
