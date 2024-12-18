"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";

import Container from "@/app/components/commons/Container";
import CoopValue from "@/app/components/sections/CoopValue";
import Tags from "../commons/Tags";
import ButtonIcon from "../commons/ButtonIcon";

const Introduction = () => {
  const router = useRouter();

  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-wrap gap-10 pb-20">
          <div className="w-full md:w-4/12">
            <div className="mb-2">
              <Tags title="Chúng tôi là ai" />
            </div>

            <h2 className="text-2xl md:text-3xl">
              HTX Minh Diện là một HTX nông nghiệp coi trong phát triển bền vững
              với các sản phẩm nông nghiệp đảm bảo tiêu chuẩn an toàn và thân
              thiện với môi trường.
            </h2>
          </div>
          <div className="w-full md:flex-1 pl-0 md:pl-[100px]">
            <div>
              <p className="mb-4">
                HTX Minh Diện với tiền thân là những hộ nông dân nhỏ lẻ sản xuất
                các sản phẩm nông nghiệp với kinh nghiệm được đúc kết qua nhiều
                năm.
              </p>
              <p className="mb-4">
                Sau nhiều năm gắn bó với trồng trọt lương thực và hoa màu, chúng
                tôi chính thức được thành lập vào năm 2023 với hy vọng phát
                triển mô hình sản xuất kinh doanh từ nhỏ lẻ lên thành quy mô và
                đạt chuẩn.
              </p>
              <p className="mb-4">
                Chúng tôi chuyên trồng trọt và chế biến lương thực, hoa màu theo
                quy trình đã được chuẩn hóa với phương châm phát triển bền vững
                và bảo vệ môi trường.
              </p>
            </div>
            <Button
              type="primary"
              className="mt-5 rounded-full px-5 py-5 gap-3 group"
              onClick={() => router.push("/about")}
            >
              <ButtonIcon />
              <span>About us</span>
            </Button>
          </div>
        </div>

        <div className="pt-20">
          <CoopValue />
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
