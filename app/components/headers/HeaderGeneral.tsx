"use client";
import { useState } from "react";
import { Button } from "antd";
import { X } from "lucide-react";

import Container from "@/app/components/commons/Container";
import Logo from "@/app/components/headers/Logo";
import MainMenu from "@/app/components/headers/MainMenu";
import Tools from "@/app/components/headers/Tools";
import MenuMobile from "@/app/components/headers/MenuMobile";
import Social from "@/app/components/commons/Socials";

const HeaderGeneral = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
    { title: "Our work", path: "/our-work" },
    { title: "Contact", path: "/contact" },
    { title: "Blogs", path: "/blogs                  " },
  ];

  return (
    <div>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Logo isHeader />
          </div>
          <div className="hidden md:block flex-1">
            <MainMenu />
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Tools />
            <Button
              type="primary"
              className="md:hidden w-[40px] h-[40px] p-[10px]"
              onClick={() => setOpenMenuMobile(true)}
            >
              <span className="w-full h-full relative cursor-pointer">
                <span className="w-full h-[1px] bg-[rgb(var(--menu-color)_100%)] block absolute top-0"></span>
                <span className="w-full h-[1px] bg-[rgb(var(--menu-color)_100%)] block absolute top-[50%]"></span>
                <span className="w-full h-[1px] bg-[rgb(var(--menu-color)_100%)] block absolute bottom-0"></span>
              </span>
            </Button>
          </div>
        </div>
        <div
          className={`md:block fixed top-0 right-0 bottom-0 bg-[rgb(var(--btn-bg))] text-[rgb(var(--btn-text))] transition-all duration-500 ${
            openMenuMobile ? "left-[0]" : "left-[100%]"
          }`}
        >
          <div className="flex flex-wrap items-center px-5 py-2 border-0 border-b-[1px] border-solid">
            <h2 className="flex-1 font-semibold">MDC menu</h2>
            <Button type="text" onClick={() => setOpenMenuMobile(false)}>
              <X className="text-[rgb(var(--btn-text))]" />
            </Button>
          </div>
          <div className="px-5 py-2">
            <MenuMobile items={menuItems} openMenu={setOpenMenuMobile} />
            <div className="mt-10">
              <Social />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderGeneral;
