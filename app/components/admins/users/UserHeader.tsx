"use client";
import { PlusOutlined } from "@ant-design/icons";

import PageTitle from "@/app/components/admins/PageTitle";
import { useRouter } from "next/navigation";

const UserHeader = () => {
  const router = useRouter();

  return (
    <>
      <PageTitle
        title="User"
        btnLabel="Add user"
        btnIcon={<PlusOutlined />}
        btnAction={() => router.push("/admin/users/create")}
      />
    </>
  );
};

export default UserHeader;
