import React from "react";
import Toolbar from "./toolBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Toolbar />
      <Outlet />
    </>
  );
}
