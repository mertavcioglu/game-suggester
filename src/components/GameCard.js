import React from "react";
import "./GameCard.css";

function GameCard(props) {
  return (
    <div className="game-card-container">
      <button onClick={props.onClose}>Close</button>
      <h2>{props.title}</h2>
      <img src={props.icon} alt="game-popup-icon" />
      <p>{props.releaseDate}</p>
      <p>{props.score}</p>
      {/* any other game details */}
    </div>
  );
}

export default GameCard;
