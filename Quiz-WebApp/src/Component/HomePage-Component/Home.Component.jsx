/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const quizzes = [
    {
      name: "Sports",
      icon: "⚽",
      bg: "bg-gradient-to-br from-purple-900 to-pink-700",
    },
    {
      name: "Chemistry",
      icon: "🧪",
      bg: "bg-gradient-to-br from-blue-900 to-cyan-600",
    },
    {
      name: "Economics",
      icon: "📊",
      bg: "bg-gradient-to-br from-green-900 to-emerald-500",
    },
    {
      name: "Astronomy",
      icon: "🔭",
      bg: "bg-gradient-to-br from-indigo-900 to-violet-600",
    },
    {
      name: "Math",
      icon: "🔢",
      bg: "bg-gradient-to-br from-amber-900 to-yellow-500",
    },
    {
      name: "Architecture",
      icon: "🏛️",
      bg: "bg-gradient-to-br from-stone-800 to-stone-500",
    },
  ];

  const handleQuizSelect = (quizName) => {
    navigate(`/quiz/${quizName}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 font-['Audiowide'] text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-0 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Text Content */}
          <div className="md:col-span-1 space-y-4 text-center md:text-left">
            <h3 className="text-xl text-purple-300">Challenge your friends</h3>
            <p className="text-gray-300">
              Invite your friends to play quiz game
            </p>
            <button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 
                              bg-size-200 bg-pos-0 text-white rounded-lg font-bold 
                              hover:bg-pos-100 transition-all duration-500 
                              shadow-lg shadow-purple-500/30 hover:shadow-pink-500/40
                              transform hover:-translate-y-1"
            >
              Start Now
            </button>
          </div>

          {/* Logo */}
          <div className="md:col-span-1 flex justify-center">
            <h1
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text 
                          bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
                          animate-text-shine"
            >
              QUIZZ
            </h1>
          </div>

          {/* Image */}
          <div className="md:col-span-1 flex justify-center">
            <img
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
              src="images-removebg-preview.png"
              alt="Quiz illustration"
            />
          </div>
        </div>

        {/* Header Background Shape */}
        <div
          className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-r from-gray-800 to-purple-900 
                      rounded-b-[50%] md:rounded-b-[60%] z-0"
        ></div>
      </div>

      {/* Quiz Section */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2
            className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 
                         bg-clip-text text-transparent mb-4 sm:mb-0"
          >
            Explore Quizzes
          </h2>
          <button
            className="px-6 py-2 bg-gradient-to-r from-purple-700 to-blue-700 
                            rounded-full font-medium hover:from-purple-600 hover:to-blue-600
                            transition-all duration-300 shadow-md shadow-purple-500/20
                            border border-purple-400/20 hover:shadow-lg hover:shadow-blue-500/30"
          >
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz, index) => (
            <button
              key={index}
              onClick={() => handleQuizSelect(quiz.name)}
              className={`${quiz.bg} p-8 rounded-xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-2 
                         cursor-pointer border border-white/10 hover:border-white/20`}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <span className="text-5xl">{quiz.icon}</span>
                <p className="text-xl font-medium">{quiz.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + "s",
            }}
          ></div>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @font-face {
          font-family: "Audiowide";
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/audiowide/v21/l7gdbjpo0cum0ckerWCdlg_O.woff2)
            format("woff2");
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes animate-text-shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .animate-text-shine {
          background-size: 200% auto;
          animation: animate-text-shine 3s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }

        .bg-pos-0 {
          background-position: 0% 0%;
        }

        .bg-pos-100 {
          background-position: 100% 100%;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
