import React from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const Root = () => {
  return (
    <div className="relative">
      <NavBar />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
