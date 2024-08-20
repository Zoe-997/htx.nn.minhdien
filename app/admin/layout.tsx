import { Nunito } from "next/font/google";

import "@/app/globals.css";
import RedirectPages from "../components/admins/RedirectPages";

const fontBase = Nunito({ subsets: ["latin", "vietnamese"] });

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontBase.className}>
        <RedirectPages>{children}</RedirectPages>
      </body>
    </html>
  );
}
