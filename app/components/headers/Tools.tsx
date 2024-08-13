"use client";
import { useRouter } from "next/navigation";
import { Button } from "antd";

const Tools = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        type="primary"
        className="rounded-full uppercase text-[12px] px-7 py-5"
        onClick={() => router.push("/contact")}
      >
        Contact now
      </Button>
    </div>
  );
};

export default Tools;
