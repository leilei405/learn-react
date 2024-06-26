import React, { useState, useEffect } from "react";
import { createForm } from "@formily/core";
import { Field, VoidField, ArrayField } from "@formily/react";
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Cascader,
  DatePicker,
  Submit,
  FormGrid,
  Upload,
  ArrayBase,
  Editable,
  FormButtonGroup,
} from "@formily/antd";
import { action } from "@formily/reactive";
import { Card, Button, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const form = createForm({
  validateFirst: true,
});

const IDUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: "authorization-text",
      }}
    >
      <Button icon={<UploadOutlined />}>上传复印件</Button>
    </Upload>
  );
};

const fetchAddress = (field) => {
  const transform = (data = {}) => {
    return Object.entries(data).reduce((buf, [key, value]) => {
      if (typeof value === "string")
        return buf.concat({
          label: value,
          value: key,
        });
      const { name, code, cities, districts } = value;
      const _cities = transform(cities);
      const _districts = transform(districts);
      return buf.concat({
        label: name,
        value: code,
        children: _cities.length
          ? _cities
          : _districts.length
            ? _districts
            : undefined,
      });
    }, []);
  };

  field.loading = true;
  fetch("//unpkg.com/china-location/dist/location.json")
    .then((res) => res.json())
    .then(
      action.bound((data) => {
        field.dataSource = transform(data);
        field.loading = false;
      })
    );
};

export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      form.setInitialValues({
        username: "Aston Martin",
        firstName: "Aston",
        lastName: "Martin",
        email: "aston_martin@aston.com",
        gender: 1,
        birthday: "1836-01-03",
        address: ["110000", "110000", "110101"],
        idCard: [
          {
            name: "this is image",
            thumbUrl:
              "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            uid: "rc-upload-1615825692847-2",
            url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          },
        ],
        contacts: [
          { name: "张三", phone: "13245633378", email: "zhangsan@gmail.com" },
          { name: "李四", phone: "16873452678", email: "lisi@gmail.com" },
        ],
      });
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#eee",
        padding: "40px 0",
      }}
    >
      <Card title="编辑用户" style={{ width: 620 }}>
        <Spin spinning={loading}>
          <Form
            form={form}
            labelCol={5}
            wrapperCol={16}
            onAutoSubmit={console.log}
          >
            <Field
              name="username"
              title="用户名"
              required
              decorator={[FormItem]}
              component={[Input]}
            />
            <VoidField
              name="name"
              title="姓名"
              decorator={[
                FormItem,
                {
                  asterisk: true,
                  feedbackLayout: "none",
                },
              ]}
              component={[FormGrid]}
            >
              <Field
                name="firstName"
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    placeholder: "姓",
                  },
                ]}
                required
              />
              <Field
                name="lastName"
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    placeholder: "名",
                  },
                ]}
                required
              />
            </VoidField>
            <Field
              name="email"
              title="邮箱"
              required
              validator="email"
              decorator={[FormItem]}
              component={[Input]}
            />
            <Field
              name="gender"
              title="性别"
              decorator={[FormItem]}
              component={[Select]}
              dataSource={[
                {
                  label: "男",
                  value: 1,
                },
                {
                  label: "女",
                  value: 2,
                },
                {
                  label: "第三性别",
                  value: 3,
                },
              ]}
              required
            />
            <Field
              name="birthday"
              title="生日"
              required
              decorator={[FormItem]}
              component={[DatePicker]}
            />
            <Field
              name="address"
              title="地址"
              required
              decorator={[FormItem]}
              component={[Cascader]}
              reactions={fetchAddress}
            />
            <Field
              name="idCard"
              title="身份证复印件"
              required
              decorator={[FormItem]}
              component={[IDUpload]}
            />
            <ArrayField
              name="contacts"
              title="联系人信息"
              decorator={[FormItem]}
            >
              {(field) => (
                <ArrayBase>
                  {field.value?.map((item, index) => (
                    <div key={index} className="array-items-item">
                      <Field
                        name={`${index}`}
                        title="完善联系人信息"
                        component={[Editable.Popover]}
                        reactions={(field) => {
                          field.title =
                            field.query(".[].name").value() || field.title;
                        }}
                      >
                        <VoidField
                          name="layout"
                          component={[FormLayout, { layout: "vertical" }]}
                        >
                          <Field
                            name="name"
                            title="姓名"
                            required
                            decorator={[FormItem]}
                            component={[
                              Input,
                              {
                                style: {
                                  width: 300,
                                },
                              },
                            ]}
                          />
                          <Field
                            name="email"
                            title="邮箱"
                            required
                            validator="email"
                            decorator={[FormItem]}
                            component={[
                              Input,
                              {
                                style: {
                                  width: 300,
                                },
                              },
                            ]}
                          />
                          <Field
                            name="phone"
                            title="手机号"
                            required
                            validator="phone"
                            decorator={[FormItem]}
                            component={[
                              Input,
                              {
                                style: {
                                  width: 300,
                                },
                              },
                            ]}
                          />
                        </VoidField>
                      </Field>
                      <FormItem.BaseItem>
                        <ArrayBase.Remove index={index} />
                        <ArrayBase.MoveDown index={index} />
                        <ArrayBase.MoveUp index={index} />
                      </FormItem.BaseItem>
                    </div>
                  ))}
                  <ArrayBase.Addition title="新增联系人" />
                </ArrayBase>
              )}
            </ArrayField>
            <FormButtonGroup.FormItem>
              <Submit block size="large">
                提交
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        </Spin>
      </Card>
    </div>
  );
};
