import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Home from "../pages/Home";
import Register from "../pages/Register";

const Root = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/home' index element={<Home />} />
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/category' element={<h1>Category</h1>} />
                <Route path='/about' element={<h1>About</h1>} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
            <ToastContainer />
        </>
    );
};

export default Root;
