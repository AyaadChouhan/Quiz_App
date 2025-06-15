/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faChartBar,
  faRedo,
  faShare,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import confetti from "canvas-confetti";
import { Link } from "react-router-dom";

const WinnerPage = () => {
  const [name, setName] = useState("Ayaad");
  const [showFireworks, setShowFireworks] = useState(true);

  async function getDetials() {
    let res = await axios.get("http://localhost:3000/authentication");
    console.log(res);
  }
  getDetials()
  // Enhanced confetti effects
  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Left side fireworks
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#ffd700", "#ffffff", "#f28d35"],
      });

      // Right side fireworks
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#ff0000", "#00ff00", "#0000ff"],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  // Floating particles effect
  const renderParticles = () => {
    return [...Array(50)].map((_, i) => {
      const size = Math.random() * 10 + 5;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      const color = `hsl(${Math.random() * 60 + 30}, 100%, 50%)`;

      return (
        <div
          key={i}
          className="absolute rounded-full animate-float pointer-events-none"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: color,
            opacity: Math.random() * 0.5 + 0.2,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            filter: "blur(1px)",
          }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {renderParticles()}
      </div>

      {/* Glowing orb effects */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-500/20 filter blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-500/20 filter blur-3xl animate-pulse delay-1000" />

      {/* Main card */}
      <div className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 w-full max-w-2xl z-10 transform transition-all hover:scale-[1.01] duration-500 relative">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent animate-border-glow pointer-events-none" />

        <div className="p-8 text-center">
          {/* Header with trophy */}
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-500 bg-clip-text text-transparent mb-4 animate-text-shine">
              Quiz Results
            </h1>
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl animate-pulse" />
              <div className="relative z-10 animate-bounce-slow">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-amber-400 text-6xl md:text-7xl drop-shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-md" />
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-white mt-4 animate-fade-in">
              Congratulations, {name}! 🎉
            </p>
            <p className="text-lg text-blue-200 mt-2">
              You scored better than{" "}
              <span className="font-bold text-yellow-300">85%</span> of
              participants!
            </p>
          </div>

          {/* Score display */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 mb-10 border border-white/10 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-blue-500/10 filter blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-purple-500/10 filter blur-xl" />

            <div className="flex flex-col items-center relative z-10">
              <div className="relative w-40 h-40 mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#1e3a8a"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset="42" // ~85% (283 * 0.15)
                    transform="rotate(-90 50 50)"
                    className="animate-circle-fill"
                  />
                  <defs>
                    <linearGradient
                      id="progressGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white animate-count-up">
                    100%
                  </span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-1">
                Perfect Score!
              </h2>
              <p className="text-blue-200">All answers correct</p>
              <div className="mt-4 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-yellow-400 animate-star-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/home"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold shadow-lg hover:shadow-blue-400/30 hover:scale-105 transition-all duration-300 group"
            >
              <FontAwesomeIcon
                icon={faHome}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              Return Home
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-8 text-blue-300/80 text-sm">
            <p>Final Year Project - Computer Science Department</p>
            <p className="text-xs mt-1 opacity-70">Academic Year 2023-2024</p>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(-40px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes border-glow {
          0% {
            box-shadow: 0 0 10px 2px rgba(245, 158, 11, 0.3);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(245, 158, 11, 0.6);
          }
          100% {
            box-shadow: 0 0 10px 2px rgba(245, 158, 11, 0.3);
          }
        }

        @keyframes text-shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes circle-fill {
          0% {
            stroke-dashoffset: 283;
          }
          100% {
            stroke-dashoffset: 42;
          }
        }

        @keyframes count-up {
          0% {
            content: "0%";
          }
          100% {
            content: "100%";
          }
        }

        @keyframes star-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float linear forwards;
        }

        .animate-border-glow {
          animation: border-glow 3s ease infinite;
        }

        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 2s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease infinite;
        }

        .animate-circle-fill {
          animation: circle-fill 1.5s ease-out forwards;
        }

        .animate-count-up {
          animation: count-up 1.5s ease-out forwards;
        }

        .animate-star-bounce {
          animation: star-bounce 0.8s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WinnerPage;
