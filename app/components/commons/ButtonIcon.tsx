import React from "react";
import { ChevronRight } from "lucide-react";

const ButtonIcon = () => {
  return (
    <div className="relative flex items-center">
      <ChevronRight
        size={15}
        className="absolute top-[calc(50%+0.5px)] left-[0] opacity-0 -translate-y-[50%] transition-all duration-500 group-hover:opacity-100 group-hover:left-[15px]"
      />
      <span className="bg-white w-[25px] h-[1px] inline-block"></span>
    </div>
  );
};

export default ButtonIcon;
