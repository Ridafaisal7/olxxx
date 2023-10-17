import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Signin from '../views/Signin'
import Signup from '../views/Signup'
import PostAd from "../views/PostAd";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/postad",
                element: <PostAd />
            },
            {
                path: "/postad/:id",
                element: <Detail />
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()

    return (
        <div>

            <Outlet />

        </div>)
}

export default Router