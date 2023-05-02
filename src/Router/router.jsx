import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ChefProfile from "../Pages/ChefsProfile/ChefProfile";


const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        { path: '/', element: <Home></Home> },
        { path: `/alldata/:id`, element: <ChefProfile></ChefProfile> }
    ]
}])

export default router;