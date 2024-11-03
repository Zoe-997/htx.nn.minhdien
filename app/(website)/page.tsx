import BannerTop from "@/app/components/sections/BannerTop";
import Introduction from "@/app/components/sections/Introduction";
import OurWorks from "@/app/components/sections/OurWorks";
import Contact from "../components/sections/Contact";

export async function generateMetadata() {
  return {
    title: "Hợp tác xã Nông nghiệp Minh Diện | Nông nghiệp xanh ở Việt Nam",
    description:
      "Hợp tác xã Nông nghiệp Minh Diện là một hợp tác xã ở Việt Nam đặt quan hệ đối tác với các hộ sản xuất nhỏ làm trọng tâm trong hoạt động hàng ngày của mình. Bảo vệ môi trường thông qua các hoạt động bền vững.",
    openGraph: {
      images: [
        `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/openGraph/home.jpg`,
      ],
    },
  };
}

export default function Home() {
  return (
    <>
      {/* <BannerTop /> */}
      <div id="about" className="my-10 py-10">
        <Introduction />
      </div>
      <div className="py-20 bg-[#EDF8F0]" id="our-works">
        <OurWorks />
      </div>
      <div className="py-10" id="contact">
        <Contact />
      </div>
    </>
  );
}
