import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ChefProfile from "../Pages/ChefsProfile/ChefProfile";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Components/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import UserProfile from "../Pages/UserProfile/UserProfile";
import About from "../Pages/About/About";


const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        { path: '/', element: <Home></Home> },
        { path: `/alldata/:id`, element: <PrivetRoute><ChefProfile></ChefProfile></PrivetRoute> },
        { path: '/login', element: <Login></Login> },
        { path: '/registration', element: <Registration></Registration> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/userprofile', element: <UserProfile></UserProfile> },
        { path: '/about', element: <About></About> }
    ]
}])

export default router;