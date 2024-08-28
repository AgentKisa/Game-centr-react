import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import GameList from "./components/GameList/GameList";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSlider />
      <GameList />
      {/* <h1>Проверка</h1> */}
    </div>
  );
}

export default App;
