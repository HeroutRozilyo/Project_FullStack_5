import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../css/album.css";
import { Navigate, Link } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div>
      <div className="album-container">
        <h2 className="album-title">Albums</h2>
        <ul className="album-list">
          {albums.map((album) => (
            <Link
              to={`${album.id}/photos`}
              key={album.id}
              className="album-card"
            >
              <div className="album-image">
                <span className="album-title-text">{album.title}</span>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Albums;
