import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { fetchGamesByQuery } from "../../Api/Api";
import styles from "./SearchResultsPage.module.css";

const SearchResultsPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const searchGames = async () => {
      try {
        setLoading(true);
        const gamesData = await fetchGamesByQuery(query);
        setGames(gamesData);
      } catch (error) {
        setError("Failed to fetch games.");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      searchGames();
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.searchResults}>
      <h1 className={styles.title}>Results search: {query}</h1>
      <div className={styles.gameList}>
        {games.length === 0 ? (
          <p>No games found.</p>
        ) : (
          games.map((game) => (
            <div key={game.id} className={styles.gameItem}>
              <Link to={`/game/${game.id}`}>
                <img
                  src={game.background_image || "/path-to-placeholder.jpg"}
                  alt={game.name}
                  className={styles.gameImage}
                />
                <h3 className={styles.gameTitle}>{game.name}</h3>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
