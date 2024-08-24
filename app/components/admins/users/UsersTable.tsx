"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Table, Tag, Dropdown, Modal, message } from "antd";
import type { TableProps, MenuProps } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { EllipsisVertical } from "lucide-react";
import { useAuthStore } from "@/app/apis/stores/authStore";

interface DataType {
  key: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  permission: string;
  isActive: boolean;
}

const UsersTable: React.FC = () => {
  const [recordAction, setRecordAction] = useState<any>({});
  const [users, setUsers] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getAllUsers, userRemove, loading } = useAuthStore();

  const fetchAllUsers = () => {
    const onSuccess = (res: any) => {
      if (res) {
        const data = res.map((item: any, index: number) => ({
          key: index,
          ...item,
        }));
        setUsers(data);
      }
    };

    getAllUsers(onSuccess);
  };

  const handleDeleteUser = () => {
    const onSuccess = (res: any) => {
      if (res) {
        fetchAllUsers();
        message.success("Delete user success!");
      }
    };

    const onFail = (err: any) => {
      message.error(err.message);
    };

    userRemove(recordAction.id, onSuccess, onFail);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={`/admin/users/${recordAction.id}`}>Update</Link>,
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

  return (
    <>
      <Table columns={columns} dataSource={users} loading={loading} />
      <Modal
        open={isModalOpen}
        onOk={handleDeleteUser}
        onCancel={() => setIsModalOpen(false)}
        width={400}
        className="text-center p-0"
      >
        <h3 className="font-semibold flex gap-2">
          <InfoCircleOutlined className="text-yellow-500 text-[20px]" />
          Are you sure you want to delete this account?
        </h3>
      </Modal>
    </>
  );
};

export default UsersTable;
