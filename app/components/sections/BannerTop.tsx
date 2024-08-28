import Image from "next/image";
import Container from "@/app/components/commons/Container";

const BannerTop = () => {
  return (
    <div>
      <div className="relative pb-[48%] overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/images/banner.jpg`}
          alt="Banner"
          fill
          className="animate-kenburnsBottom object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center z-[1] text-center">
        <Container>
          <p>ONE OF THE LARGEST OIL PALM COMPANIES IN ASIA *</p>
          <h2 className="text-4xl mt-5">
            Improving lives by developing resources sustainably.
          </h2>
        </Container>
      </div>
    </div>
  );
};

export default BannerTop;
