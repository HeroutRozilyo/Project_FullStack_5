import React, { useState, useEffect } from "react";
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

  const handlePostClick = (postId) => {
    if (selectedPost === postId && showComments) {
      setShowComments(false);
      setComments([]);
      setSelectedPost(null);
    } else {
      setSelectedPost(postId);
      setShowComments(true);
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.log(error));
    }
  };

  const handleRowDoubleClick = (postId) => {
    if (selectedPost === postId && showPostDetails) {
      setShowPostDetails(false);
    } else {
      setSelectedPost(postId);
      setShowPostDetails(true);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className={`post-item ${
              selectedPost === post.id && showPostDetails ? "selected" : ""
            }`}
            onDoubleClick={() => handleRowDoubleClick(post.id)}
          >
            <button onClick={() => handlePostClick(post.id)}>
              {selectedPost === post.id && showComments ? "Close" : "View"}
            </button>
            {selectedPost === post.id && (showPostDetails || showComments)
              ? ""
              : `${post.title}`}

            {selectedPost === post.id && showComments && (
              <div>
                <h3>Comments</h3>
                <ul>
                  {comments.map((comment) => (
                    <li key={comment.id}>
                      <strong>{comment.name}</strong>
                      <p>{comment.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedPost === post.id && showPostDetails && (
              <div>
                <h3>Post Details</h3>
                <strong> {post.title}</strong>
                <p>{post.body}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
