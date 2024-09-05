import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./GenreList.module.css";
import { fetchGenres } from "../../Api/Api";
import { DNA } from "react-loader-spinner";

const GenreList = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const genresData = await fetchGenres();
        setGenres(genresData);
      } catch (error) {
        setError("Failed to fetch genres");
      } finally {
        setLoading(false);
      }
    };

    getGenres();
  }, []);

  if (loading) {
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
    <div className={styles.genreList}>
      {genres.map((genre) => (
        <Link
          key={genre.id}
          to={`/genres/${genre.slug}`}
          className={styles.genreItem}
        >
          <img
            src={genre.image_background || "/path-to-placeholder-image.jpg"}
            alt={genre.name}
            className={styles.genreImage}
          />
          <span className={styles.genreName}>{genre.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default GenreList;
