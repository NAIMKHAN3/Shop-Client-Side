import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Layout/Main";
import LogIn from "./Pages/LogIn/LogIn";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register.js/Register";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/login', element: <LogIn></LogIn>
            },
            {
                path: '/register', element: <Register></Register>
            },
        ]
    }
])