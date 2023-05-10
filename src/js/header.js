import React from "react";
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
export default function Header() {
  return (
    <header>
      <nav className="menuwBar">
        <Link to="/application/info">Info</Link>
        <Link to="/application/todos">Todos</Link>
        <Link to="/application/posts">Posts</Link>
        <Link to="/application/albums">Albums</Link>
        <Link to="/login" onClick={() => localStorage.removeItem("user")}>
          Logout
        </Link>
      </nav>
    </header>
  );
}
