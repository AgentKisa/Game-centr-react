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
