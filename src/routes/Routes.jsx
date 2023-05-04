import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chefdata from "../pages/Shared/Chefdata/Chefdata";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/chef/:id',
                element: <Chefdata></Chefdata>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
             
            }
            
        ]
    }
])

export default router;