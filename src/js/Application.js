import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

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
          
      </div>
    </div>
            );
 }
        export default Application