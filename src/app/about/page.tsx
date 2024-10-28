import SideNav from "../components/sidenav";
import styles from "@/styles/Home.module.css";

export default function About() {
  return (
    <div>
      <main className={styles.mainAbout1}>
        <SideNav />
        <div className={styles.section}>
          <div className={styles.section1}>
            <h2 className={styles.h2}>{`// BIOGRAPHY`}</h2>
            <p>
              Hi, my name is Maryam Nadeem, a dedicated web developer with hands-on experience in TypeScript, core HTML, CSS, TailwindCSS and Next.js. With over 10 projects under my belt, I’m constantly driven to expand my knowledge and skill set. I'm a quick learner who enjoys taking on new challenges in web development. I’m eager to keep building my skills and contribute useful solutions as the field grows.
            </p>
            <a href="resume.pdf" download>
            <button className={styles.button}>DOWNLOAD CV</button>
            </a>
          </div>

          <div className={styles.section2}>
            <h2 className={styles.h2}>{`// PERSONAL DETAILS`}</h2>
            <div className={styles.flex}>
              <div className="font-semibold">
                <p>Name:</p>
                <p>Address:</p>
                <p>Study:</p>
                <p>Degree:</p>
                <p>Phone:</p>
                <p>Mail:</p>
                <p>Freelance:</p>
              </div>
              <div>
                <p>Maryam Nadeem</p>
                <p>Karachi, Pakistan</p>
                <p>Hamdard University</p>
                <p>{`Bachelor's`} Of Computer Science</p>
                <p>+92 3341283432</p>
                <p>maryambuttxx@gmail.com</p>
                <p>Available</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <hr />
      <main>
        <div className="flex justify-around">
          <div className={styles.section3}>
            <h2 className={styles.h2}>{`// EDUCATION`}</h2>
            <div className={styles.edu}>
              <div>
                <h5 className={styles.h5}>Hamdard University</h5>
                <p>{`Bachelor's Degree`}</p>
              </div>
              <div className={styles.year}>
                <p>2021-2025</p>
              </div>
            </div>
            <hr />
            <div className={styles.edu}>
              <div>
                <h5 className={styles.h5}>GIAIC - Governors IT Initiative</h5>
                <p>{`WEB 3.0, Metaverse & AI`}</p>
              </div>

              <div className={styles.year}>
                <p>2024-2026</p>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <h2 className={styles.h2}>{`// EXPERIENCE`}</h2>
            <div className={styles.edu}>
              <div>
                <h5 className={styles.h5}>Sales Executive</h5>
                <p>{`Lead Generation`}</p>
              </div>
              <div className={styles.year}>
                <p>2023-now</p>
              </div>
            </div>
            <hr />
            <div className={styles.edu}>
              <div>
                <h5 className={styles.h5}>Encryptix</h5>
                <p>{`Web Development Intern`}</p>
              </div>

              <div className={styles.year}>
                <p>June - July/24</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <hr />
      <main>
        <div className={styles.section}>
          <div className={styles.section4}>
            <h2 className={styles.h2}>{`// FUN FACTS`}</h2>
            <div className="flex gap-x-20">
                <div className={styles.boxes}>
                    <h2 className={styles.h}>10+</h2>
                    <p>Projects Completed</p>
                </div>
                <div className={styles.boxes}>
                    <h2 className={styles.h}>5k+</h2>
                    <p>Lines of Code</p>
                </div>
                <div className={styles.boxes}>
                    <h2 className={styles.h}>50+</h2>
                    <p>Hours of Streching</p>
                </div>
                <div className={styles.boxes}>
                    <h2 className={styles.h}>100%</h2>
                    <p>Satisfaction Guarantee</p>
                </div>
            </div>
            
          </div>
        </div>
      </main>

    </div>
  );
}
