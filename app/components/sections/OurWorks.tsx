"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

import Container from "@/app/components/commons/Container";

const OurWorks = () => {
  const [tabActive, setTabActive] = useState<string>("edgdfg");

  const tabTitle = [
    { id: "edgdfg", name: "Smallholder Partnerships" },
    { id: "fhfghg", name: "Research and Development" },
    { id: "hjfghgf", name: "Topaz Seeds" },
    { id: "fjhhy", name: "Sustainability Commitment" },
  ];
  const tabContent = [
    {
      id: "edgdfg",
      description: "Smallholder Partnerships gbsdgggggggggggggggggggggggg",
    },
    { id: "fhfghg", description: "Research and Development" },
    { id: "hjfghgf", description: "Topaz Seeds" },
    { id: "fjhhy", description: "Sustainability Commitment" },
  ];

  return (
    <div>
      <Container>
        <p className="bg-[green] text-white inline-block px-3 rounded-sm mb-2">
          What we do
        </p>
        <div className="flex flex-wrap gap-5">
          <ul>
            {tabTitle?.map((title: any) => (
              <li
                key={title.id}
                className="py-5 cursor-pointer"
                onClick={() => setTabActive(title.id)}
              >
                {title.name}
              </li>
            ))}
          </ul>

          <ul className="flex-1 pl-0 md:pl-[100px]">
            {tabContent?.map((content: any) => (
              <li
                key={content.id}
                className={`${tabActive === content.id ? "block" : "hidden"}`}
              >
                <div className="mb-5">{content.description}</div>
                <a href="#" className="flex items-center gap-3">
                  <span className="relative flex items-center w-[25px]">
                    <ChevronRight
                      size={15}
                      className="absolute top-[calc(50%+0.5px)] left-[0] opacity-0 -translate-y-[50%] transition-all duration-500 group-hover:opacity-100 group-hover:left-[15px]"
                    />
                    <span className="bg-[rgb(var(--foreground-rgb))] w-full h-[1px] inline-block"></span>
                  </span>
                  <span>Learn more</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default OurWorks;
