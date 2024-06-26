import React, { useEffect, useRef, useState } from "react";
import { createForm } from "@formily/core";
import { FormProvider, Field } from "@formily/react";
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
  FormGrid,
  Form,
} from "@formily/antd";
const { GridColumn } = FormGrid;
const Add = () => {
  const form = createForm();
  return (
    <FormProvider form={form}>
      <FormLayout
        breakpoints={[100]}
        layout={["horizontal", "horizontal"]}
        labelAlign={["left", "right"]}
      >
        <Form form={form} layout="inline" size="large">
          <Field
            name="username"
            title="用户名"
            required
            initialValue="Hello world1111"
            decorator={[FormItem]}
            component={[
              Input,
              {
                style: {
                  width: 240,
                },
              },
            ]}
          />
          <Field
            name="password"
            title="密码"
            required
            initialValue="Hello world"
            decorator={[FormItem]}
            component={[
              Input,
              {
                style: {
                  width: 240,
                },
              },
            ]}
          />
        </Form>
      </FormLayout>

      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
};

export default Add;
