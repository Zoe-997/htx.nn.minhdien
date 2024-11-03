"use client";
import Link from "next/link";

import { MenuItem } from "@/app/types";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const items = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
    { title: "Our work", path: "/our-work" },
    { title: "Contact", path: "/contact" },
    { title: "Blogs", path: "/blogs                  " },
  ];

  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center gap-10 font-semibold">
        {items.map((item: MenuItem, index: number) => (
          <li
            key={index}
            className={`text-lg ${
              pathname === item.path
                ? "text-[rgb(var(--color-link)_100%)]"
                : "text-[rgb(var(--menu-color)_100%)]"
            }`}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
