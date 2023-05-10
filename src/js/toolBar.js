import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/toolBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Toolbar() {
  return (
    <div className="toolbar">
      <ul className="menuBar">
        <li>
          <NavLink
            to="application"
            className={({ isActive }) => (isActive ? "my-link" : null)}
          >
            <i className="toolbar-icon fas fa-home"></i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="info"
            className={({ isActive }) => (isActive ? "my-link" : null)}
          >
            <i className="toolbar-icon fas fa-info-circle"></i>
            Info
          </NavLink>
        </li>
        <li>
          <NavLink
            to="todos"
            className={({ isActive }) => (isActive ? "my-link" : null)}
          >
            <i className="toolbar-icon fas fa-list"></i>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="posts"
            className={({ isActive }) => (isActive ? "my-link" : null)}
          >
            <i className="toolbar-icon fas fa-pencil-alt"></i>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="albums"
            className={({ isActive }) => (isActive ? "my-link" : null)}
          >
            <i className="toolbar-icon fas fa-images"></i>
            Albums
          </NavLink>
        </li>
        <li>
          <NavLink
            to="login"
            onClick={() => localStorage.removeItem("user")}
            className={({ isActive }) => (isActive ? "my-link" : null)}
          >
            <i className="toolbar-icon fas fa-sign-out-alt"></i>
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Toolbar;
