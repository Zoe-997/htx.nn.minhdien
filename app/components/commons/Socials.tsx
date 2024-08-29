import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import Link from "next/link";

interface SocialProps {
  title?: string;
}

const Social = ({ title }: SocialProps) => {
  const dataSocial = [
    {
      label: "Facebook",
      icon: FacebookOutlined,
      href: "https://www.facebook.com/profile.php?id=100091255898329",
    },
    { label: "Instagram", icon: InstagramOutlined, href: "#" },
    {
      label: "Youtube",
      icon: YoutubeOutlined,
      href: "https://www.youtube.com/@HTXMinhDien",
    },
  ];
  return (
    <div>
      {title && <h3>{title}</h3>}
      <ul className="flex flex-wrap gap-7">
        {dataSocial?.map((item: any, index: number) => (
          <li key={index}>
            <Link
              href={item.href}
              title={item.label}
              className="text-[20px]"
              target="_blank"
            >
              <item.icon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
