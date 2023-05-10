import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../css/posts.css"; // import the CSS file

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [showPostDetails, setShowPostDetails] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <Link
            to={`${post.id}/comments`}
            key={post.id}
            className={`post-container`}
          >
            <div className="post-header">
              <h2 className="post-title">{post.title}</h2>
              <button className="view-comments-button">View Comments</button>
            </div>
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Posts;
