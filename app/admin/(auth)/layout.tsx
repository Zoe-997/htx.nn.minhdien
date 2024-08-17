import { Nunito } from "next/font/google";

import "@/app/globals.css";
import Header from "@/app/components/headers/Header";
import Footer from "@/app/components/footers/Footer";

const fontBase = Nunito({ subsets: ["latin", "vietnamese"] });

export default function AuthAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontBase.className}>
        <main className="h-screen flex items-center justify-center bg-[#F8F8F8]">
          {children}
        </main>
      </body>
    </html>
  );
}
