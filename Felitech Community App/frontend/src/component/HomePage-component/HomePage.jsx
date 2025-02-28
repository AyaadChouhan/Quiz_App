import React from "react";
import "./Home.css";

function HomePage() {
    const quizzes = [
        { name: "Sports", icon: "⚽" },
        { name: "Chemistry", icon: "🧪" },
        { name: "Economics", icon: "📊" },
        { name: "Astronomy", icon: "🔭" },
        { name: "Math", icon: "🔢" },
        { name: "Architecture", icon: "🏛️" },
      ];
  return (
    <div className="container">
      <div className="header">
        <h1>QUIZZ</h1>
        <p>Challenge your friends</p>
        <button className="start-button">Start Now</button>
      </div>
      <div className="quiz-section">
        <div className="quiz-header">
          <h2>Explore Quizzes</h2>
          <button className="view-all">VIEW ALL</button>
        </div>
        <div className="quiz-grid">
          {quizzes.map((quiz, index) => (
            <div key={index} className="quiz-card">
              <span className="quiz-icon">{quiz.icon}</span>
              <p className="quiz-name">{quiz.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
