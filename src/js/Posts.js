import { useState, useEffect } from 'react';
function Posts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
    const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
    };
    fetchPosts();
    }, []);
    
    return (
    <div>
    <h2>Posts</h2>
    {posts.map((post) => (
    <div key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    </div>
    ))}
    </div>
    );
    }
    export default Posts; 