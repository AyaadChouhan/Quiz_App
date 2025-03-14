// import { useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import {
//   H1,
//   MainContainer,
//   ElementsContainer,
//   Button,
//   ImageContainer,
//   Span,
// } from "./Signup.styled.jsx";

// function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleSubmitFunc() {
//     console.log("clicked");
//     const userInfo = { email, password };

//     console.log(userInfo);

//     try {
//       await axios.post("http://localhost:3000/user/login", userInfo);
//       console.log("data sent to backend");
//     } catch (error) {
//       console.log("error connecting to backend", error);
//     }
//   }

//   return (
//     <MainContainer>
//       <ImageContainer className="imageContainer">
//         <img
//           src="https://w.wallhaven.cc/full/ey/wallhaven-eyrpo8.jpg"
//           alt="login image"
//         />
//       </ImageContainer>
//       <ElementsContainer>
//          <span>
//           <H1>Log in</H1>
//           <Span>
//             <p>Don't have an account?</p>
//             {/* <NavLink to="/signup">Sign up</NavLink> */}
//           </Span>
//         </span>

//         <input
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           id="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button onClick={handleSubmitFunc}>Login</Button>
//       </ElementsContainer>

//     </MainContainer>
//   );
// }

// export default SignUp;

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
} from "./Signup.styled";
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
    console.log(userInfo);

    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");

    try {
      console.log(userInfo);
      const response = await axios.post("http://localhost:3000/add", userInfo);
      console.log(response)
      if (!response) {
        alert("User Not Found");
      }
      navigate("/home");
      console.log("data sent to backend");
    } catch (error) {
      console.log("error in database connection", error);
    }
  }

  function handleInputChange(event, setter) {
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
            <NavLink to={"/"}>Log in</NavLink>
          </Span>
        </span>
        <NamesContainer>
          <input
            type="text"
            id="firstName"
            placeholder="firstname"
            onChange={(e) => handleInputChange(e, setFirstName)}
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
          placeholder="enter your email"
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
