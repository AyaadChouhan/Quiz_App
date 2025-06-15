import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
// import moduleName from 'module'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleSubmitFunc() {

    const userInfo = {
      email: email,
      password: password,
    };
    console.log(userInfo);
    try {
      const response = await axios.post(
        "http://localhost:3000/authentication",
        userInfo
      );
      if (response) {
        navigate("/home");
      } else {
        alert("User not Found");
      }
    } catch (error) {
      console.log("Error connecting to backend", error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row">
        {/* Image Section */}
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

          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-white/80 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-white/80 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <button
              onClick={handleSubmitFunc}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-purple-500/30 mt-4"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
