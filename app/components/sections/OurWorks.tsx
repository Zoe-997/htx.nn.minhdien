"use client";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import Container from "@/app/components/commons/Container";
import { useBlogsStore } from "@/app/apis/stores/blogsStore";
import Image from "next/image";
import Tags from "../commons/Tags";

const OurWorks = () => {
  const [tabActive, setTabActive] = useState<number>(0);
  const [ourWorks, setOurWorks] = useState<any>([]);
  const { getAllBlogs, loading } = useBlogsStore();

  const titleTabs = ourWorks
    ?.map((title: any) => title.tags)
    .flat()
    .filter(
      (value: string, index: number, self: string) =>
        self.indexOf(value) === index
    );

  const contentTab = titleTabs.reduce((acc: any, tag: string) => {
    acc[tag] = ourWorks.filter((item: any) => item.tags.includes(tag));
    return acc;
  }, {});

  const contentTabArray = Object.keys(contentTab).map((title) => ({
    title,
    content: contentTab[title][0],
  }));

  useEffect(() => {
    const onSuccess = (res: any) => {
      if (res) setOurWorks(res.data);
    };
    getAllBlogs("collection=Our works", onSuccess);
  }, [getAllBlogs]);

  return (
    <div>
      <Container>
        <div className="mb-2">
          <Tags title="What we do" />
        </div>
        <div className="flex flex-wrap gap-5">
          <ul>
            {contentTabArray?.map((item: any, index: number) => (
              <li
                key={index}
                className={`py-5 cursor-pointer font-bold${
                  tabActive === index ? " text-[rgb(var(--color-link))]" : ""
                }`}
                onClick={() => setTabActive(index)}
              >
                {item?.title}
              </li>
            ))}
          </ul>

          <ul className="flex-1 pl-0 md:pl-[100px]">
            {contentTabArray?.map((item: any, index: number) => (
              <li
                key={index}
                className={`${tabActive === index ? "block" : "hidden"}`}
              >
                <h2 className="mb-8 text-3xl font-bold">
                  {item?.content?.name}
                </h2>
                <div className="flex flex-wrap gap-10">
                  <div className="flex-1">
                    <div className="mb-10">{item?.content?.description}</div>
                    <a href="#" className="inline-block group">
                      <span className="flex flex-wrap gap-2 items-center">
                        <span className="relative flex items-center w-[25px]">
                          <ChevronRight
                            size={15}
                            className="absolute top-[calc(50%+0.5px)] left-[0] opacity-0 -translate-y-[50%] transition-all duration-500 group-hover:opacity-100 group-hover:left-[15px]"
                          />
                          <span className="bg-[rgb(var(--foreground-rgb))] w-full h-[1px] inline-block group-hover:bg-[rgb(var(--color-link))]"></span>
                        </span>
                        <strong>Learn more</strong>
                      </span>
                    </a>
                  </div>

                  <div className="relative w-[450px] h-[300px] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={item?.content?.image}
                      alt={item?.content?.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default OurWorks;
