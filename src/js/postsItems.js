import React, { useState, useEffect } from "react";
import "../css/posts.css"; // import the CSS file
import { useParams } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {
        <div className="post-body">
          <p>{posts.body}</p>
        </div>
      }

      <div className="post-comments">
        <h3 className="comments-header">Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="comment-container">
            <p className="comment-name">{comment.name}</p>
            <p className="comment-body">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
