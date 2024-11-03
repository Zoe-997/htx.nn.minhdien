import React from "react";
import { Breadcrumb } from "antd";
import type { BreadcrumbProps } from "antd";
import Container from "./Container";

interface BreadcrumbItems {
  items: BreadcrumbProps["items"];
  image?: string;
}

const BreadcrumbCustom = ({ items, image }: BreadcrumbItems) => {
  const imageDefault = `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/breadcrumb.jpg`;

  return (
    <div
      className="relative py-20 mb-10 min-h-[350px] bg-no-repeat bg-center flex items-center justify-center before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[rgba(0,0,0,.4)] before:z-[1]"
      style={{ backgroundImage: `url(${image ? image : imageDefault})` }}
    >
      <div className="relative z-[2] text-white">
        <Container>
          <Breadcrumb items={items} />
        </Container>
      </div>
    </div>
  );
};

export default BreadcrumbCustom;
