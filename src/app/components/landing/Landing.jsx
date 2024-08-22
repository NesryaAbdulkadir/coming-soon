import React from "react";
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>I AM WORKING ON IT </h1>
        <p className={styles.text}>
          Currently crafting my portfolio, prepare for the grand reveal. Check
          back soon for the glimse of my projects.
        </p>
      </div>
    </div>
  );
}
