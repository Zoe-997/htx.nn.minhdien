"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Table, Dropdown, Modal, message } from "antd";
import type { TableProps, MenuProps } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { EllipsisVertical } from "lucide-react";

import { useProductsStore } from "@/app/apis/stores/productsStore";
import TableGeneral from "../TableGeneral";

interface DataType {
  key: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  permission: string;
  isActive: boolean;
}

const ProductsTable: React.FC = () => {
  const [recordAction, setRecordAction] = useState<any>({});
  const [products, setProducts] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getAllProducts, productRemove, loading } = useProductsStore();

  const fetchAllProducts = () => {
    const onSuccess = (res: any) => {
      if (res) {
        const data = res.products.map((item: any, index: number) => ({
          key: index,
          ...item,
        }));
        setProducts(data);
      }
    };

    getAllProducts(onSuccess);
  };

  const handleDeleteProduct = () => {
    const onSuccess = (res: any) => {
      if (res) {
        console.log("res: ", res);

        fetchAllProducts();
        message.success("Delete product success!");
      }
    };

    const onFail = (err: any) => {
      message.error(err.message);
    };

    productRemove(recordAction.id, onSuccess, onFail);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={`/admin/products/${recordAction.id}`}>Update</Link>,
    },
    {
      key: "2",
      label: (
        <span onClick={() => setIsModalOpen(true)} className="text-red-600">
          Delete
        </span>
      ),
    },
  ];

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Product name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      width: 50,
      align: "center",
      render: (_: any, record: any) => (
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          placement="bottom"
          onOpenChange={() => setRecordAction(record)}
        >
          <span className="cursor-pointer">
            <EllipsisVertical size={17} className="mx-auto" />
          </span>
        </Dropdown>
      ),
    },
  ];

  return (
    <TableGeneral
      columns={columns}
      data={products}
      loading={loading}
      openModal={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      onOK={handleDeleteProduct}
      titleModal="Are you sure you want to delete this product?"
    />
  );
};

export default ProductsTable;
