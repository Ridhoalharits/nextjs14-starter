"use client";
import React from "react";
import style from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${style.container} ${pathName === item.path && style.active}`}
      href={item.path}
      key={item.title}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
