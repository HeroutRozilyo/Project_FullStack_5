import React from 'react';
import { Link } from 'react-router-dom';
import '../css/toolBar.css';

function Toolbar() {
  return (
    <div className="toolbar">
      <ul className="menuBar">
        <li>
          <Link to="/application/info">
            <i className="toolbar-icon fas fa-info-circle"></i>
            Info
          </Link>
        </li>
        <li>
          <Link to="/application/todos">
            <i className="toolbar-icon fas fa-list"></i>
            Todos
          </Link>
        </li>
        <li>
          <Link to="/application/posts">
            <i className="toolbar-icon fas fa-pencil-alt"></i>
            Posts
          </Link>
        </li>
        <li>
          <Link to="/application/albums">
            <i className="toolbar-icon fas fa-images"></i>
            Albums
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => localStorage.removeItem("user")}>
            <i className="toolbar-icon fas fa-sign-out-alt"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Toolbar;
