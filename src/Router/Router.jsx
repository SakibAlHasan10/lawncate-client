import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign_up',
                element: <SignUp></SignUp>
            },
            {
                path: '/sign_in',
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default router;