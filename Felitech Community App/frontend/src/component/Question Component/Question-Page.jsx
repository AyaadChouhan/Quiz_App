import React, { useState, useEffect } from "react";
import './Question-Page.css'

const Quiz = () => {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    return (
        <div className="quiz-container full-screen">
            <div className="header">
                <div className="player-container">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZQ6gzbAooHFJdmzuoPcPMxK9ZbMuQMMqQYSaIAUr3lYsr_aMAFY20Rtu22DbL6MxUh8&usqp=CAU"
                        alt="Player 1"
                        className="player-img"
                    />
                    <span className="player-name">Adnan</span>
                </div>

                <span className="vs">VS</span>

                <div className="player-container">
                    <img
                        src="https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-cute-boy-playing-game-illustration-png-image_1824897.jpg"
                        alt="Player 2"
                        className="player-img"
                    />
                    <span className="player-name">Ayad</span>
                </div>
            </div>

            <div className="question-section">
                <div className="question-count">
                    <span>Question 1 of 7</span>
                    <div className={`timer ${timer === 0 ? "stop-rotation" : ""}`}>{timer}</div>
                </div>
                <h2 className="question-text">
                    What is the largest city by population in the world?
                </h2>
                <div className="answer-options">
                    <button className="option">San Francisco</button>
                    <button className="option selected">Tokyo</button>
                    <button className="option">Berlin</button>
                    <button className="option">Lisbon</button>
                </div>
                <button className="next-btn">Next</button>
            </div>
        </div>
    );
};

export default Quiz;