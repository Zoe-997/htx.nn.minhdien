"use client";
import React, { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message, Select, Upload } from "antd";
import type { FormProps } from "antd";

import { constants } from "@/app/libs/constants";
import { useAuthStore } from "@/app/apis/stores/authStore";
import {
  getChangedFields,
  getLocalStorageToken,
  getSectionStorageToken,
} from "@/app/libs/auth";

import ImageUpload from "../ImageUpload";

interface UserFormProps {
  userId?: string;
}

type FieldType = {
  firstName: string;
  lastName: string;
  password: string;
  resetPassword: string;
  email: string;
  permission: string;
  image: string;
  isActive: boolean;
};

const UserForm = ({ userId }: UserFormProps) => {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const user = getLocalStorageToken("user") || getSectionStorageToken("user");
  const UserPermission = user ? JSON.parse(user).user.permission : "";
  const [userUpdate, setUserUpdate] = useState<any>({});
  const { getUserById, updateUser, loading } = useAuthStore();

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) {
        setUserUpdate(res);
        form.setFieldsValue(res);
      }
    };
    if (userId) getUserById(userId, onSuccess);
  }, [userId, getUserById, form]);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    let dataSubmit: any = { ...values };
    if (userId) {
      if (!constants.FULL_PERMISSION.includes(UserPermission)) {
        const { permission, isActive, ...dataSubmitOmit } = values;
        dataSubmit = { ...dataSubmitOmit };
      }

      const dataUpdate = getChangedFields(userUpdate, dataSubmit);
      if (dataUpdate) {
        const onSuccess = (res: any) => {
          if (res) message.success("Update success");
        };

        const onFail = (err: any) => {
          if (err) message.error(`${err.statusCode} - ${err.message}`);
          else message.error("Update fail");
        };
        updateUser(userId, dataUpdate, onSuccess, onFail);
      } else {
        message.info("Nothing to update");
      }
    } else {
      console.log("dataSubmit: ", dataSubmit);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {userId && (
        <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
          className="mb-5"
        >
          Update user
        </Checkbox>
      )}

      <Form
        layout="vertical"
        disabled={!componentDisabled}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="flex flex-wrap gap-3">
          <Form.Item
            label="First name"
            name="firstName"
            className="flex-1"
            rules={
              !userId
                ? [
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]
                : []
            }
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last name"
            name="lastName"
            className="flex-1"
            rules={
              !userId
                ? [
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]
                : []
            }
          >
            <Input />
          </Form.Item>
        </div>

        <div className="flex flex-wrap gap-3">
          <Form.Item
            label="Email"
            name="email"
            className="flex-1"
            rules={
              !userId
                ? [{ required: true, message: "Please input your email!" }]
                : []
            }
          >
            <Input />
          </Form.Item>

          <Form.Item label="Permission" name="permission" className="flex-1">
            <Select
              disabled={!constants.FULL_PERMISSION.includes(UserPermission)}
            >
              {constants.PERMISSIONS.map((per: string, index: number) => (
                <Select.Option key={index} value="per">
                  {per}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        <div className="flex flex-wrap gap-3">
          <Form.Item
            label="Password"
            name="password"
            className="flex-1"
            rules={
              !userId
                ? [{ required: true, message: "Please input your password!" }]
                : []
            }
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>

          <Form.Item
            label="Reset password"
            name="resetPassword"
            className="flex-1"
            rules={
              !userId
                ? [
                    {
                      required: true,
                      message: "Please input your reset password!",
                    },
                  ]
                : []
            }
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
        </div>

        <Form.Item label="Avatar" name="image">
          <div className="ssx:w-[300px] ssx:h-[300px]">
            <ImageUpload
              value={form.getFieldValue("image")}
              onChange={(value) => {
                form.setFieldValue("image", value);
              }}
            />
          </div>
        </Form.Item>

        <Form.Item name="isActive">
          <Checkbox
            checked={true}
            disabled={!constants.FULL_PERMISSION.includes(UserPermission)}
          >
            Active
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {userId ? "Update" : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserForm;
