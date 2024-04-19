import { Button, Checkbox, Input } from "antd";
import Form from "./";

const Basic: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "请输入用户名!" },
          { max: 6, message: "长度不能大于 6" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>记住我</Checkbox>
      </Form.Item>

      <Form.Item>
        <div>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Basic;
