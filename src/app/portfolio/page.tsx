import styles from "@/styles/Home.module.css";
import SideNav from "../components/sidenav";

export default function Portfolio() {
  return (
    <main>
      <SideNav />
      <div className={styles.sectionCards}>
        <h2 className={styles.creativePortfolio}>// CREATIVE PORTFOLIO</h2>
        <section className={styles.cardDiv}>
          {/* 1 */}
          <a href="https://mxryxms-nextjs-ecommerce.vercel.app/?vercelToolbarCode=xwed70KPo0Uv4hW">
          <div className={styles.cards}>
            
            <img className="w-[650px] h-80" src="ecommerce.jpg" alt="" />
            <hr className="w-[630px] mt-3 " />
            <div className={styles.pH}>
              <p className={styles.ppH}>eCommerce Website</p>
              <p className={styles.pppH}>NextJS Framework - Responsive</p>
            </div>
          </div>
          </a>
          {/* 2 */}
          <a href="https://hackathon-steel-psi.vercel.app/">
          <div className={styles.cards}>
            
            <img className="w-[650px] h-80" src="prosume.jpg" alt="" />
            <hr className="w-[630px]  mt-3 " />
            <div className={styles.pH}>
              <p className={styles.ppH}>Dynamic Resume Builder</p>
              <p className={styles.pppH}>Core HTML5 & CSS</p>
            </div>
          </div>
          </a>
        </section>
        <div className="mt-10"></div>
        <section className={styles.cardDiv}>
          {/* 1 */}
          <a href="https://portfolio-maryam-nadeem.vercel.app/">
          <div className={styles.cards}>
           
            <img className="w-[650px] h-80" src="portfolio.jpg" alt="" />
            <hr className="w-[630px]  mt-3 " />
            <div className={styles.pH}>
              <p className={styles.ppH}>Personal Portfolio</p>
              <p className={styles.pppH}>Core HTML5 & CSS - Responsive</p>
            </div>
          </div>
          </a>
          {/* 2 */}
          <a href="https://artwall-topaz.vercel.app/">
          <div className={styles.cards}>
           
            <img className="w-[650px] h-80" src="artwall.jpg" alt="" />
            <hr className="w-[630px]  mt-3 " />
            <div className={styles.pH}>
              <p className={styles.ppH}>Simple Artwall</p>
              <p className={styles.pppH}>Core HTML5 & CSS</p>
            </div>
          </div>
          </a>
          {/* 3 */}
          <a className="mt-[40px]" href="">
          <div className={styles.cards}>
            
            <img className="w-[650px] h-80" src="pawsnplay.jpg" alt="" />
            <hr className="w-[630px]  mt-3 " />
            <div className={styles.pH}>
              <p className={styles.ppH}>Funky eCommerce Website</p>
              <p className={styles.pppH}>Tailwind CSS & HTML5</p>
            </div>
          </div>
          </a>
          {/* 6 */}
          <a className="mt-[40px]" href="https://first-next-app-ten-theta.vercel.app/?vercelToolbarCode=HK1_y8oTqzRd04B">
          <div className={styles.cards}>
           
            <img className="w-[650px] h-80" src="travio.jpg" alt="" />
            <hr className="w-[630px]  mt-3 " />
            <div className={styles.pH}>
              <p className={styles.ppH}>Travel Website</p>
              <p className={styles.pppH}>NextJS Framework</p>
            </div>
          </div>
          </a>
        </section>
      </div>
    </main>
  );
}
