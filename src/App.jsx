import "./App.css";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import GameList from "./components/GameList/GameList";
import StoreList from "./components/StoreList/StoreList";
import PlatformList from "./components/PlatformList/PlatformList";
import Footer from "./components/Footer/Footer";

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
          path="/store"
          element={
            <>
              <StoreList />
              <Footer />
            </>
          }
        />
        {/* Добавьте другие маршруты по необходимости */}
      </Routes>
    </div>
  );
}

export default App;
