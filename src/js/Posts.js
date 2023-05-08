import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  const handlePostClick = (postId) => {
    setSelectedPost(postId);
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.log(error));
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className={selectedPost === post.id ? 'selected' : ''}>
            <button onClick={() => handlePostClick(post.id)}>View</button>
            {post.title}
            {selectedPost === post.id && (
              <div>
                <h3>Comments</h3>
                <ul>
                  {comments.map(comment => (
                    <li key={comment.id}>
                      <strong>{comment.name}</strong>
                      <p>{comment.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
