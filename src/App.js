import logo from "./logo.svg";
import "./App.css";
import Login from "../src/js/Login.js";
import Main from "../src/js/main.js";
import Info from "../src/js/Info.js";
import Album from '../src/js/Album.js';
import Posts from '../src/js/Posts.js';
import Todos from '../src/js/Todos.js';

import Application from "./js/Application";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/application" element={<Application />} />
      <Route path="/application/info" element={<Info />}/>
      <Route path="/application/todos" element={<Todos />}/>
      <Route path="/application/posts" element={<Posts />}/>
      <Route path="/application/albums" element={<Album />}/>

    </Routes>
  );
}

export default App;
