import Link from "next/link";
import FooterTitle from "@/app/components/footers/FooterTitle";

interface FooterLinksProps {
  menu: any;
  title?: string;
}

const FooterLinks = ({ menu, title }: FooterLinksProps) => {
  return (
    <div>
      {title && (
        <div className="mb-5">
          <FooterTitle title={title} />
        </div>
      )}
      <ul>
        {menu?.map((item: any, index: number) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
