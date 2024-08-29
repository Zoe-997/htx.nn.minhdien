import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import FooterTitle from "@/app/components/footers/FooterTitle";
import Social from "@/app/components/commons/Socials";

type FieldType = {
  email?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
  message.success("Subscribe success!");
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Newsletter: React.FC = () => {
  return (
    <div>
      <div className="mb-5">
        <FooterTitle title="NEWSLETTER" />
      </div>
      <p className="mb-3">
        Enter your email address to get $10 off your first order and free
        shipping. Updates information on Sales and Offers.
      </p>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex flex-wrap gap-2"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[
            { required: true, message: "Please input your username!" },
            { type: "email" },
          ]}
          className="w-full flex-1"
        >
          <Input className="rounded-full" placeholder="Your email address" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="rounded-full bg-white">
            Subscibe
          </Button>
        </Form.Item>
      </Form>

      <div>
        <Social />
      </div>
    </div>
  );
};

export default Newsletter;
