"use client";
import { usePathname } from "next/navigation";
import HeaderHome from "./HeaderHome";
import HeaderGeneral from "./HeaderGeneral";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>{pathname === "/" ? <HeaderHome /> : <HeaderGeneral />}</header>
  );
};

export default Header;
