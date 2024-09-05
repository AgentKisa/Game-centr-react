import React, { useEffect, useState } from "react";
import { fetchStores } from "../../Api/Api";
import { DNA } from "react-loader-spinner";
import { Link, useLocation } from "react-router-dom";
import defaultStyles from "./StoreList.module.css";
import pageStyles from "./StoreListPage.module.css";

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const styles = location.pathname === "/store" ? pageStyles : defaultStyles;

  useEffect(() => {
    const getStores = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchStores();
        setStores(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getStores();
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
    <div className={styles.storeList}>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>
            <Link to={`/store/${store.id}`} className={styles.link}>
              <img
                src={store.image_background}
                alt={store.name}
                className={styles.storeImage}
              />
              <span>{store.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;
