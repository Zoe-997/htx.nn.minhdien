"use client";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import type { FormProps } from "antd";

import { constants } from "@/app/libs/constants";
import {
  getChangedFields,
  getLocalStorageToken,
  getSectionStorageToken,
} from "@/app/libs/auth";

import { useProductsStore } from "@/app/apis/stores/productsStore";
import ReactQuillFullToolBar from "../ReactQuillFullToolbar";
import ImageMultiUpload from "../ImageMultiUpload";

interface ProductFormProps {
  productId?: string;
}

type FieldType = {
  name: string;
  description: string;
  images: string[];
  content: string;
  unit: string;
};

const ProductForm = ({ productId }: ProductFormProps) => {
  const [form] = Form.useForm();
  const user = getLocalStorageToken("user") || getSectionStorageToken("user");
  const UserPermission = user ? JSON.parse(user).user.permission : "";
  const [productData, setProductData] = useState<any>({});
  const { getProductById, loading } = useProductsStore();

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) {
        setProductData(res);
        form.setFieldsValue(res);
      }
    };
    if (productId) getProductById(productId, onSuccess);
  }, [productId, getProductById, form]);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("values: ", values);

    let dataSubmit: any = { ...values };
    if (productId) {
      if (!constants.FULL_PERMISSION.includes(UserPermission)) {
        const { ...dataSubmitOmit } = values;
        dataSubmit = { ...dataSubmitOmit };
      }

      const dataUpdate = getChangedFields(productData, dataSubmit);
      if (dataUpdate) {
        const onSuccess = (res: any) => {
          if (res) message.success("Update success");
        };

        const onFail = (err: any) => {
          if (err) message.error(`${err.statusCode} - ${err.message}`);
          else message.error("Update fail");
        };
        // updateUser(productId, dataUpdate, onSuccess, onFail);
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
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Product name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea autoSize={{ minRows: 5 }} />
        </Form.Item>

        <Form.Item label="Images" name="images">
          <ImageMultiUpload
            value={form.getFieldValue("images")}
            onChange={(value) => {
              form.setFieldValue("images", value);
            }}
          />
        </Form.Item>

        <Form.Item name="content" label="Content">
          <ReactQuillFullToolBar
            onChange={(value) => {
              form.setFieldValue("content", value);
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {productId ? "Update" : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProductForm;
