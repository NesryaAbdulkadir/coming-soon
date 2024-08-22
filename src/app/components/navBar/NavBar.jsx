import React from "react";
import styles from "./navBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/NavLogoLight.png" alt="logo" width={50} height={50} />
        <h1 className={styles.name}>Nesrya Abdulkadir</h1>
      </div>
    </div>
  );
}
