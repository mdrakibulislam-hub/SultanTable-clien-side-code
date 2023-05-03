import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ChefProfile from "../Pages/ChefsProfile/ChefProfile";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        { path: '/', element: <Home></Home> },
        { path: `/alldata/:id`, element: <ChefProfile></ChefProfile> },
        { path: `/login`, element: <Login></Login> }
    ]
}])

export default router;