import React from "react";
import Links from "./links/Link";
import Link from "next/link";
import styles from "./navbar.module.css";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className="logo">
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
