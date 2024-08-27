"use client";
import React from "react";
import { Button, Form, Input, message } from "antd";
import type { FormProps } from "antd";

interface ProductFormProps {
  productId?: string;
}

type FieldType = {
  email: string;
  phone: string;
  address: string;
  youtube: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  linkedin: string;
  twitter: string;
};

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("values: ", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="flex flex-wrap items-center gap-5">
          <Form.Item
            label="Phone"
            name="phone"
            className="flex-1"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            className="flex-1"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item label="Address" name="address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Facebook" name="facebook">
          <Input />
        </Form.Item>
        <Form.Item label="Youtube" name="youtube">
          <Input />
        </Form.Item>
        <Form.Item label="Instagram" name="instagram">
          <Input />
        </Form.Item>
        <Form.Item label="TikTok" name="tiktok">
          <Input />
        </Form.Item>
        <Form.Item label="LinkedIn" name="linkedin">
          <Input />
        </Form.Item>
        <Form.Item label="Twitter" name="twitter">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactForm;
