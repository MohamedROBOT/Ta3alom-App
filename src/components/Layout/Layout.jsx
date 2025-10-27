import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='h-screen flex flex-col '>
      <nav>Navbar</nav>
      <main className='grow'>
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Layout;
