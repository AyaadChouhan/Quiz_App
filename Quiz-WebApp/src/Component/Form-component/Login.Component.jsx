import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  // Clear error when user starts typing
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  async function handleSubmitFunc() {
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      triggerShake();
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { email, password }
      );
      
      if (response.data.success) {
        navigate("/home");
      } else {
        setError(response.data.message || "Invalid credentials");
        triggerShake();
      }
    } catch (error) {
      let errorMsg = "Something went wrong. Please try again.";
      if (error.response) {
        errorMsg = error.response.data.message || "Login failed";
      } else if (error.request) {
        errorMsg = "Network error. Please try again.";
      }
      setError(errorMsg);
      triggerShake();
    } finally {
      setIsLoading(false);
    }
  }

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-gray-900 flex items-center justify-center p-4">
      <div className={`w-full max-w-6xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row transition-all duration-300 ${shake ? 'animate-shake' : ''}`}>
        {/* Image Section (unchanged) */}
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <img
            src="https://w.wallhaven.cc/full/ey/wallhaven-eyrpo8.jpg"
            alt="Decorative background"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Welcome Back to Quizzy
              </h1>
              <p className="text-white/80 mt-2">
                Continue your knowledge journey
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Log in</h1>
            <div className="flex items-center gap-2">
              <p className="text-white/70">Don't have an account?</p>
              <NavLink
                to="/signup"
                className="text-purple-300 hover:text-purple-200 font-medium transition-colors"
              >
                Sign Up
              </NavLink>
            </div>
          </div>

          {/* Enhanced Error Message */}
          {error && (
            <div className="mb-5 animate-fade-in">
              <div className="p-3 bg-red-500/20 border-l-4 border-red-400 rounded-r-lg flex items-start gap-3">
                <div className="flex-shrink-0 pt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-red-100">{error}</p>
                  <p className="text-xs text-red-200/80 mt-1">
                    Please check and try again
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-5">
            <div className={`transition-all duration-200 ${error && !email ? 'animate-pulse-once' : ''}`}>
              <label htmlFor="email" className="block text-white/80 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  error && !email ? 'border-red-400/50' : 'border-white/20'
                } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
              />
            </div>

            <div className={`transition-all duration-200 ${error && !password ? 'animate-pulse-once' : ''}`}>
              <label htmlFor="password" className="block text-white/80 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                  error && !password ? 'border-red-400/50' : 'border-white/20'
                } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
              />
            </div>

            <button
              onClick={handleSubmitFunc}
              disabled={isLoading}
              className={`w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-1 hover:shadow-purple-500/30"
              } mt-4 flex items-center justify-center gap-2`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-once {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-pulse-once { animation: pulse-once 0.3s ease; }
      `}</style>
    </div>
  );
}

export default Login;