import "./App.css";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import GameList from "./components/GameList/GameList";
import StoreList from "./components/StoreList/StoreList";
import PlatformList from "./components/PlatformList/PlatformList";
import Footer from "./components/Footer/Footer";
import TopGamesPage from "./components/TopGamesPage/TopGamesPage";
import GameDetailsPage from "./components/GameDetailsPage/GameDetailsPage";
import StoreDetailsPage from "./components/StoreDetailsPage/StoreDetailsPage";
import GenreList from "./components/GenreList/GenreList";
import GenrePage from "./components/GenrePage/GenrePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerSlider />
              <GameList />
              <StoreList />
              {/* <PlatformList /> */}
              <Footer />
            </>
          }
        />
        <Route
          path="/game/:id"
          element={
            <>
              <GameDetailsPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/store"
          element={
            <>
              <StoreList />
              <Footer />
            </>
          }
        />
        <Route
          path="/store/:id"
          element={
            <>
              <StoreDetailsPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/top-games"
          element={
            <>
              <TopGamesPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/genres"
          element={
            <>
              <GenreList />
              <Footer />
            </>
          }
        />
        <Route
          path="/genres/:slug"
          element={
            <>
              <GenrePage />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
