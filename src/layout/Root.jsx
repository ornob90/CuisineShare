import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavContext from "../context/NavContext";
import Footer from "../pages/Footer/Footer";
import useDb from "../hooks/useDb";

const Root = () => {
  const [menu, setMenu] = useState(false);

  const [bannerSearchQuery, setBannerSearchQuery] = useState("");

  const handleBannerSearchQuery = (e, reset) => {
    if (reset) {
      setBannerSearchQuery("");
      return;
    }
    setBannerSearchQuery(e.target.value);
  };

  console.log(bannerSearchQuery);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const navInfo = {
    menu,
    handleMenu,
  };

  const { users } = useDb();

  return (
    <div className="relative">
      <NavContext.Provider value={navInfo}>
        <NavBar users={users} />
        <Outlet context={[bannerSearchQuery, handleBannerSearchQuery]}></Outlet>
        <Footer />
      </NavContext.Provider>
    </div>
  );
};

export default Root;
