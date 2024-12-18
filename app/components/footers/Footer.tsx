"use client";
import { Layout } from "antd";
import Image from "next/image";

import Container from "@/app/components/commons/Container";
import FooterContact from "@/app/components/footers/FooterContact";
import FooterLinks from "@/app/components/footers/FooterLinks";
import Newsletter from "@/app/components/commons/Newsletter";

const Footer = () => {
  const categories = [
    { label: "Lương thực", href: "#" },
    { label: "Hoa màu", href: "#" },
    { label: "Dịch vụ", href: "#" },
  ];

  const information = [
    { label: "Tin tức", href: "#" },
    { label: "Về chúng tôi", href: "#" },
    { label: "Chính sách vận chuyển", href: "#" },
    { label: "Chính sách thanh toán", href: "#" },
    { label: "Chính sách hoàn tiền", href: "#" },
  ];

  return (
    <div className="bg-[rgb(var(--sidebar-bg))] text-[rgb(var(--sidebar-text))] pt-10 md:pt-20 pb-5">
      <Container>
        <div className="flex flex-wrap -mx-5">
          <div className="px-5 w-full lg:w-2/12 mb-5 md:mb-0">
            <div className="max-w-[170px] pb-[20%] md:pb-[54.35%] relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/images/logo2.png`}
                alt="Mdc Logo"
                className="absolute w-full h-full object-contain object-left"
                fill
              />
            </div>
          </div>

          <div className="px-5 w-full lg:w-3/12 mb-10 md:mb-0">
            <FooterContact />
          </div>

          <div className="px-5 w-full sx:w-1/2 lg:w-2/12 mb-10 md:mb-0">
            <FooterLinks menu={categories} title="CATEGORIES" />
          </div>

          <div className="px-5 w-full sx:w-1/2 lg:w-2/12 mb-10 md:mb-0">
            <FooterLinks menu={information} title="INFORMATION" />
          </div>

          <div className="px-5 w-full lg:w-3/12">
            <Newsletter />
          </div>
        </div>

        <div className="h-[1px] bg-[rgba(225,_225,_225,_.3)] my-5"></div>

        <div className="text-center">
          ©{new Date().getFullYear()} bản quyền thuộc{" "}
          {process.env.NEXT_PUBLIC_STORE_NAME}.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
