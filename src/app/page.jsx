import React from "react";
import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative throught Agency</h1>
        <p className={styles.desc}>
          Ya begini lah namanya juga agency kreatif, cape jir ngedit dalam waktu
          singkat. apalagi nih kalo mereka revisianya banyak banget. dahlah off
          aja
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact Us</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="img brand"
            fill
            className={styles.brands}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" fill alt="hero.gif" className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
