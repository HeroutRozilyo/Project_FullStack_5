import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useHistory,
} from "react-router-dom";
import Info from "../js/Info";
import Album from "../js/Album";
import Login from "../js/Login";
import Posts from "../js/Posts";
import Todos from "../js/Todos";
import "../css/application.css";

function Application() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1 className="header">Welcome {user.name}!</h1>
      <nav className="menuwBar">
        <ul>
          <li>
            <Link to="/application/info">Info</Link>
          </li>
          <li>
            <Link to="/application/todos">Todos</Link>
          </li>
          <li>
            <Link to="/application/posts">Posts</Link>
          </li>
          <li>
            <Link to="/application/albums">Albums</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => localStorage.removeItem("user")}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes className="content">
          <Route className="info" path="/application/info" element={<Info />} />
          <Route
            className="todos"
            path="/application/todos"
            element={<Todos />}
          />
          <Route
            className="posts"
            path="/application/posts"
            element={<Posts />}
          />
          <Route
            className="albums"
            path="/application/albums"
            element={<Album />}
          />
                 
        </Routes>
      </div>
    </div>
  );
}
export default Application;
