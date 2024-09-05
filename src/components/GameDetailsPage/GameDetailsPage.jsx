import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchGameDetails,
  fetchGameStores,
  fetchStoreDetails,
  fetchGameScreenshots,
} from "../../Api/Api";
import styles from "./GameDetailsPage.module.css";
import { DNA } from "react-loader-spinner";

const GameDetailsPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [stores, setStores] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGameDetails = async () => {
      try {
        const gameData = await fetchGameDetails(id);
        setGame(gameData);

        const screenshotsData = await fetchGameScreenshots(id);
        setScreenshots(screenshotsData.results);

        const storesData = await fetchGameStores(id);

        const storeDetailsPromises = storesData.map(async (store) => {
          const storeDetails = await fetchStoreDetails(store.store_id);
          return {
            ...store,
            storeName: storeDetails.name,
          };
        });

        const storesWithDetails = await Promise.all(storeDetailsPromises);
        setStores(storesWithDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getGameDetails();
  }, [id]);

  if (loading)
    return (
      <div>
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
  if (error) return <div>Error: {error}</div>;
  if (!game) return null;

  return (
    <div className={styles.gameDetailsPage}>
      <h2>{game.name}</h2>
      <img
        src={game.background_image}
        alt={game.name}
        className={styles.gameImage}
      />
      <p>Rating: {game.rating}</p>
      <p>Released: {game.released}</p>
      <p>Description: {game.description_raw}</p>

      <h3>Genres:</h3>
      <ul>
        {game.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>

      <h3>Publishers:</h3>
      <ul>
        {game.publishers.map((publisher) => (
          <li key={publisher.id}>{publisher.name}</li>
        ))}
      </ul>

      <h3>Stores:</h3>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>
            <a href={store.url} target="_blank" rel="noopener noreferrer">
              {store.storeName}
            </a>
          </li>
        ))}
      </ul>

      <h3>Website:</h3>
      <a href={game.website} target="_blank" rel="noopener noreferrer">
        {game.website}
      </a>

      <h3>Screenshots:</h3>
      <div className={styles.screenshotsContainer}>
        {screenshots.map((screenshot) => (
          <img
            key={screenshot.id}
            src={screenshot.image}
            alt={`Screenshot ${screenshot.id}`}
            className={styles.screenshot}
          />
        ))}
      </div>
    </div>
  );
};

export default GameDetailsPage;
