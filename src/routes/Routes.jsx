import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../pages/Home/CHefDetails/ChefDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import Login from "../pages/Home/Login/Login";
import Blog from "../pages/Blog/Blog";
import Register from "../pages/Home/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: 'blog',
                element: <Blog></Blog>             
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://madchef-yard-server-side-simanto789.vercel.app/chef/${params.id}`)
             
            },
            {
                path: 'login',
                element: <Login></Login>
                
            },
            {
                path: 'register',
                element: <Register></Register>
                
            }
            
        ]
    }
])

export default router;