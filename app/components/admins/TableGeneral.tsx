"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Table, Dropdown, Modal, message } from "antd";
import type { TableProps, MenuProps } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

interface TableGeneralProps {
  columns: TableProps<any>["columns"];
  data: any;
  loading?: boolean;
  openModal?: boolean;
  onCancel: () => void;
  onOK: () => void;
  titleModal?: string;
}

const TableGeneral = ({
  columns,
  data,
  loading,
  openModal,
  onCancel,
  onOK,
  titleModal,
}: TableGeneralProps) => {
  return (
    <>
      <Table columns={columns} dataSource={data} loading={loading} />
      <Modal
        open={openModal}
        onOk={onOK}
        onCancel={onCancel}
        width={400}
        className="text-center p-0"
      >
        <h3 className="font-semibold flex gap-2">
          <InfoCircleOutlined className="text-yellow-500 text-[20px]" />
          {titleModal && titleModal}
        </h3>
      </Modal>
    </>
  );
};

export default TableGeneral;
