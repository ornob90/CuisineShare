import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavContext from "../context/NavContext";
import Footer from "../pages/Footer/Footer";

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
        <Footer />
      </NavContext.Provider>
    </div>
  );
};

export default Root;
