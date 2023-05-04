import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chefdata from "../pages/Shared/Chefdata/Chefdata";
import ChefDetails from "../pages/Home/CHefDetails/ChefDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
                path: '/chef/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
             
            }
            
        ]
    }
])

export default router;