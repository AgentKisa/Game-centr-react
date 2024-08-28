import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={`${styles.navMenu} ${styles.navList}`}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/top-games" className={styles.link}>
          Top Games
        </Link>
        <Link to="/store" className={styles.link}>
          Store
        </Link>
        <Link to="/genres" className={styles.link}>
          Genres
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
