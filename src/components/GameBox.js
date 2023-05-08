import React, { useState } from "react";
import "./GameBox.css";
import GameCard from "./GameCard";

function GameBox(props) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleGameClick = () => {
    props.onClick();
    togglePopup();
  };
  return (
    <div className="game-box-container" onClick={handleGameClick}>
      <p className="game-box-title">{props.title}</p>
      <div className="game-box-content">
        <img src={props.icon} alt="game-box-icon" className="game-box-image" />
        <div className="game-box-content-right">
          <div className="game-box-genre-and-point">
            <ul className="game-box-genres">
              {props.genres?.map((genre) => (
                <li>{genre}</li>
              ))}
            </ul>
            <div className="game-box-point">{props.score}</div>
          </div>
        </div>
      </div>
      <div className="game-box-footer">
        <p className="game-box-footer-item">
          Release Date: {props.releaseDate}
        </p>
        <p className="game-box-footer-item">
          Available on:
          {props.platforms?.map((platform) => (
            <i
              key={platform}
              className={`fa-brands fa-${platform} platform-icon`}
            />
          ))}
        </p>
      </div>
      {showPopup && (
        <div className="game-popup-container">
          <GameCard {...props} />
        </div>
      )}
    </div>
  );
}

export default GameBox;
