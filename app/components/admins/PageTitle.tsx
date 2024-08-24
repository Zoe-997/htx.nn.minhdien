"use client";
import { Button } from "antd";
import React from "react";

interface PageTitleProps {
  title: string;
  btnLabel?: string;
  count?: string;
  btnAction?: () => void;
  btnIcon?: React.ReactNode;
}
const PageTitle = ({
  title,
  count,
  btnLabel,
  btnAction,
  btnIcon,
}: PageTitleProps) => {
  return (
    <div className="flex flex-wrap items-center mb-5">
      <h1 className="font-bold text-2xl mb-3 md:mb-0 md:flex-1">
        {title} {count && <span>({count})</span>}
      </h1>
      {btnLabel && btnAction && (
        <Button
          type={btnIcon ? "dashed" : "primary"}
          onClick={btnAction}
          title={btnIcon ? btnLabel : ""}
        >
          {btnIcon ? btnIcon : `${btnLabel}`}
        </Button>
      )}
    </div>
  );
};

export default PageTitle;
