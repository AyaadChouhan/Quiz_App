import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import {
  H1,
  MainContainer,
  ElementsContainer,
  Button,
  ImageContainer,
  Span,
} from "./Signup.styled.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmitFunc() {
    const userInfo = { email, password };
    console.log(userInfo);

    try {
      const response = await axios.post(
        "http://localhost:3000/authentication",
        userInfo
      );
      if (response) {
        navigate("/home");
      }
      alert("User not Found");
      console.log("data sent to backend");
    } catch (error) {
      console.log("error connecting to backend", error);
    }
  }

  return (
    <MainContainer>
      <ImageContainer>
        <img
          src="https://w.wallhaven.cc/full/ey/wallhaven-eyrpo8.jpg"
          alt="Login Image"
        />
      </ImageContainer>

      <ElementsContainer>
        <H1>Log in</H1>
        <Span>
          <p>Don't have an account?</p>
          <NavLink to="/signup">Sign Up</NavLink>
        </Span>

        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmitFunc}>Login</Button>
      </ElementsContainer>
    </MainContainer>
  );
}

export default Login;
