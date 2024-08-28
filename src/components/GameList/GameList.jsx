import React, { useState, useEffect } from "react";
import { fetchNewGames } from "../../Api/Api";
import styles from "./GameList.module.css";
import GameItem from "../GameItem/GameItem";
import { DNA } from "react-loader-spinner";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGames = async () => {
      setLoading(true);
      setError(null);

      try {
        const gamesData = await fetchNewGames();
        setGames(gamesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getGames();
  }, []);

  if (loading)
    return (
      <div className={styles.loaderContainer}>
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div>
      Новинки
      <GameItem games={games} />
    </div>
  );
};

export default GameList;
