import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { H1, ImageContainer, MainContainer, ElementsContainer, NamesContainer, Button, Span } from "./signup.styled";
import { NavLink } from "react-router-dom";
function SignUp() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleCreateAccount(event) {
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
    }
    function handleInputChange(event, setter) {
        setter(event.target.value);
    }
    return (_jsxs(MainContainer, { children: [_jsx(ImageContainer, { className: "imageContainer", children: _jsx("img", { src: "https://w.wallhaven.cc/full/ey/wallhaven-eyrpo8.jpg", alt: "image" }) }), _jsxs(ElementsContainer, { children: [_jsxs("span", { children: [_jsx(H1, { children: "Create an account" }), _jsxs(Span, { children: [_jsx("p", { children: "Already have an account?" }), _jsx(NavLink, { to: "/login", children: "Log in" })] })] }), _jsxs(NamesContainer, { children: [_jsx("input", { type: "text", id: "firstName", placeholder: "firstname", onChange: (e) => handleInputChange(e, setfirstName) }), _jsx("input", { type: "text", id: "lastName", placeholder: "lastname", onChange: (e) => handleInputChange(e, setLastName) })] }), _jsx("input", { type: "email", id: "email", placeholder: "enter you email", onChange: (e) => handleInputChange(e, setEmail) }), _jsx("input", { type: "password", id: "password", placeholder: "enter your password", onChange: (e) => handleInputChange(e, setPassword) }), _jsx(Button, { onClick: handleCreateAccount, children: "Create account" })] })] }));
}
export default SignUp;
