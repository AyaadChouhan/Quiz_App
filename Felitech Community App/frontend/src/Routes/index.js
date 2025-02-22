import { jsx as _jsx } from "react/jsx-runtime";
import { useRoutes } from 'react-router-dom';
import ROUTES from '../Constants/routes';
import Login from "../component/Login";
import SignUp from "../component/SignUp";
function AppRoutes() {
    return useRoutes([
        {
            path: ROUTES.LOGIN,
            element: _jsx(Login, {})
        },
        {
            path: ROUTES.SIGNUP,
            element: _jsx(SignUp, {})
        },
    ]);
}
export default AppRoutes;
