// src/components/PlatformList/PlatformList.jsx
import React, { useEffect, useState } from "react";
import { fetchPlatforms } from "../../Api/Api";
import styles from "./PlatformList.module.css";

const PlatformList = () => {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const getPlatforms = async () => {
      try {
        const data = await fetchPlatforms();
        setPlatforms(data);
      } catch (error) {
        console.error("Failed to fetch platforms", error);
      }
    };

    getPlatforms();
  }, []);

  return (
    <div className={styles.platformList}>
      <h2>Game Platforms</h2>
      <ul>
        {platforms.map((platform) => (
          <li key={platform.id} className={styles.platformItem}>
            <img
              src={platform.image_background}
              alt={platform.name}
              className={styles.platformImage}
            />
            <span>{platform.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformList;
