"use client";
import React from "react";
import { Button, Select, Form, Input, message, Spin } from "antd";
import type { FormProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Logo from "../headers/Logo";
import { useAuthStore } from "@/app/apis/stores/authStore";

type FieldType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  permission: string;
  isActive: string;
};

const Register: React.FC = () => {
  const { register, loading } = useAuthStore();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const dataSubmit = {
      ...values,
      isActive: false,
    };

    const onSuccess = (res: any) => {
      if (res) {
        message.success(
          "Create account success! Please contact to Admin to active account. Thanks."
        );
      }
    };
    register(dataSubmit, onSuccess);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-white w-full max-w-[500px] p-10 rounded-xl overflow-hidden">
      <div className="flex flex-col items-center text-center mb-5">
        <Logo isHeader />
        <h1 className="text-2xl font-bold mt-2">Admin Register</h1>
      </div>

      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-full"
      >
        <Form.Item<FieldType>
          label="First name"
          name="firstName"
          rules={[{ required: true, message: "Please input your firstName!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Last name"
          name="lastName"
          rules={[{ required: true, message: "Please input your lastName!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="Permission"
          name="permission"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Select>
            <Select.Option value="Admin">Admin</Select.Option>
            <Select.Option value="Content">Content</Select.Option>
            <Select.Option value="Support">Support</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            {loading && (
              <Spin indicator={<LoadingOutlined spin />} size="small" />
            )}
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
