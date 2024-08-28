import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            GameZone
          </Link>
        </div>
        <Navigation />
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
      </div>
    </div>
  );
};

export default Header;
