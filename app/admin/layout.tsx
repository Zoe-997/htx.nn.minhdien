import { Nunito } from "next/font/google";

import "@/app/globals.css";
import Header from "@/app/components/headers/Header";
import Footer from "@/app/components/footers/Footer";

const fontBase = Nunito({ subsets: ["latin", "vietnamese"] });

export default function AdminHome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontBase.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
