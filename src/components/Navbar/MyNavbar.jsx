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
      <NavbarCollapse className='ms-auto'>
        {myLinks.map((link, index) => {
          return (
         <NavLink
  to={link.path}
  key={index}
  className={({ isActive }) =>
    `${isActive 
      ? "text-accent font-semibold" 
      : "text-gray-500 hover:text-accent transition"
    } mb-2 text-center lg:text-start`
  }
>
  {link.link}
</NavLink>
          )
        })}
      </NavbarCollapse>
    </Navbar>
  );
};

export default MyNavbar;
