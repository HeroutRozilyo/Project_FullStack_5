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
          <div
            key={post.id}
            className={`post-container ${
              selectedPost === post.id && showPostDetails ? "selected" : ""
            }`}
            onDoubleClick={() => handleRowDoubleClick(post.id)}
          >
            <div className="post-header">
              <h2 className="post-title">{post.title}</h2>
              <button
                className="view-comments-button"
                onClick={() => handlePostClick(post.id)}
              >
                {selectedPost === post.id && showComments
                  ? "Hide Comments"
                  : "View Comments"}
              </button>
            </div>
            {selectedPost === post.id && showPostDetails && (
              <div className="post-body">
                <p>{post.body}</p>
              </div>
            )}
            {selectedPost === post.id && showComments && (
              <div className="post-comments">
                <h3 className="comments-header">Comments</h3>
                {comments.map((comment) => (
                  <div key={comment.id} className="comment-container">
                    <p className="comment-name">{comment.name}</p>
                    <p className="comment-body">{comment.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
