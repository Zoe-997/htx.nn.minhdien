"use client";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Avatar, Space } from "antd";
import Logo from "../headers/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

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
  getItem("Blogs", "/admin/blogs", "blogs", <TeamOutlined />),
  getItem("Files", "/admin/files", "files", <FileOutlined />),
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const breadcrumb = pathname.split("/").filter((item: string) => item !== "");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="flex flex-wrap justify-center mt-2 mb-5">
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
        <div className="flex flex-wrap gap-5 items-center justify-between px-10 py-3 bg-white shadow-sm absolute top-0 right-0 left-0">
          <Breadcrumb
            className="capitalize"
            items={breadcrumb.map((item: string, index: number) => ({
              title:
                index === breadcrumb.length - 1 ? (
                  <span className="text-base">{item}</span>
                ) : (
                  <Link
                    href={pathname}
                    className="text-base hover:!bg-transparent"
                  >
                    {item}
                  </Link>
                ),
            }))}
          />
          <Space wrap size={5}>
            <Avatar icon={<UserOutlined />} />
            <span>Admin</span>
          </Space>
        </div>

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
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
