import React from "react";
import styles from "./GameItem.module.css";
import { Link } from "react-router-dom";

const GameItem = ({ games }) => {
  return (
    <div className={styles.gameList}>
      {games.map((game) => (
        <Link key={game.id} to={`/game/${game.id}`} className={styles.gameLink}>
          <div className={styles.gameItem}>
            <img
              src={game.background_image}
              alt={game.name}
              className={styles.gameImage}
            />
            <h3>{game.name}</h3>
            <p className={styles.released}>Released: {game.released}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GameItem;
