import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Configurator from "./Pages/Configurator";


export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={ <Home/> } />
                <Route path="/configurator" element={ <Configurator/> } />
                <Route path="/about" element={ <About/> } />
                <Route  path="/contact" element={ <Contact/> } />
            </Routes>
        </BrowserRouter>
    );
}

