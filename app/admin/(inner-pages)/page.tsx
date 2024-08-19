"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { getLocalStorageToken, getSectionStorageToken } from "../../libs/auth";

export default function AdminHome() {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token =
        (await getLocalStorageToken("user")) ||
        (await getSectionStorageToken("user"));
      setAuthenticated(token !== null);
    };

    checkAuthentication();
  }, [router]);

  if (!authenticated) {
    return router.push("/admin/login");
  }

  if (pathname === "/admin") {
    return router.push("/admin/dashboard");
  }

  return <>admin</>;
}
