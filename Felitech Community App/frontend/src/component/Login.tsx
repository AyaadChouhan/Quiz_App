/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
  H1,
  MainContainer,
  ElementsContainer,
  Button,
  ImageContainer,
  Span,
} from "./signup.styled";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitFunc() {
    console.log("clicked");
    const userInfo = {
      email,
      password,
    };
    console.log(userInfo);

    try {
      await axios.post("http://localhost:3000/user/login", userInfo);
      console.log("data sent to backend");
    } catch (error) {
      console.log("error conncting to backend", error);
    }
  }

  return (
    <MainContainer>
      <ImageContainer className="imageContainer">
        <img
          src="https://w.wallhaven.cc/full/ey/wallhaven-eyrpo8.jpg"
          alt="image"
        />
      </ImageContainer>
      <ElementsContainer>
        <span>
          <H1>Log in</H1>
          <Span>
            <p>Don't have an account?</p>
            <NavLink to={"/signup"}>sign'up</NavLink>
          </Span>
        </span>

        <input
          type="email"
          id="email"
          placeholder="enter you email"
          onChange={(e) => {
            setEmail((): any => {
              return e.target.value;
            });
          }}
        />
        <input
          type="password"
          placeholder="enter you password"
          id="password"
          onChange={(e) => {
            setPassword((): any => {
              return e.target.value;
            });
          }}
        />
        <Button onClick={handleSubmitFunc}>Login account</Button>
      </ElementsContainer>
    </MainContainer>
  );
}

export default SignUp;
