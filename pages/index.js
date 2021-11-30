import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlapGrid}>
        <Image
          src={"/guy.png"}
          width={1000}
          height={1000}
          layout="responsive"
        />
        <Image
          src={"/smoke.png"}
          width={1000}
          height={1000}
          layout="responsive"
        />
      </div>
    </div>
  );
}
