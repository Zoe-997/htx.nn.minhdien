"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoImage from "./LogoImage";

interface LogoProps {
  isHeader?: boolean;
}

const Logo = ({ isHeader }: LogoProps) => {
  const pathname = usePathname();

  return (
    <>
      {isHeader && (
        <div className="relative w-[70px] h-[70px]">
          {pathname === "/" && (
            <h1>
              <LogoImage
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/images/logo.png`}
                alt="Logo"
              />
            </h1>
          )}
          {pathname !== "/" && (
            <Link href="/">
              <LogoImage
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/images/logo.png`}
                alt="Logo"
              />
            </Link>
          )}
        </div>
      )}
      {!isHeader && (
        <div className="relative w-[100px] h-[100px]">
          <LogoImage
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/images/logo2.png`}
            alt="Logo"
          />
        </div>
      )}
    </>
  );
};

export default Logo;
