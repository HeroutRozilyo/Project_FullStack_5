import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "../css/application.css";
import { FaEye } from "react-icons/fa";

function Application() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch posts from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 5))); // Limiting to first 5 posts

    // Fetch albums from the API
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data.slice(0, 5))); // Limiting to first 5 albums

    // Fetch todos from the API
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 5))); // Limiting to first 5 todos
  }, []);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1 className="header">Welcome {user.name}!</h1>
      <div className="contentAP">
        <div className="sectionAP" id="posts">
          <Link to="/application/posts">
            <h2>
              <FaEye className="section-icon" />
              Posts
            </h2>
          </Link>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
        <div className="sectionAP" id="album">
          <Link to="/application/albums">
            <h2>
              {" "}
              <FaEye className="section-icon" />
              Albums
            </h2>
          </Link>
          <ul>
            {albums.map((album) => (
              <li key={album.id}>{album.title}</li>
            ))}
          </ul>
        </div>
        <div className="sectionAP" id="todos">
          <Link to="/application/todos">
            <h2>
              <FaEye className="section-icon" />
              Todos
            </h2>
          </Link>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.completed ? (
                  <span className="incomplete-task">
                    <i className="fas fa-times"></i>
                  </span>
                ) : (
                  <span className="completed-task">
                    <i className="fas fa-check"></i>
                  </span>
                )}
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Application;
