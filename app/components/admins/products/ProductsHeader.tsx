"use client";
import { useRouter } from "next/navigation";
import { PlusOutlined } from "@ant-design/icons";

import PageTitle from "@/app/components/admins/PageTitle";
import { constants } from "@/app/libs/constants";
import { getLocalStorageToken, getSectionStorageToken } from "@/app/libs/auth";

const ProductHeader = () => {
  const router = useRouter();
  const user = getLocalStorageToken("user") || getSectionStorageToken("user");
  const userJson = user ? JSON.parse(user) : {};
  const UserPermission = userJson?.user?.permission;

  return (
    <>
      <PageTitle
        title="Products"
        btnLabel={
          constants.FULL_PERMISSION.includes(UserPermission)
            ? "Add product"
            : ""
        }
        btnIcon={<PlusOutlined />}
        btnAction={() => router.push("/admin/products/create")}
      />
    </>
  );
};

export default ProductHeader;
