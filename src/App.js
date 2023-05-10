import logo from "./logo.svg";
import "./App.css";
import Login from "../src/js/Login.js";
import Main from "../src/js/main.js";
import Info from "../src/js/Info.js";
import Album from "../src/js/Album.js";
import Posts from "../src/js/Posts.js";
import Todos from "../src/js/Todos.js";
import Toolbar from "../src/js/toolBar.js";
import Layout from "./js/Layout";

import Application from "./js/Application";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && <Toolbar />}{" "}
      {/* Render the toolbar if it's not the login page */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/application" element={<Application />} />
          <Route path="/application/info" element={<Info />} />
          <Route path="/application/todos" element={<Todos />} />
          <Route path="/application/posts" element={<Posts />} />
          <Route path="/application/albums" element={<Album />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
