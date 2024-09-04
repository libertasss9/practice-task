import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-[80px] lg:pt-[103px]">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
