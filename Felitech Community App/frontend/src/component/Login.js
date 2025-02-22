import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { H1, MainContainer, ElementsContainer, Button, ImageContainer, Span, } from "./signup.styled";
import { NavLink } from "react-router-dom";
function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmitFunc() {
        console.log("clicked");
        const userInfo = {
            email,
            password,
        };
        console.log(userInfo);
    }
    return (_jsxs(MainContainer, { children: [_jsx(ImageContainer, { className: "imageContainer", children: _jsx("img", { src: "https://w.wallhaven.cc/full/ey/wallhaven-eyrpo8.jpg", alt: "image" }) }), _jsxs(ElementsContainer, { children: [_jsxs("span", { children: [_jsx(H1, { children: "Log in" }), _jsxs(Span, { children: [_jsx("p", { children: "Don't have an account?" }), _jsx(NavLink, { to: "/signup", children: "sign'up" })] })] }), _jsx("input", { type: "email", id: "email", placeholder: 'enter you email', onChange: (e) => {
                            setEmail(() => {
                                return e.target.value;
                            });
                        } }), _jsx("input", { type: "password", placeholder: 'enter you password', id: "password", onChange: (e) => {
                            setPassword(() => {
                                return e.target.value;
                            });
                        } }), _jsx(Button, { onClick: handleSubmitFunc, children: "Login account" })] })] }));
}
export default SignUp;
