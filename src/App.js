import logo from "./logo.svg";
import "./App.css";
import Login from "./js/Login";
import Main from "./js/main";

import Application from "./js/Application";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
}

export default App;
