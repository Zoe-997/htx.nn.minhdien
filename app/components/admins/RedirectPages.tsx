"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { getLocalStorageToken, getSectionStorageToken } from "@/app/libs/auth";

const RedirectPages = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token =
        (await getLocalStorageToken("user")) ||
        (await getSectionStorageToken("user"));
      setAuthenticated(token !== null);
    };

    checkAuthentication();
  }, [router]);

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

  if (!authenticated) {
    router.push("/admin/login");
  }

  if (pathname === "/admin") {
    router.push("/admin/dashboard");
  }

  return <div>{children}</div>;
};

export default RedirectPages;
