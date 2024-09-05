import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";

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
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
