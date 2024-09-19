import axios from "axios";

const API_KEY = "8597150074df42bd91dda3a08177db8e";

export const fetchNewGames = async () => {
  try {
    const response = await axios.get("https://api.rawg.io/api/games", {
      params: {
        key: API_KEY,
        ordering: "-created",
        page: 1,
        page_size: 16,
      },
    });
    console.log("ddd", response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch games");
  }
};

export const fetchStores = async () => {
  try {
    const response = await axios.get("https://api.rawg.io/api/stores", {
      params: {
        key: API_KEY,
      },
    });
    console.log("Stores:", response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch stores");
  }
};

export const fetchPlatforms = async () => {
  try {
    const response = await axios.get("https://api.rawg.io/api/platforms", {
      params: {
        key: API_KEY,
      },
    });
    console.log("Platforms:", response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch platforms");
  }
};

export const fetchTopGames = async (page = 1) => {
  try {
    const response = await axios.get("https://api.rawg.io/api/games", {
      params: {
        key: API_KEY,
        ordering: "-added",
        page: page,
        page_size: 20,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch top games");
  }
};

export const fetchGameDetails = async (id) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
      params: {
        key: API_KEY,
      },
    });
    console.log("hjhg", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch game details");
  }
};

export const fetchGameStores = async (id) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}/stores`,
      {
        params: {
          key: API_KEY,
        },
      }
    );
    console.log("Store data:", response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch game stores");
  }
};

export const fetchStoreDetails = async (id) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/stores/${id}`, {
      params: {
        key: API_KEY,
      },
    });
    console.log("Store details:", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch store details");
  }
};

export const fetchGameScreenshots = async (id) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}/screenshots`,
      {
        params: {
          key: API_KEY,
        },
      }
    );
    console.log("Screenshots data:", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch game screenshots");
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get("https://api.rawg.io/api/genres", {
      params: {
        key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch genres");
  }
};

export const fetchGamesByGenre = async (genreSlug) => {
  try {
    const response = await axios.get("https://api.rawg.io/api/games", {
      params: {
        key: API_KEY,
        genres: genreSlug,
        page_size: 20,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch games for the selected genre");
  }
};

export const fetchGamesByQuery = async (query) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games?key=YOUR_API_KEY&search=${query}`,
    {
      params: {
        key: API_KEY,
      },
    }
  );
  return response.data.results;
};
