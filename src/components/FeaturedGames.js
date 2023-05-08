import React from "react";
import "./FeaturedGames.css";
import GameBox from "./GameBox";

function FeaturedGames(props) {
  return (
    <div className="featured-games-container">
      <p className="featured-games-title">{props.featuredHeader}</p>
      <div className="featured-four-games">
        {props.featuredGames?.map((game) => (
          <GameBox
            key={game.id}
            onClick={() => props.onGameClick(game)}
            title={game.title}
            icon={game.icon}
            releaseDate={game.releaseDate}
            score={game.score}
            genres={game.genres}
            platforms={game.platforms}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedGames;
