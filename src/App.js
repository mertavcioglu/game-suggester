import React, { useState, useEffect } from "react";
import "./App.css";
import featuredGames from "../src/components/api/featuredGames.json";
import genreCategories from "../src/components/api/genreCategories.json";
import Header from "./components/Header";
import FeaturedGames from "./components/FeaturedGames";
import Genre from "./components/Genre";
import GameCard from "./components/GameCard";
import closeButton from "./images/grey-close.svg";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setShowPopup(true);
  };
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.keyCode === 27) {
        setShowPopup(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="featured-container">
        <FeaturedGames
          featuredHeader="Popular Games"
          featuredGames={featuredGames.popularGames}
          onGameClick={handleGameClick}
        />
        <FeaturedGames
          featuredHeader="New Games"
          featuredGames={featuredGames.newGames}
          onGameClick={handleGameClick}
        />
      </div>
      <Genre
        genreHeader="Action"
        genreCategories={genreCategories.actionGames}
      />
      <Genre
        genreHeader="Strategy"
        genreCategories={genreCategories.strategyGames}
      />
      <Genre
        genreHeader="Rogue-Lite"
        genreCategories={genreCategories.actionGames}
      />
      <Genre
        genreHeader="Card"
        genreCategories={genreCategories.strategyGames}
      />
      {showPopup && (
        <div className="game-popup-container">
          <GameCard {...selectedGame} onClose={() => setShowPopup(false)} />
          <img
            src={closeButton}
            alt="campaign-img"
            className="home-popup-button"
            onClick={() => setShowPopup(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
