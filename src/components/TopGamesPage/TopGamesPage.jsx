import React, { useEffect, useState } from "react";
import { fetchTopGames } from "../../Api/Api";
import styles from "./TopGamesPage.module.css";
import { DNA } from "react-loader-spinner";
import { Link } from "react-router-dom";

const TopGamesPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getTopGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const newGames = await fetchTopGames(page);

        setGames((prevGames) => [...prevGames, ...newGames]);
        setHasMore(newGames.length > 0);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTopGames();
  }, [page]);

  const loadMoreGames = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.topGamesPage}>
      <h2>Top Games</h2>
      <div className={styles.gameGrid}>
        {games.map((game) => (
          <Link
            to={`/game/${game.id}`}
            key={game.id}
            className={styles.gameItem}
          >
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
          </Link>
        ))}
      </div>
      {loading && (
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
      )}
      {!loading && hasMore && (
        <button onClick={loadMoreGames} className={styles.loadMoreButton}>
          Load More
        </button>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default TopGamesPage;
