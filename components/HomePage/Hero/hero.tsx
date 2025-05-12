import Image from 'next/image';

import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
          <div className={styles.image}>
              <Image src={} alt='An image showing Cat' width={} height={}/>
          </div>
          <h1>Hi, I'm a Cat</h1>
          <p>I blog about web development - especially frontend frameworks like Angular or React</p>
    </section>
  );
};

export default Hero;
