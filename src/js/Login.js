import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    const users = await response.json();
    const user = users[0];
    if (user && password === user.address.geo.lat.slice(-4)) {
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/application');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login