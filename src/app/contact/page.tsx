import styles from "@/styles/Home.module.css";
import SideNav from "../components/sidenav";
import { MapPin } from "lucide";

export default function Contact() {
  return (
    <main>
      <SideNav />
      <h2 className={styles.contactUs}>// GET IN TOUCH</h2>
      <div className={styles.nCardContacts}>
        <div className={styles.contactCards}>
          <div className={styles.boxesContact}>
            <img className={styles.logoContact} src="mappin.png" alt="" />
            <p className={styles.contactCardText}>
              Gadap Town, Karachi, Pakistan
            </p>
          </div>
          <div className={styles.boxesContact}>
            <img className={styles.logoContact} src="contact.png" alt="" />
            <p className={styles.contactCardTextFocus}>+92 3341283432</p>
          </div>
          <div className={styles.boxesContact}>
            <img className={styles.logoContact} src="mail.png" alt="" />
            <p className={styles.contactCardTextFocus}>maryambuttxx@gmail.com</p>
          </div>
          <div className={styles.boxesContact}>
            <img className={styles.logoContact} src="message.png" alt="" />
            <ul className="flex gap-x-3">
              <li className={styles.logoMessageMe}>
                <img className={styles.icon1} src="facebook.png" alt="" />
                <img className={styles.icon2} src="facebookBlack.png" alt="" />
              </li>
              <li className={styles.logoMessageMe}>
                <img className={styles.icon1} src="discord.png" alt="" />
                <img className={styles.icon2} src="discordBlack.png" alt="" />
              </li>
              <li className={styles.logoMessageMe}>
                <img className={styles.icon1} src="linkedin.png" alt="" />
                <img className={styles.icon2} src="linkedinBlack.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Form */}

      <form action="submit" className={styles.form}>
        <div className="flex justify-around">
        <div>
          <div>
            <input
              type="input"
              placeholder="Name"
              className={styles.formFields}
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              className={styles.formFields}
            />
          </div>
        </div>
        <div>
          <div>
            <input
              type="input"
              placeholder="Phone"
              className={styles.formFields}
            />
          </div>
          <div className="mt-4">
            <input
              type="input"
              placeholder="Subject"
              className={styles.formFields}
            />
          </div>
        </div>
        </div>
        <div>
        <div>
            <input
              type="text"
              placeholder="Phone"
              className={styles.formFieldMessage}
            />
          </div>
        </div>
        <button className={styles.buttonsm}>SEND MESSAGE</button>
      </form>
    </main>
  );
}
