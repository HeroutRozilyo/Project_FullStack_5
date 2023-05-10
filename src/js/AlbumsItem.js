import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../css/album.css";

function Albums() {
  const [photos, setPhotos] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const albumId = JSON.parse(localStorage.getItem("idAlums"));

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  }, [albumId]);

  const handleLoadMore = () => {
    setStart(start);
    setEnd(end + 10);
  };
  return (
    <div className="photo-list-container">
      <div className="photo-list">
        {photos.slice(start, end).map((photo) => (
          <img
            key={photo.id}
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="photo-item"
          />
        ))}
      </div>
      {end < photos.length && (
        <div className="load-more">
          <button onClick={handleLoadMore} className="load-more-button">
            Load More
          </button>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Albums;
