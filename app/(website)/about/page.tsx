import BreadcrumbCustom from "@/app/components/commons/BreadcrumbCustom";
import BlogCollections from "@/app/components/sections/BlogCollections";
import BlogsGrid from "@/app/components/sections/BlogsGrid";
import { Breadcrumb } from "antd";

export async function generateMetadata() {
  return {
    title:
      "Về chúng tôi - Hợp tác xã Nông nghiệp Minh Diện | Nông nghiệp xanh ở Việt Nam",
    description:
      "HTX Minh Diện là một HTX nông nghiệp coi trong phát triển bền vững với các sản phẩm nông nghiệp đảm bảo tiêu chuẩn an toàn và thân thiện với môi trường.",
    openGraph: {
      images: [
        `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/openGraph/home.jpg`,
      ],
    },
  };
}

export default function BlogsHome() {
  const breadcrumbItems = [
    {
      title: "Home",
    },
    {
      title: <a href="/blogs">Blogs</a>,
    },
  ];

  return (
    <div className="pb-20">
      <BreadcrumbCustom items={breadcrumbItems} />
      <div className="mb-5">
        <BlogCollections />
      </div>
      <BlogsGrid />
    </div>
  );
}
