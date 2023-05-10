import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumsItem() {
  const [photos, setPhotos] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!photos) {
    return <h1>Loading...</h1>;
  }

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
    </div>
  );
}

export default AlbumsItem;
