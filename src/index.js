import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import Home from "./components/Home";
  import Analysis from "./components/Analysis";
    

ReactDOM.render(
    <React.StrictMode>
        <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analysis" element={<Analysis />} />
            </Routes>
        </Router>
    </React.StrictMode>

,document.getElementById('root'));