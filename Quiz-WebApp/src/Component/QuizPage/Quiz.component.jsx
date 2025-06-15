/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import quizQuestions from "./mock";
import { useParams, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const Quiz = () => {
  const navigate = useNavigate();
  const [isStarted, setIsStarted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const Category = useParams();
  const selectedCategory = Category.category;
  const allQuestions = quizQuestions[selectedCategory];

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [usedQuestionIndices, setUsedQuestionIndices] = useState([]);
  const [timer, setTimer] = useState(30);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [shake, setShake] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Get 5 random unique questions
  const getRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  const [questions, setQuestions] = useState([]);

  // Category icons mapping
  const categoryIcons = {
    Math: "🧮",
    Sports: "⚽",
    Chemistry: "🧪",
    Economics: "📈",
    Astronomy: "🔭",
    Architecture: "🏛️",
  };

  // Timer effect
  useEffect(() => {
    if (isStarted && timer > 0 && !quizCompleted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
        if (timer <= 5) setPulse(true);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !selectedOption && !quizCompleted) {
      setTimeout(handleNextQuestion, 1000);
    }
  }, [timer, quizCompleted, isStarted]);

  // Handle option selection
  const handleOptionSelect = (option) => {
    if (selectedOption || quizCompleted) return;

    setSelectedOption(option);
    const correct = option === questions[currentQuestionIndex].answer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
      if (score + 1 === 5) {
        setShowConfetti(true);
      }
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    setTimeout(handleNextQuestion, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setTimer(30);
      setPulse(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleStartQuiz = () => {
    const randomQuestions = getRandomQuestions();
    setQuestions(randomQuestions);
    setIsStarted(true);
  };

  const restartQuiz = () => {
    const randomQuestions = getRandomQuestions();
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setTimer(30);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
    setIsCorrect(null);
    setShowConfetti(false);
  };

  const goToHome = () => {
    navigate("/home");
  };

  if (quizCompleted || score === 5) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-purple-900 p-4 relative overflow-hidden">
        {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

        <div className="relative z-10 w-full max-w-md bg-gradient-to-br from-gray-700/90 to-purple-800/90 rounded-xl shadow-2xl overflow-hidden border border-white/10 p-8 text-center backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 mb-6 animate-pulse">
            Quiz Completed!
          </h1>

          <div className="text-8xl mb-6 animate-bounce">
            {score === 5 ? "🏆" : score > 2 ? "🎯" : "📚"}
          </div>

          <div className="relative mb-8">
            <div
              className="radial-progress text-purple-400"
              style={{
                "--value": (score / 5) * 100,
                "--size": "12rem",
                "--thickness": "12px",
              }}
            >
              <span className="text-3xl font-bold text-white">{score}/5</span>
            </div>
            {score === 5 && (
              <span className="text-xs absolute -bottom-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full animate-pulse">
                Perfect Score!
              </span>
            )}
          </div>

          <p className="text-xl mb-8 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
            {score === 5
              ? "You're a genius! Flawless victory!"
              : score > 2
              ? "Impressive! You know your stuff!"
              : "Good effort! Keep learning!"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
            >
              Try Again
            </button>
            <button
              onClick={goToHome}
              className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-xl shadow-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-105"
            >
              Choose Another Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isStarted || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-purple-900 p-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

        <div className="relative z-10 w-full max-w-md bg-gradient-to-br from-gray-700/90 to-purple-800/90 rounded-xl shadow-2xl overflow-hidden border border-white/10 p-8 text-center backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 mb-6">
            {selectedCategory} Quiz
          </h1>

          <div className="text-8xl mb-6 animate-bounce">
            {categoryIcons[selectedCategory] || "❓"}
          </div>

          <div className="mb-8">
            <p className="text-xl text-white/80 mb-4">5 Random Questions</p>
            <p className="text-lg text-white/60">30 seconds per question</p>
          </div>

          <button
            onClick={handleStartQuiz}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 text-xl"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  const current = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-purple-900 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      <div
        className={`relative z-10 w-full max-w-2xl bg-gradient-to-br from-gray-700/90 to-purple-800/90 rounded-xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm transition-all duration-300 ${
          shake ? "animate-shake" : ""
        }`}
      >
        {/* Progress Bar */}
        <div className="h-3 bg-white/10 relative">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
            style={{
              width: `${((currentQuestionIndex + 1) / 5) * 100}%`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30"></div>
        </div>

        {/* Quiz Content */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <span className="text-3xl mr-3">
                {categoryIcons[selectedCategory] || "❓"}
              </span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                {selectedCategory}
              </span>
            </div>
            <div className="relative">
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold ${
                  timer <= 5
                    ? "text-red-400 border-red-500/40 bg-red-500/20 animate-pulse"
                    : "text-white border-white/20 bg-white/10"
                } border-2 transition-all duration-300`}
              >
                {timer}
              </div>
              {timer > 0 && (
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-white animate-spin opacity-70"></div>
              )}
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
            {current.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {current.options.map((option, idx) => {
              let buttonStyle = "bg-white/10 hover:bg-white/20 text-white/90";
              let borderStyle = "border-transparent";

              if (selectedOption) {
                if (option === current.answer) {
                  buttonStyle = "bg-green-500/90 text-white";
                  borderStyle = "border-green-400";
                } else if (
                  option === selectedOption &&
                  option !== current.answer
                ) {
                  buttonStyle = "bg-red-500/90 text-white";
                  borderStyle = "border-red-400";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null || timer === 0}
                  className={`p-5 rounded-xl text-left transition-all duration-300 ${buttonStyle} border-2 ${borderStyle} ${
                    !selectedOption && timer > 0
                      ? "cursor-pointer hover:scale-[1.02] hover:shadow-md"
                      : "cursor-not-allowed"
                  } ${
                    selectedOption === option
                      ? isCorrect
                        ? "animate-pop"
                        : "animate-wiggle"
                      : ""
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3 font-bold">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center text-white/70">
            <div>Question {currentQuestionIndex + 1} of 5</div>
            <div className="flex items-center">
              <span className="mr-2">Score:</span>
              <span className="font-bold text-white">{score}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20%,
          60% {
            transform: translateX(-5px);
          }
          40%,
          80% {
            transform: translateX(5px);
          }
        }

        @keyframes pop {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-2deg);
          }
          75% {
            transform: rotate(2deg);
          }
        }

        .animate-pop {
          animation: pop 0.3s ease;
        }

        .animate-wiggle {
          animation: wiggle 0.3s ease;
        }

        .radial-progress {
          --value: 0;
          --size: 6rem;
          --thickness: 4px;
        }
      `}</style>
    </div>
  );
};

export default Quiz;
