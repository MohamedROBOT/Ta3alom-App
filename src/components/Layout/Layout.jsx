import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import MyNavbar from "../Navbar/MyNavbar";
const Layout = () => {
  return (
    <div className='h-screen flex flex-col '>
      <MyNavbar />
      <main className='grow'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
