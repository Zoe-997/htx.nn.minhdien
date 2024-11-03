import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../commons/Container";
import Social from "../commons/Socials";

const Contact = () => {
  const imageDefault = `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/contact.jpg`;
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 gap-10">
          <div className="relative pb-[48%] rounded-lg overflow-hidden">
            <Image
              src={imageDefault}
              alt="Contact us"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-5">
              Chúng tôi muốn nghe ý kiến ​​từ bạn!
            </h2>
            <div>
              <h3 className="md:text-xl mb-2 font-semibold">
                Hãy gọi cho chúng tôi.
              </h3>
              <div className="mb-7">
                <p className="mb-1">
                  Chúng tôi có đội ngũ nhân viên được đào tạo đầy đủ sẵn sàng
                  trao đổi với bạn về dự án của bạn và trả lời các câu hỏi của
                  bạn về bất kỳ vấn đề cụ thể nào liên quan, hãy gọi cho họ theo
                  số:
                </p>
                <p>
                  <Link href="tel: (+84)982892993">(+84) 982 892 993</Link>
                  <span className="ml-3">hoặc</span>
                </p>
                <p>
                  <Link href="tel: (+84)833251098">(+84) 833 251 098</Link>
                </p>
              </div>

              <div className="mb-7">
                <h3 className="md:text-xl font-semibold mb-2">
                  Hãy ghé thăm văn phòng và nông trường của chúng tôi.
                </h3>
                <p>
                  (Văn phòng và nông trường mở cửa từ <strong>Thứ Hai</strong>{" "}
                  đến <strong>Thứ Bảy</strong>, từ <strong>8 giờ sáng</strong>{" "}
                  đến <strong>6 giờ chiều</strong>).
                </p>
              </div>

              <div>
                <h3 className="md:text-xl mb-2 font-semibold">
                  Theo dõi chúng tôi trên các trang mạng xã hội để nắm được
                  nhiều thông tin hơn:
                </h3>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
