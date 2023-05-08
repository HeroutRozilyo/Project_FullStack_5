import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useHistory,
} from 'react-router-dom';
import Info from '../js/Info';
import Album from '../js/Album';
import Login from '../js/Login';
import Posts from '../js/Posts';
import Todos from '../js/Todos';

 function Application() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    return (
      <div>
        <h1>Welcome {user.name}!</h1>
        <nav>
          <ul>
          <li><Link to="/application/info">Info</Link></li>
            <li><Link to="/application/todos">Todos</Link></li>
            <li><Link to="/application/posts">Posts</Link></li>
            <li><Link to="/application/albums">Albums</Link></li>
            <li><Link to="/login" onClick={() => localStorage.removeItem('user')}>Logout</Link></li>
          </ul>
        </nav>
        <div>
        <Routes>
            <Route path="/application/info" element={<Info />}/>
            <Route path="/application/todos" element={<Todos />}/>
            <Route path="/application/posts" element={<Posts />}/>
          <Route path="/application/albums" element={<Album />}/>

        </Routes>
      </div>
    </div>
            );
 }
        export default Application