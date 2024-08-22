import Image from "next/image";
import styles from "./page.module.css";
import Landing from "./components/landing/Landing";

export default function Home() {
  return (
    <div className={styles.main}>
      <Landing />
    </div>
  );
}
