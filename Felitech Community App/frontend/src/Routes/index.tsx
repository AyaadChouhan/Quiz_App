import { useRoutes } from 'react-router-dom'
import ROUTES from '../Constants/routes'
import Login from "../component/Login";
import SignUp  from "../component/SignUp";

function AppRoutes() {
    return useRoutes([
        {
            path: ROUTES.LOGIN,
            element: <Login/>
        },
        {
            path: ROUTES.SIGNUP,
            element: <SignUp/>
        },
    ])
}
export default AppRoutes