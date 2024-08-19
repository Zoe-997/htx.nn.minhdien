import BannerTop from "@/app/components/sections/BannerTop";
import Introduction from "@/app/components/sections/Introduction";

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

export default function Home() {
  return (
    <>
      <BannerTop />
      <Introduction />
    </>
  );
}
