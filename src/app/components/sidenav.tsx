import styles from '@/styles/Home.module.css';
import Link from 'next/link';



export default function SideNav(){
    return(
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
        
        
      </section>
    </main>
    )
}