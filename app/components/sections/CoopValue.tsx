import Image from "next/image";
import { Quote } from "lucide-react";

const CoopValue = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <h3 className="relative pt-2">
        <span className="absolute top-0 right-0 left-0 bg-[rgb(var(--color-link))] h-[2px] inline-block"></span>
        <span className="text-[rgb(rgb(var(--btn-bg)))] uppercase font-bold">
          Corporate shared value
        </span>
      </h3>
      <div className="md:flex-1 pl-0 md:pl-[200px]">
        <div className="relative overflow-hidden rounded-lg p-10 md:p-20 ml-auto text-[rgb(var(--btn-text))]">
          <div className="bg-[rgb(var(--btn-bg)/80%)] absolute top-0 right-0 bottom-0 left-0 -z-[1]"></div>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/images/value-bg.png`}
            alt="Banner"
            fill
            className="object-cover -z-[2]"
          />
          <Quote size={50} className="rotate-180 opacity-60 mb-8" />
          <blockquote className="mb-5 text-xl">
            We believe that whatever we do must be good for Community, good for
            Country, good for Climate, good for Customer – only then will it be
            good for Company.
          </blockquote>
          <div className="flex items-center gap-1">
            <span className="bg-[rgb(var(--btn-text))] w-[15px] h-[1px] inline-block"></span>
            MDC Chairman & Founder
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoopValue;
