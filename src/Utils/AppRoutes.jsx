import React from "react";
import Topbar from "../Component/TopBar";
import Footer from "../Component/Footer";
import SignupPage from "../Pages/Signup";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import CreatePost from "../Component/CreatePost";
import BlogPoster from "../Component/BlogPoster.jsx";


const AppRoutes = [
    {
        path:'/',
        element: <BlogPoster />
    },
    {
        path:'/signup',
        element: <SignupPage />
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/topbar',
        element: <Topbar />
    },
    {
        path:'/footer',
        element: <Footer />
    },
    {
        path:'/home',
        element: <Home />
    },
    {
        path:'/createpost',
        element: <CreatePost />
    }
]
export default AppRoutes;