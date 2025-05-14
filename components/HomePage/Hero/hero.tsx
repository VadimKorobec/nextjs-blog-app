import Image from "next/image";

import Cat from "../../../public/images/site/cat.webp";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src={Cat}
          alt="An image showing Cat"
          width={200}
          height={200}
          priority={true}
        />
      </div>
      <h1>Hi, I'm a Cat</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
};

export default Hero;
