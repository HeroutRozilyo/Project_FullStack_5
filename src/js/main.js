import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../js/Login.js';
import Application from '../js/Application.js';

function Main() {
    return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      
  );
}

export default Main;
