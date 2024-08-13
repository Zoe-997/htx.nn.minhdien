import Image from "next/image";

interface LogoImageProps {
  src: string;
  alt: string;
}

const LogoImage = ({ src, alt }: LogoImageProps) => {
  return <Image src={src} alt={alt} fill className="object-cover" />;
};

export default LogoImage;
