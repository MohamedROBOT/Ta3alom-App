import React from "react";
import NoBgContainer from "../../shared/NoBgContainer";
import MainLogo from "../../assets/images/MainLogo.png";
import { Facebook, PhoneIcon, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const Footer = () => {
  return (
    <NoBgContainer>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 lg:place-items-center lg:items-start'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-x-3'>
            <img src={MainLogo} alt='Ta3alom' />
            <div>
              <h2 className='font-bold'>Ta3alom</h2>
              <span className='text-sm text-accent'>
                Your first step to success
              </span>
            </div>
          </div>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            eveniet exercitationem voluptate quam modi illo? Veritatis ratione
            molestias tempore quia sint incidunt aliquid nostrum illo!
          </p>
          <ul className='flex items-center gap-x-4'>
            <li className='p-3 rounded-full max-w-max text-transparent bg-accent'>
              <Facebook fill='white' />
            </li>
            <li className='p-3 rounded-full max-w-max text-transparent bg-accent'>
              <PhoneIcon fill='white' />
            </li>
            <li className='p-3 rounded-full max-w-max text-transparent bg-accent'>
              <Twitter fill='white' />
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-6'>
          <h3 className='font-bold text-2xl'>Navigation</h3>
          <ul>
            <li>
              <Link to={"/"} className='text-sm text-gray-500'>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className='text-sm text-gray-500'>
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/courses"} className='text-sm text-gray-500'>
                Courses
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className='text-sm text-gray-500'>
                Blog
              </Link>
            </li>

            <li>
              <Link to={"/contact"} className='text-sm text-gray-500'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-6'>
          <h3 className='font-bold text-2xl'>Quick Links</h3>
          <ul>
            <li>
              <Link to={"/blog"} className='text-sm text-gray-500'>
                Blog
              </Link>
            </li>

            <li>
              <Link to={"/contact"} className='text-sm text-gray-500'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-6'>
          <h3 className='font-bold text-2xl'>Working Hours</h3>
          <div>
            <p className='text-sm text-gray-500'>7 AM - 5 PM, Mon - Sat</p>
            <p className='text-sm text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Button className='hover:-translate-y-1 cursor-pointer transition duration-300 hover:bg-blue-600'>
            Call Us!
          </Button>
        </div>
      </div>
    </NoBgContainer>
  );
};

export default Footer;
