"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { getLocalStorageToken, getSectionStorageToken } from "@/app/libs/auth";

const RedirectPages = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token =
        (await getLocalStorageToken("user")) ||
        (await getSectionStorageToken("user"));
      setAuthenticated(token !== null);
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    // Điều hướng đến trang login nếu không xác thực
    if (
      authenticated === false &&
      pathname !== "/admin/login" &&
      !hasRedirected
    ) {
      router.push("/admin/login");
      setHasRedirected(true);
    }
    // Điều hướng đến trang dashboard nếu đã xác thực và đang ở trang admin hoặc login
    else if (
      authenticated &&
      (pathname === "/admin" || pathname === "/admin/login") &&
      !hasRedirected
    ) {
      router.push("/admin/dashboard");
      setHasRedirected(true);
    }
  }, [authenticated, pathname, router, hasRedirected]);

  if (authenticated === null) {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return <div>{children}</div>;
};

export default RedirectPages;
