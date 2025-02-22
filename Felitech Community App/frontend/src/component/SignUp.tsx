/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import axios from "axios";
import {
  H1,
  ImageContainer,
  MainContainer,
  ElementsContainer,
  NamesContainer,
  Button,
  Span,
} from "./signup.styled";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleCreateAccount(
    _event: React.MouseEvent<HTMLButtonElement>
  ): Promise<any> {
    const userInfo = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(userInfo);

    setfirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    try {
      await axios.post("http://localhost:3000/user/signup", userInfo);
      console.log('data sent to backend')
    } catch (error) {
      console.log("error in database connection", error);
    }
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setter: (vlaue: string) => void
  ): void {
    setter(event.target.value);
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
          <H1>Create an account</H1>
          <Span>
            <p>Already have an account?</p>
            <NavLink to={"/login"}>Log in</NavLink>
          </Span>
        </span>
        <NamesContainer>
          <input
            type="text"
            id="firstName"
            placeholder="firstname"
            onChange={(e) => handleInputChange(e, setfirstName)}
          />
          <input
            type="text"
            id="lastName"
            placeholder="lastname"
            onChange={(e) => handleInputChange(e, setLastName)}
          />
        </NamesContainer>

        <input
          type="email"
          id="email"
          placeholder="enter you email"
          onChange={(e) => handleInputChange(e, setEmail)}
        />
        <input
          type="password"
          id="password"
          placeholder="enter your password"
          onChange={(e) => handleInputChange(e, setPassword)}
        />
        <Button onClick={handleCreateAccount}>Create account</Button>
      </ElementsContainer>
    </MainContainer>
  );
}

export default SignUp;
