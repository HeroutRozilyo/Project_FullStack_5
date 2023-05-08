import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Application from "../js/Application.js";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Main() {
  return <Navigate to="/login" />;
}

export default Main;
