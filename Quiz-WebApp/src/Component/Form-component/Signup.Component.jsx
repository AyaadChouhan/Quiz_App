import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleCreateAccount() {
    const userInfo = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:3000/add", userInfo);
      if (!response) {
        alert("User Not Found");
      }
      navigate("/home");
    } catch (error) {
      console.log("Error in database connection", error);
    }
  }

  function handleInputChange(event, setter) {
    setter(event.target.value);
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
              <h1 className="text-3xl font-bold text-white">Welcome to Quizzy</h1>
              <p className="text-white/80 mt-2">Test your knowledge and challenge friends</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create an account</h1>
            <div className="flex items-center gap-2">
              <p className="text-white/70">Already have an account?</p>
              <NavLink 
                to="/" 
                className="text-purple-300 hover:text-purple-200 font-medium transition-colors"
              >
                Log in
              </NavLink>
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-white/80 mb-2">First name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  onChange={(e) => handleInputChange(e, setFirstName)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white/80 mb-2">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  onChange={(e) => handleInputChange(e, setLastName)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                onChange={(e) => handleInputChange(e, setEmail)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-white/80 mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                onChange={(e) => handleInputChange(e, setPassword)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <button
              onClick={handleCreateAccount}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-purple-500/30 mt-4"
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;