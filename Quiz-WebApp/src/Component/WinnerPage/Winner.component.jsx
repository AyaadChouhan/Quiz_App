import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import "./Winner.css";

const WinnerPage = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="winnerheading">
          <h1 className="title">Results</h1>
          <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
          <p className="message">You Won!</p>
        </div>

        <div className="players">
          <div className="player">
            <img
              src="https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-cute-boy-playing-game-illustration-png-image_1824897.jpg"
              alt="Player 2"
              className="player-img"
            />
            <h2 className="name">James</h2>
            <h2 className="score">5 Points</h2>
          </div>
          <div className="player">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZQ6gzbAooHFJdmzuoPcPMxK9ZbMuQMMqQYSaIAUr3lYsr_aMAFY20Rtu22DbL6MxUh8&usqp=CAU"
              alt="Player 1"
              className="player-img"
            />
            <h2 className="name">Kristen</h2>
            <h2 className="score">3 Points</h2>
          </div>
        </div>
        <div className="buttons">
          <button className="btn home">Quit</button>
          <button className="btn play">Play again</button>
        </div>
      </div>
    </div>
  );
};

export default WinnerPage;
