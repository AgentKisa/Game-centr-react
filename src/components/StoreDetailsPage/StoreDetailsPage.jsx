import React, { useEffect, useState } from "react";
import { fetchStoreDetails } from "../../Api/Api";
import { useParams } from "react-router-dom";
import styles from "./StoreDetailsPage.module.css";

const StoreDetailsPage = () => {
  const { id } = useParams();
  const [storeDetails, setStoreDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStoreDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchStoreDetails(id);
        // Очищаем текст описания от HTML тегов
        data.description = removeHtmlTags(data.description);
        setStoreDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getStoreDetails();
  }, [id]);

  if (loading) return <div className={styles.loader}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.storeDetailsPage}>
      <h2 className={styles.title}>{storeDetails.name}</h2>
      <img
        src={storeDetails.image_background}
        alt={storeDetails.name}
        className={styles.image}
      />
      <p className={styles.description}>{storeDetails.description}</p>
      <a
        href={`https://${storeDetails.domain}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Visit Store
      </a>
    </div>
  );
};

const removeHtmlTags = (text) => {
  return text.replace(/<\/?[^>]+(>|$)/g, "");
};

export default StoreDetailsPage;
