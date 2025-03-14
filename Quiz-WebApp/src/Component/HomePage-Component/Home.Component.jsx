import React from "react";
import "./Home.Component.css";

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
    <div className="mainContainer">
      <div className="headerContainer">
        <div className="headerBtnTextContent">
          <h3>Challenge your friends</h3>
          <p>Invite your friends to play quiz game</p>
          <button className="startButton">Start Now</button>
        </div>

        <div className="heading">
          <h1>QUIZZ</h1>
        </div>

        {/* <div className="imgContainer"> */}
          <img className="image" src="images-removebg-preview.png" alt="image not found..." />
        {/* </div> */}
      </div>

      <div className="quizSection">
        <div className="quizHeader">
          <h2>Explore Quizzes</h2>
          <button className="viewAllBtn">VIEW ALL</button>
        </div>

        <div className="quizGrid">
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
}

export default HomePage;
