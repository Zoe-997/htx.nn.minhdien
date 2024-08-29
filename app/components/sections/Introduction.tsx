import { Button } from "antd";
import { ChevronRight } from "lucide-react";

import Container from "@/app/components/commons/Container";
import CoopValue from "@/app/components/sections/CoopValue";
import Tags from "../commons/Tags";

const Introduction = () => {
  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-wrap gap-10">
          <div className="w-full md:w-4/12">
            <div className="mb-2">
              <Tags title="Who we are" />
            </div>

            <h2 className="text-2xl md:text-4xl">
              Asian Agri is a palm oil company that places smallholder
              partnerships at the heart of its day-to-day operations.
            </h2>
          </div>
          <div className="w-full md:flex-1 pl-0 md:pl-[100px]">
            <div>
              <p className="mb-4">
                Asian Agri is one of the leading private companies in Indonesia,
                producing crude palm oil through sustainably-managed
                plantations.
              </p>
              <p className="mb-4">
                Established in 1979, Asian Agri has grown to become one of the
                largest oil palm companies in Asia, managing 100,000 hectares of
                oil palm plantations in North Sumatra, Riau and Jambi, supported
                by a team of more than 22,000 employees.
              </p>
              <p className="mb-4">
                We plant, grow and process oil palms to produce sustainable
                crude palm oil and crude palm kernel oil in technologically
                advanced and energy self-sufficient mills.
              </p>
            </div>
            <Button
              type="primary"
              className="mt-5 rounded-full px-5 py-5 gap-3 group"
            >
              <div className="relative flex items-center">
                <ChevronRight
                  size={15}
                  className="absolute top-[calc(50%+0.5px)] left-[0] opacity-0 -translate-y-[50%] transition-all duration-500 group-hover:opacity-100 group-hover:left-[15px]"
                />
                <span className="bg-white w-[25px] h-[1px] inline-block"></span>
              </div>
              <span>About us</span>
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <CoopValue />
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
