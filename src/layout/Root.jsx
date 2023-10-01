import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavContext from "../context/NavContext";
const Root = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const navInfo = {
    menu,
    handleMenu,
  };
  return (
    <div className="relative">
      <NavContext.Provider value={navInfo}>
        <NavBar />
        <Outlet></Outlet>
      </NavContext.Provider>
    </div>
  );
};

export default Root;
