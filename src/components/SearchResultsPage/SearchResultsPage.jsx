import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { fetchGamesByQuery } from "../../Api/Api";
import styles from "./SearchResultsPage.module.css";
import { DNA } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";

const SearchResultsPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const searchGames = async () => {
      try {
        setLoading(true);
        setError(null);
        const gamesData = await fetchGamesByQuery(query, page);
        setGames((prevGames) => [...prevGames, ...gamesData]);
        setHasMore(gamesData.length === 20);
      } catch (error) {
        setError("Failed to fetch games.");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      searchGames();
    }
  }, [query, page]);

  // Используйте этот useEffect для показа сообщения, если игр не найдено
  useEffect(() => {
    if (games.length === 0 && !loading && query) {
      toast.error("No games found");
    }
  }, [games, loading, query]);

  useEffect(() => {
    setGames([]);
    setPage(1);
    setHasMore(true);
  }, [query]);

  const loadMoreGames = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (loading && page === 1) {
    return (
      <div className={styles.loader}>
        <DNA
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.searchResults}>
      <Toaster />
      <h1 className={styles.title}>Search: {query}</h1>
      <div className={styles.gameList}>
        {games.map((game, index) => (
          <div
            key={game.id}
            className={styles.gameItemAnimation}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.gameItem}>
              <Link to={`/game/${game.id}`}>
                <img
                  src={game.background_image || "/path-to-placeholder.jpg"}
                  alt={game.name}
                  className={styles.gameImage}
                />
                <h3 className={styles.gameTitle}>{game.name}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <button className={styles.loadMoreButton} onClick={loadMoreGames}>
          Load More
        </button>
      )}
    </div>
  );
};

export default SearchResultsPage;
