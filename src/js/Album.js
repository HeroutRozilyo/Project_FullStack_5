import React, { useState, useEffect } from "react";
import "../css/album.css";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [showAlbums, setShowAlbums] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id;
  

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.log(error));
  }, [userId]);

  const handleAlbumClick = (albumId) => {
    
    if (selectedAlbum === albumId && showAlbums) {
      setShowAlbums(false);
      setSelectedAlbum(null);
      setPhotos([]);
    } else {
      setSelectedAlbum(albumId);
      setShowAlbums(true);
      setStart(0);
      setEnd(10);
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch((error) => console.log(error));
    }
  };

  const handleLoadMore = () => {
    setStart(start);
    setEnd(end + 10);
  };

  return (
    <div className="album-container">
      <h2 className="album-title">Albums</h2>
      <ul className="album-list">
        {albums.map((album) => (
          <li key={album.id} className="album-item">
            <div
              className="album-card"
              onClick={() => handleAlbumClick(album.id)}
              aria-label={`View album ${album.title}`}
            >
              <div className="album-image">
                <span className="album-title-text">{album.title}</span>
              </div>
            </div>
            {selectedAlbum === album.id && (
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
                    <button
                      onClick={handleLoadMore}
                      className="load-more-button"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
