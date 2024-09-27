import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchGamesByGenre } from "../../Api/Api";
import styles from "./GenrePage.module.css";

const GenrePage = () => {
  const { slug } = useParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setGames([]);
    setPage(1);
    setHasMore(true);
  }, [slug]);

  useEffect(() => {
    const getGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGamesByGenre(slug, page);
        if (data.length > 0) {
          setGames((prevGames) => [...prevGames, ...data]);
          setHasMore(data.length === 20);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        setError("Failed to fetch games");
      } finally {
        setLoading(false);
      }
    };

    getGames();
  }, [slug, page]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.genrePage}>
      <h1 className={styles.title}>Games in {slug} genre</h1>
      <div className={styles.gameList}>
        {games.map((game, index) => (
          <div
            key={game.id}
            className={styles.gameItem + " " + styles.gameItemAnimation}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Link to={`/game/${game.id}`}>
              <img
                src={game.background_image || "/path-to-placeholder.jpg"}
                alt={game.name}
                className={styles.gameImage}
              />
              <h3 className={styles.gameTitle}>{game.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      {hasMore && (
        <button
          className={styles.loadMoreButton}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default GenrePage;
