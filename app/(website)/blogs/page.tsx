import BreadcrumbCustom from "@/app/components/commons/BreadcrumbCustom";
import BlogCollections from "@/app/components/sections/BlogCollections";
import BlogsGrid from "@/app/components/sections/BlogsGrid";
import { Breadcrumb } from "antd";

export async function generateMetadata() {
  return {
    title: "Minh Dien Agriculture Cooperative | Green Agriculture in Vietnam",
    description:
      "Minh Dien Agriculture Cooperative is a cooperative in Vietnam that places smallholder partnerships at the heart of its day-to-day operation. Protecting the environment through sustainable practices.",
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
