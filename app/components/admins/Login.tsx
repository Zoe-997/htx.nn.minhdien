"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import type { FormProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { useAuthStore } from "@/app/apis/stores/authStore";
import {
  getLocalStorageToken,
  getSectionStorageToken,
  setLocalStorageToken,
  setSectionStorageToken,
} from "@/app/libs/auth";
import Logo from "../headers/Logo";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false);
  const { login, loading } = useAuthStore();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    const onSuccess = (res: any) => {
      if (res) {
        message.success("Login success");
        router.push("/admin");

        if (values.remember) {
          setLocalStorageToken("user", JSON.stringify(res));
        } else {
          setSectionStorageToken("user", JSON.stringify(res));
        }
      }
    };

    const onFail = (err: any) => {
      message.success(`${err.statusCode} - ${err.message}`);
    };

    login(values, onSuccess, onFail);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const token =
        (await getLocalStorageToken("user")) ||
        (await getSectionStorageToken("user"));
      setAuthenticated(token !== null);
    };

    checkAuthentication();
  }, [router]);

  if (authenticated && pathname === "/admin/login") {
    return router.push("/admin/dashboard");
  }

  return (
    <div className="bg-white w-full max-w-[500px] p-10 rounded-xl overflow-hidden">
      <div className="flex flex-col items-center text-center mb-5">
        <Logo isHeader />
        <h1 className="text-2xl font-bold mt-2">Admin Login</h1>
      </div>

      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-full"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
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

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
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

export default Login;
