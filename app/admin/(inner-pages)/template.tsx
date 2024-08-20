import "@/app/globals.css";

import MainLayout from "@/app/components/admins/MainLayout";

export default function Template({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
