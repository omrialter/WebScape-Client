import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/general/Header"
import Home from "../pages/Home"
import About from "../pages/About"
import Profile from "../pages/Profile"
import SignIn from '../pages/SignIn';
import SignUp from "../pages/SignUp";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/:user_name" element={<Profile />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router