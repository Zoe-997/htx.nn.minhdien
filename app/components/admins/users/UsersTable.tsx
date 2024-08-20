"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Table, Tag, Dropdown } from "antd";
import type { TableProps, MenuProps } from "antd";
import { EllipsisVertical } from "lucide-react";

interface DataType {
  key: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  permission: string;
  isActive: boolean;
}

const data: DataType[] = [
  {
    key: "1",
    id: "rthfphjghlkmhlkm",
    firstName: "dsfrgbhkjgegbig",
    lastName: "New York No. 1 Lake Park",
    email: "test123@gmmail.com",
    permission: "Admin",
    isActive: true,
  },
  {
    key: "2",
    id: "rthfphjghlkmhlkdfh",
    firstName: "dsfrgbhkjgegbig",
    lastName: "New York No. 1 Lake Park",
    email: "test123@gmmail.com",
    permission: "Admin",
    isActive: false,
  },
];

const UsersTable: React.FC = () => {
  const [recordAction, setRecordAction] = useState<any>({});
  console.log("recordAction: ", recordAction);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span onClick={() => {}}>Edit</span>,
    },
    {
      key: "2",
      label: (
        <span onClick={() => {}} className="text-red-600">
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
      render: (text) => <Link href={`/admin/users/${text}`}>{text}</Link>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "First name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last name",
      key: "lastName",
      dataIndex: "lastName",
    },
    {
      title: "Permission",
      key: "permission",
      dataIndex: "permission",
    },
    {
      title: "Status",
      key: "isActive",
      dataIndex: "isActive",
      render: (text: boolean) => (
        <Tag color={text ? "success" : "error"}>
          {text ? "Active" : "Inactive"}
        </Tag>
      ),
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
            <EllipsisVertical size={17} />
          </span>
        </Dropdown>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default UsersTable;
