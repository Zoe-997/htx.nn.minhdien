import { Nunito } from "next/font/google";

import "@/app/globals.css";
import Header from "@/app/components/headers/Header";
import Footer from "@/app/components/footers/Footer";
import BackToTop from "@/app/components/commons/BackToTop";

const fontBase = Nunito({ subsets: ["latin", "vietnamese"] });

export default function RootLayout({
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
        <BackToTop />
      </body>
    </html>
  );
}
