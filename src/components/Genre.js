import React from "react";
import "./Genre.css";
import GameBox from "./GameBox";

function Genre(props) {
  return (
    <div className="genre-container">
      <p className="genre-title">{props.genreHeader} Games</p>
      <div className="genre-box">
        {props.genreCategories?.map((game) => (
          <GameBox
            key={game.id}
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

export default Genre;
