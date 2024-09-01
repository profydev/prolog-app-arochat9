import styles from "./footer.module.scss";
import { version } from "package.json";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerBar}>
        <div className={styles.version}>
          <span>Version: {version}</span>
        </div>
        <div className={styles.linksContainer}>
          <a href="#" className={styles.link}>
            Docs
          </a>
          <a href="#" className={styles.link}>
            API
          </a>
          <a href="#" className={styles.link}>
            Help
          </a>
          <a href="#" className={styles.link}>
            Community
          </a>
        </div>
        <div className={styles.logoContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/logo-small.svg" alt="prolog-logo" />
        </div>
      </div>
    </footer>
  );
};
