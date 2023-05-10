import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from '../js/toolBar.js';
import Info from '../js/Info';
import Album from '../js/Album';
import Login from '../js/Login';
import Posts from '../js/Posts';
import Todos from '../js/Todos';
import '../css/application.css';

function Application() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      
      <h1 className="header">Welcome {user.name}!</h1>
      <div className="content">
        
          <Routes>
            <Route path="/application/info" element={<Info />} />
            <Route path="/application/todos" element={<Todos />} />
            <Route path="/application/posts" element={<Posts />} />
            <Route path="/application/albums" element={<Album />} />
            {/* Add other routes for different pages */}
          </Routes>
        
      </div>
    </div>
  );
}

export default Application;
