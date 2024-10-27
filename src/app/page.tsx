import styles from '@/styles/Home.module.css';

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.blackPart}>
          <img className={styles.logo} src="maryam-logo.png" alt="" />
          <ul>
            <li className={styles.sidenav}>
              <p>
                <Link href="/">HOME</Link>
              </p>
              <p>
                <Link href="/about">ABOUT</Link>
              </p>
              <p>
                <Link href="/portfolio">PORTFOLIO</Link>
              </p>
              <p>
                <Link href="/contact">CONTACT</Link>
              </p>
            </li>
            <div className={styles.sidenavCopyrights}>
              <p>@2024 Maryam</p>
              <p>Created by Maryam</p>
            </div>
          </ul>
        </div>
        <div className={styles.div2}>
          <div className={styles.flex2}>
            <h3 className={styles.h3}>{`// MARYAM NADEEM`}</h3>
            <h1 className={styles.h1}>
              CREATIVE DESIGNER <br /> AND DEVELOPER
            </h1>
            <Link href="/contact">
            <button className={styles.button}>GET IN TOUCH</button>
            </Link>
          </div>
          <div className={styles.imageContainer}>
            <img src="myportfolio.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
