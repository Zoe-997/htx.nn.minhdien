"use client";
import { Layout } from "antd";
import Image from "next/image";

import Container from "@/app/components/commons/Container";
import FooterContact from "@/app/components/footers/FooterContact";
import FooterLinks from "@/app/components/footers/FooterLinks";
import Newsletter from "@/app/components/commons/Newsletter";

const Footer = () => {
  const categories = [
    { label: "Food", href: "#" },
    { label: "Vegetables", href: "#" },
    { label: "Agricultural Machinery", href: "#" },
  ];

  const information = [
    { label: "Blog", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Payment Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ];

  return (
    <div className="bg-[rgb(var(--sidebar-bg))] text-[rgb(var(--sidebar-text))] pt-20">
      <Container>
        <div className="flex flex-wrap -mx-5">
          <div className="px-5 lg:w-2/12">
            <div className="max-w-[170px] pb-[46.82%] relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/images/logo2.png`}
                alt="Mdc Logo"
                className="absolute w-full h-full object-contain"
                fill
              />
            </div>
          </div>

          <div className="px-5 lg:w-3/12">
            <FooterContact />
          </div>

          <div className="px-5 lg:w-2/12">
            <FooterLinks menu={categories} title="CATEGORIES" />
          </div>

          <div className="px-5 lg:w-2/12">
            <FooterLinks menu={information} title="INFORMATION" />
          </div>

          <div className="px-5 lg:w-3/12">
            <Newsletter />
          </div>
        </div>

        <div className="h-[1px] bg-[rgba(225,_225,_225,_.3)] my-5"></div>

        <div className="text-center">
          ©{new Date().getFullYear()} {process.env.NEXT_PUBLIC_STORE_NAME}{" "}
          Store. All Rights Reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
