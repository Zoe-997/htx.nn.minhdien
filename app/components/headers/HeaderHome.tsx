"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

import Logo from "@/app/components/headers/Logo";
import Link from "next/link";

const HeaderHome = () => {
  const imageDefault = `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/banner-home.jpg`;
  const [headerBg, setHeaderBg] = useState<string>(`${imageDefault}`);
  const headerItems = [
    {
      title: `Welcome to ${process.env.NEXT_PUBLIC_STORE_NAME}`,
      description: "",
      isHome: true,
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/banner-home.jpg`,
      path: "/",
    },
    {
      title: "About",
      description:
        "Là HTX chuyên về nông nghiệp với nhiều năm kinh nghiệm trong trồng trọt lương thực và hòa màu. Bên cạnh đó HTX còn cung cấp các dịch vụ phục vụ sản xuất nông nghiệp.",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/banner-about.jpg`,
      path: "#about",
      background: "#d27846e6",
    },
    {
      title: "Our works",
      description:
        "Chúng tôi chuyên sản xuất và kinh doanh các sản phẩm cũng như các dịch vụ thuộc lĩnh vực nông nghiệp.",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/banner-our-works.jpg`,
      path: "#our-works",
      background: "#6496bee6",
    },
    {
      title: "Contact",
      description:
        "Nếu bạn cần bất kỳ sự trợ giúp nào, vui lòng liên hệ với chúng tôi qua email, số điện thoại, hoặc các trang của chúng tôi trên các mạng xã hội. Chúng tôi chắc chắn rằng bạn có thể nhận được phản hồi của chúng tôi sớm nhất có thể.",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/banner-contact.jpg`,
      path: "#contact",
      background: "#788c50e6",
    },
    {
      title: "Blogs",
      description:
        "Học hỏi và chia sẻ các kinh nghiệm cũng như kiến thức về lĩnh vực nông nghiệp.",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/banner-blogs.jpg`,
      path: "/blogs",
      background: "#dca03ce6",
    },
    {
      title: "Products",
      description: "Chúng tôi có nhiều sản phẩm và dịch vụ chất lượng cao.",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/banner-products.jpg`,
      path: "/",
      background: "#e09c9ee6",
    },
  ];

  const handleChangeBackground = (bg: string) => {
    if (bg) setHeaderBg(bg);
  };

  return (
    <header>
      <div
        className="grid grid-cols-3 h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${headerBg})`,
          transition: "background 0.5s ease",
        }}
      >
        {headerItems?.map((item, index: number) => (
          <div
            key={index}
            className="group h-[50vh] relative border-[0] border-b-[1px] border-r-[1px] border-solid border-[rgba(255,255,255,0.2)] cursor-pointer"
            onMouseEnter={() => handleChangeBackground(item.image)}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 opacity-0 group-hover:opacity-100 z-[1]"
              style={{
                background: `${
                  item.background ? item.background : "rgba(0,0,0,0)"
                }`,
              }}
            ></div>
            <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-wrap flex-col p-10 z-[2] text-white">
              {item.isHome && (
                <div className="mb-10">
                  <Logo isHeader />
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3">{item.description}</p>
              </div>
              {!item.isHome && (
                <div className="mt-3">
                  <Link
                    href={item.path}
                    className="inline-block group/item hover:text-white"
                  >
                    <div className="inline-block mr-3 align-middle">
                      <div className="relative flex items-center">
                        <ChevronRight
                          size={15}
                          className="absolute top-[calc(50%+0.5px)] left-[0] opacity-0 -translate-y-[50%] transition-all duration-500 group-hover/item:opacity-100 group-hover/item:left-[15px]"
                        />
                        <span className="bg-white w-[25px] h-[1px] inline-block"></span>
                      </div>
                    </div>
                    <span>Xem thêm</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default HeaderHome;
