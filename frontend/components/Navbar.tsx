import React from "react";
import styles from "@/styles/Navbar.module.css";
import useScrollDirection from "@/hooks/useScrollDirection";
import Link from "next/link";
import dynamic from "next/dynamic";
import rlLogo from "../public/RL_Logotype.png";
import { motion } from "framer-motion";

const Clock = dynamic(() => import("./Clock"), { ssr: false });

export default function Navbar() {
  const scrollDirection = useScrollDirection();

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
        <Clock />
        <Link href="/about">
          <span>About</span>
        </Link>
      </div>
    </nav>
  );
}
