import React from "react";
import MainLogo from "../../assets/images/MainLogo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
const MyNavbar = () => {
  const myLinks = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Courses", path: "/courses" },
    { link: "Blog", path: "/blog" },
    { link: "Contact", path: "/contact" },
  ];
  return (
    <Navbar className='px-6 lg:px-24 dark:bg-gray-200'>
      <Link to='/'>
        <div className='flex items-center gap-x-3'>
          <img src={MainLogo} alt='Ta3alom' className="fill-accent" />
          <div>
            <h2 className='font-bold '>Ta3alom</h2>
            <span className='text-sm text-accent'>
              Your first step to success
            </span>
          </div>
        </div>
      </Link>
      <div className='flex md:order-2'>
        <NavbarToggle  />
      </div>
      <NavbarCollapse className='ms-auto lg:flex lg:items-center'>
        {myLinks.map((link, index) => {
          return (
         <NavLink
  to={link.path}
  key={index}
  className={({ isActive }) =>
    `${isActive 
      ? "text-accent font-semibold" 
      : "text-gray-500 hover:text-accent transition"
    } mb-2 lg:mb-0 text-center lg:text-start flex justify-center items-center`
  }
>
  {link.link}

</NavLink>
          )
        })}

         <div className="flex items-center justify-center gap-3">
        <Link
          to="/login"
          className="px-4 py-1.5 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-1.5 bg-accent text-white rounded-full hover:bg-accent/80 transition-all duration-300"
        >
          Register
        </Link>
      </div>
      </NavbarCollapse>
    </Navbar>
  );
};

export default MyNavbar;
