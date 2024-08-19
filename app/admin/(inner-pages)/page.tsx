"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { getToken } from "../../libs/auth";

export default function AdminLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await getToken("user");
      setAuthenticated(token !== null);
    };

    checkAuthentication();
  }, [router]);

  if (!authenticated) {
    return router.push("/admin/login");
  }

  if (pathname === "/" || pathname === "") {
    return router.push("/admin/dashboard");
  }

  return <>admin</>;
}
