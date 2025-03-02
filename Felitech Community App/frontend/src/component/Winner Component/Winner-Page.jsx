import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import "./winner-Page.css";

const WinnerPage = () => {
  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Results</h2>

        {/* Golden Trophy Icon */}
        <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />

        <p className="message">You Won!</p>
        <div className="players">
          <div className="player">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="James" className="avatar" />
            <p className="name">James</p>
            <p className="score">5 Points</p>
          </div>
          <div className="player">
            <img src="https://img.freepik.com/photos-premium/gros-plan-portrait-homme-barbu-sombre-serieux-coiffure-elegante-posant_160360-855.jpg?w=360" alt="Kristen" className="avatar" />
            <p className="name">Kristen</p>
            <p className="score">3 Points</p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn home">Homepage</button>
          <button className="btn play">Play again</button>
        </div>
      </div>
    </div>
  );
};

export default WinnerPage;
