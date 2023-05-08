import React, { useState, useEffect } from "react";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.log(error));
  }, [userId]);

  const handleAlbumClick = (albumId) => {
    setSelectedAlbum(albumId);
    setStart(0);
    setEnd(10);
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.log(error));
  }

  const handleLoadMore = () => {
    setStart(start + 10);
    setEnd(end + 10);
  }

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id} className={selectedAlbum === album.id ? 'selected' : ''}>
            <button onClick={() => handleAlbumClick(album.id)}>View</button>
            {album.title}
            {selectedAlbum === album.id && (
              <div className="photo-list">
                {photos.slice(start, end).map(photo => (
                  <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
                ))}
                {end < photos.length && <button onClick={handleLoadMore}>Load More</button>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
