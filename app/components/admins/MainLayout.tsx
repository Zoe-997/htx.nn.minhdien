"use client";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  FormOutlined,
  HistoryOutlined,
  SignatureOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Avatar, Space, Affix } from "antd";
import Logo from "../headers/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getLocalStorageToken, getSectionStorageToken } from "@/app/libs/auth";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  href: string,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label: <Link href={href}>{label}</Link>,
    key,
    icon,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "/admin/dashboard", "dashboard", <PieChartOutlined />),
  getItem("Products", "/admin/products", "products", <DesktopOutlined />),
  getItem("Users", "/admin/users", "users", <UserOutlined />),
  getItem("Blogs", "/admin/blogs", "blogs", <FormOutlined />),
  getItem("Files", "/admin/files", "files", <FileOutlined />),
  getItem("Seo", "/admin/seo", "seo", <HistoryOutlined />),
  getItem("Contact", "/admin/contact", "contact", <SignatureOutlined />),
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const breadcrumb = pathname.split("/").filter((item: string) => item !== "");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const user = getLocalStorageToken("user") || getSectionStorageToken("user");
  const useJson = user ? JSON.parse(user) : {};

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className={`mx-auto my-5 [&>*]:w-full [&>*]:h-full ${
            collapsed ? "w-[50px] h-[50px]" : "w-[100px] h-[100px]"
          }`}
        >
          <Logo />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="relative pt-20">
        <Affix>
          <div className="flex flex-wrap gap-5 items-center justify-between px-10 py-3 bg-white shadow-sm absolute top-0 right-0 left-0">
            <Breadcrumb
              className="capitalize"
              items={breadcrumb.map((item: string, index: number) => {
                const href = breadcrumb.slice(0, index + 1).join("/");
                return {
                  title:
                    index === breadcrumb.length - 1 ? (
                      <span className="text-base">{item}</span>
                    ) : (
                      <Link
                        href={`/${href}`}
                        className="text-base hover:!bg-transparent"
                      >
                        {item}
                      </Link>
                    ),
                };
              })}
            />
            <Space wrap size={5}>
              <Avatar icon={<UserOutlined />} />
              <span>
                {useJson?.user?.firstName} {useJson?.user?.lastName}
              </span>
            </Space>
          </div>
        </Affix>

        <Content className="px-10">
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {process.env.NEXT_PUBLIC_STORE_NAME} ©{new Date().getFullYear()}{" "}
          Created by MDC Dev
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
