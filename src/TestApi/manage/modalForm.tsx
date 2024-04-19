import React, { FC, useEffect } from "react";
import { Button, Form, Input, Modal, message, InputNumber } from "antd";
import type { FormProps } from "antd";
import { useForm } from "antd/es/form/Form";
import { ModalFormProps, FieldType } from "./types";

const ModalForm: FC<ModalFormProps> = (props: ModalFormProps) => {
  const { open, cancel, showModal, title, editObj, setEditObj } = props;
  const [form] = useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    if (title === "新增用户") {
      setEditObj({});
      message.success("添加成功");
      closeModal();
    } else {
      message.success("修改成功");
      closeModal();
      setEditObj({});
    }
  };

  // 清空输入框 && 刷新列表
  const closeModal = () => {
    form.resetFields();
    setEditObj({});
    cancel();
    // 刷新列表
    // queryList()
  };

  useEffect(() => {
    form.setFieldsValue(editObj);
  }, [editObj, form]);

  return (
    <>
      <Modal
        title={title}
        afterClose={closeModal}
        open={open}
        onOk={showModal}
        onCancel={cancel}
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
          <Form.Item<FieldType>
            label="姓名"
            name="name"
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>

          <Form.Item<FieldType>
            label="年龄"
            name="age"
            rules={[{ required: true, message: "请输入年龄" }]}
          >
            <InputNumber style={{ width: "100%" }} placeholder="请输入年龄" />
          </Form.Item>

          <Form.Item<FieldType>
            label="地址"
            name="address"
            rules={[{ required: true, message: "请输入地址" }]}
          >
            <Input placeholder="请输入地址" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button onClick={cancel}>取消</Button>
              <Button type="primary" htmlType="submit">
                确定
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
