import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './../pages/Home';
import Agris from './../pages/Agris';
import AgriDetails from './../pages/AgriDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from "../pages/ThankYou";

const Routers= () =>{
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/home" />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/agris" element={<Agris />} />
            <Route path="/agris/:id" element={<AgriDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/agris/search" element={<SearchResultList />} />
        </Routes>
    );
};

export default Routers;