"use client";
import { useRouter } from "next/navigation";
import { Button } from "antd";

const Tools = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        type="primary"
        className="hidden md:block rounded-full uppercase text-[12px] px-7"
        onClick={() => router.push("/contact")}
      >
        Contact now
      </Button>
    </div>
  );
};

export default Tools;
