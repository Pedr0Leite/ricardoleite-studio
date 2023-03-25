import React from "react";
import styles from "@/styles/Navbar.module.css";
import useScrollDirection from "@/hooks/useScrollDirection";
import Link from "next/link";
import rlLogo from "../public/RL_Logotype.png";

export default function Navbar() {
  const scrollDirection = useScrollDirection();

  // For the date
  // let chicago_datetime_str = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });


  return (
    <nav
      className={`${styles.navbar} ${
        scrollDirection === "down" ? styles.down : ""
      }`}
    >
      <div className={styles.navLeftBlock}>
        <Link href="/studio">
          <span className={styles.rl_logo}></span>
        </Link>
        <Link href="/projectIndex">
          <span>Index</span>
        </Link>
      </div>
      <div className={styles.navRightBlock}>
        <Link href="/works">
          <span>Works</span>
        </Link>
        <Link href="/about">
          <span>About</span>
        </Link>
      </div>
    </nav>
  );
}
