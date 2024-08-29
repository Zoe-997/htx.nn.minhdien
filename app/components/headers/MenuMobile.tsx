import Link from "next/link";

interface MenuMobileProps {
  items: any;
  openMenu: (value: boolean) => void;
}

const MenuMobile = ({ items, openMenu }: MenuMobileProps) => {
  return (
    <nav>
      <ul>
        {items?.map((item: any, index: number) => (
          <li key={index} className="py-2">
            <Link href={item.path} onClick={() => openMenu(false)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuMobile;
