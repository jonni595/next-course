"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  HiHome,
  HiUser,
  HiQuestionMarkCircle,
  HiBookmark,
} from "react-icons/hi";
import { Links } from "@/app/lib/definitions";

const links: Links[] = [
  {
    name: "Home",
    href: "/",
    icon: HiHome,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: HiUser,
  },
  {
    name: "Help",
    href: "/help",
    icon: HiQuestionMarkCircle,
  },
  {
    name: "Posts",
    href: "/posts",
    icon: HiBookmark,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex gap-2 items-center p-2", {
              "text-white": pathname === link.href,
              "text-gray-500": pathname !== link.href,
            })}
          >
            <LinkIcon className="w-6 h-6 block md:hidden" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
