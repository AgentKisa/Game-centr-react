import React from "react";
import styles from "./GameItem.module.css";

const GameItem = ({ games }) => {
  return (
    <div>
      <div className={styles.gameList}>
        {games.map((game) => (
          <div key={game.id} className={styles.gameItem}>
            <img
              src={game.background_image}
              alt={game.name}
              className={styles.gameImage}
            />
            <h3>{game.name}</h3>
            <p className={styles.released}>Released: {game.released}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameItem;
