import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.link}>
          GameZone
        </Link>
      </div>
      <nav className={styles.navMenu}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/top-games" className={styles.link}>
              Top Games
            </Link>
          </li>
          <li>
            <Link to="/overview" className={styles.link}>
              Overview
            </Link>
          </li>
          <li>
            <Link to="/releases" className={styles.link}>
              Releases
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for games..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
