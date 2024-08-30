// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>GameZone</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#home" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy" className={styles.link}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.social}>
          <a href="#" aria-label="Facebook" className={styles.socialIcon}>
            F
          </a>
          <a href="#" aria-label="Twitter" className={styles.socialIcon}>
            T
          </a>
          <a href="#" aria-label="Instagram" className={styles.socialIcon}>
            I
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
