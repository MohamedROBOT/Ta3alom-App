import React from "react";
import NoBgContainer from "../../shared/NoBgContainer";
import heroImg from "../../assets/images/Blog/BlogHeroImg.png";
import blog1 from "../../assets/images/Blog/blog1.png";
import blog2 from "../../assets/images/Blog/blog2.png";
import blog3 from "../../assets/images/Blog/blog3.png";
import blog4 from "../../assets/images/Blog/blog4.png";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Eye,
  Heart,
  MessageCircleDashedIcon,
  Share2Icon,
} from "lucide-react";
const Blog = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroImg})` }}
        className={`w-full text-white h-80 flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat`}>
        <h1 className='font-bold text-3xl'>Blog</h1>
        <h2 className='text-bbold text-2xl'>
          <Link to={"/"} className='cursor-pointer'>
            Home
          </Link>{" "}
          &gt; <span className='text-accent'>Blog</span>
        </h2>
      </div>
      <NoBgContainer>
        <div className='flex flex-col gap-y-6'>
          <div className='grid grid-cols-1 mx-auto xl:w-3/4 lg:grid-cols-2 justify-center items-center gap-6'>
            <picture>
              <Link to={"/blogdetails"}>
                <img src={blog1} alt='blog1' className='w-full' />
              </Link>
            </picture>
            <div className='flex flex-col justify-between gap-y-6 lg:order-first'>
              <span className='p-4 max-w-max rounded-full border text-primary'>
                <BookOpen />
              </span>
              <h2 className='text-2xl'>
                We have added new features to Dream Palace – Unique features of
                our programs
              </h2>
              <p className='text-sm text-gray-500'>
                Posted <span className='text-accent'></span> by
                <span className='text-accent'>Melissa Hunter</span>
              </p>
              <p className='text-gray-500 text-s'>
                Lorem ipsum dolor sit amet consectetur. Vulputate nulla sed
                pretium molestie morbi in nibh sit. Faucibus turpis sagittis est
                duis ac tincidunt eu blandit. Tortor at lorem aliquam lacus
                aliquam amet at. Sem euismod ultricies tellus facilisi ultricies
                duis. Quis leo ligula diam nibh vel. Sit tempus in faucibus
                volutpat aenean. Adipiscing condimentum quisque blandit aenean
                pellentesque faucibus. Diam tellus netus faucibus urna congue
                turpis amet arcu tincidunt.
              </p>
              <div className='flex flex-wrap gap-6'>
                <span className='px-4 cursor-pointer hover:bg-amber-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-amber-300'>
                  <Eye size={14} />
                  1089
                </span>
                <span className='px-4 cursor-pointer hover:bg-red-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-red-500'>
                  <Heart size={14} />4
                </span>
                <span className='px-4 cursor-pointer hover:bg-green-400 justify-center items-center text-sm flex gap-x-2 py-1 rounded-full text-white bg-green-500'>
                  <MessageCircleDashedIcon size={14} />3
                </span>
                <span className='px-4 cursor-pointer hover:bg-blue-400 justify-center items-center  text-sm flex gap-x-2 py-1 rounded-full text-white bg-blue-500'>
                  <Share2Icon size={14} />
                  Share
                </span>
              </div>
            </div>
          </div>
          <span className='h-2 mt-6 xl:w-3/4 mx-auto rounded-lg w-full bg-gray-300'></span>

          <div className='grid grid-cols-1 mx-auto xl:w-3/4 lg:grid-cols-2 justify-center items-center gap-6'>
            <picture>
              <img src={blog2} alt='blog2' className='w-full' />
            </picture>
            <div className='flex flex-col justify-between gap-y-6'>
              <span className='p-4 max-w-max rounded-full border text-primary'>
                <BookOpen />
              </span>
              <h2 className='text-2xl'>
                We have added new features to Dream Palace – Unique features of
                our programs
              </h2>
              <p className='text-sm text-gray-500'>
                Posted <span className='text-accent'></span> by
                <span className='text-accent'>Melissa Hunter</span>
              </p>
              <p className='text-gray-500 text-s'>
                Lorem ipsum dolor sit amet consectetur. Vulputate nulla sed
                pretium molestie morbi in nibh sit. Faucibus turpis sagittis est
                duis ac tincidunt eu blandit. Tortor at lorem aliquam lacus
                aliquam amet at. Sem euismod ultricies tellus facilisi ultricies
                duis. Quis leo ligula diam nibh vel. Sit tempus in faucibus
                volutpat aenean. Adipiscing condimentum quisque blandit aenean
                pellentesque faucibus. Diam tellus netus faucibus urna congue
                turpis amet arcu tincidunt.
              </p>
              <div className='flex flex-wrap gap-6'>
                <span className='px-4 cursor-pointer hover:bg-amber-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-amber-300'>
                  <Eye size={14} />
                  1089
                </span>
                <span className='px-4 cursor-pointer hover:bg-red-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-red-500'>
                  <Heart size={14} />4
                </span>
                <span className='px-4 cursor-pointer hover:bg-green-400 justify-center items-center text-sm flex gap-x-2 py-1 rounded-full text-white bg-green-500'>
                  <MessageCircleDashedIcon size={14} />3
                </span>
                <span className='px-4 cursor-pointer hover:bg-blue-400 justify-center items-center  text-sm flex gap-x-2 py-1 rounded-full text-white bg-blue-500'>
                  <Share2Icon size={14} />
                  Share
                </span>
              </div>
            </div>
          </div>
          <span className='h-2 mt-6 xl:w-3/4 mx-auto rounded-lg w-full bg-gray-300'></span>

          <div className='grid grid-cols-1 mx-auto xl:w-3/4 lg:grid-cols-2 justify-center items-center gap-6'>
            <picture>
              <img src={blog3} alt='blog3' className='w-full' />
            </picture>
            <div className='flex flex-col justify-between gap-y-6 lg:order-first'>
              <span className='p-4 max-w-max rounded-full border text-primary'>
                <BookOpen />
              </span>
              <h2 className='text-2xl'>
                We have added new features to Dream Palace – Unique features of
                our programs
              </h2>
              <p className='text-sm text-gray-500'>
                Posted <span className='text-accent'></span> by
                <span className='text-accent'>Melissa Hunter</span>
              </p>
              <p className='text-gray-500 text-s'>
                Lorem ipsum dolor sit amet consectetur. Vulputate nulla sed
                pretium molestie morbi in nibh sit. Faucibus turpis sagittis est
                duis ac tincidunt eu blandit. Tortor at lorem aliquam lacus
                aliquam amet at. Sem euismod ultricies tellus facilisi ultricies
                duis. Quis leo ligula diam nibh vel. Sit tempus in faucibus
                volutpat aenean. Adipiscing condimentum quisque blandit aenean
                pellentesque faucibus. Diam tellus netus faucibus urna congue
                turpis amet arcu tincidunt.
              </p>
              <div className='flex flex-wrap gap-6'>
                <span className='px-4 cursor-pointer hover:bg-amber-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-amber-300'>
                  <Eye size={14} />
                  1089
                </span>
                <span className='px-4 cursor-pointer hover:bg-red-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-red-500'>
                  <Heart size={14} />4
                </span>
                <span className='px-4 cursor-pointer hover:bg-green-400 justify-center items-center text-sm flex gap-x-2 py-1 rounded-full text-white bg-green-500'>
                  <MessageCircleDashedIcon size={14} />3
                </span>
                <span className='px-4 cursor-pointer hover:bg-blue-400 justify-center items-center  text-sm flex gap-x-2 py-1 rounded-full text-white bg-blue-500'>
                  <Share2Icon size={14} />
                  Share
                </span>
              </div>
            </div>
          </div>
          <span className='h-2 mt-6 xl:w-3/4 mx-auto rounded-lg w-full bg-gray-300'></span>

          <div className='xl:w-3/4 mx-auto lg:grid-cols-2 justify-center items-center gap-6'>
            <div className='flex flex-col justify-between gap-y-6 lg:order-first'>
              <span className='p-4 max-w-max rounded-full border text-primary'>
                <BookOpen />
              </span>
              <h2 className='text-2xl'>
                We have added new features to Dream Palace – Unique features of
                our programs
              </h2>
              <p className='text-sm text-gray-500'>
                Posted <span className='text-accent'></span> by
                <span className='text-accent'>Melissa Hunter</span>
              </p>
              <p className='text-gray-500 text-s'>
                Lorem ipsum dolor sit amet consectetur. Vulputate nulla sed
                pretium molestie morbi in nibh sit. Faucibus turpis sagittis est
                duis ac tincidunt eu blandit. Tortor at lorem aliquam lacus
                aliquam amet at. Sem euismod ultricies tellus facilisi ultricies
                duis. Quis leo ligula diam nibh vel. Sit tempus in faucibus
                volutpat aenean. Adipiscing condimentum quisque blandit aenean
                pellentesque faucibus. Diam tellus netus faucibus urna congue
                turpis amet arcu tincidunt.
              </p>
              <div className='flex flex-wrap gap-6'>
                <span className='px-4 cursor-pointer hover:bg-amber-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-amber-300'>
                  <Eye size={14} />
                  1089
                </span>
                <span className='px-4 cursor-pointer hover:bg-red-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-red-500'>
                  <Heart size={14} />4
                </span>
                <span className='px-4 cursor-pointer hover:bg-green-400 justify-center items-center text-sm flex gap-x-2 py-1 rounded-full text-white bg-green-500'>
                  <MessageCircleDashedIcon size={14} />3
                </span>
                <span className='px-4 cursor-pointer hover:bg-blue-400 justify-center items-center  text-sm flex gap-x-2 py-1 rounded-full text-white bg-blue-500'>
                  <Share2Icon size={14} />
                  Share
                </span>
              </div>
            </div>
          </div>
          <span className='h-2 mt-6 xl:w-3/4 mx-auto rounded-lg w-full bg-gray-300'></span>

          <div className=' mx-auto xl:w-3/4 flex flex-col justify-center items-center gap-6'>
            <picture className='w-full'>
              <img src={blog4} alt='blog4' className='w-full' />
            </picture>
            <div className='flex flex-col justify-between gap-y-6'>
              <h2 className='text-2xl'>
                We have added new features to Dream Palace – Unique features of
                our programs
              </h2>
              <p className='text-sm text-gray-500'>
                Posted <span className='text-accent'></span> by
                <span className='text-accent'>Melissa Hunter</span>
              </p>
              <p className='text-gray-500 text-s'>
                Lorem ipsum dolor sit amet consectetur. Vulputate nulla sed
                pretium molestie morbi in nibh sit. Faucibus turpis sagittis est
                duis ac tincidunt eu blandit. Tortor at lorem aliquam lacus
                aliquam amet at. Sem euismod ultricies tellus facilisi ultricies
                duis. Quis leo ligula diam nibh vel. Sit tempus in faucibus
                volutpat aenean. Adipiscing condimentum quisque blandit aenean
                pellentesque faucibus. Diam tellus netus faucibus urna congue
                turpis amet arcu tincidunt.
              </p>
              <div className='flex flex-wrap gap-6'>
                <span className='px-4 cursor-pointer hover:bg-amber-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-amber-300'>
                  <Eye size={14} />
                  1089
                </span>
                <span className='px-4 cursor-pointer hover:bg-red-400 flex justify-center items-center text-sm gap-x-2 py-1 rounded-full text-white bg-red-500'>
                  <Heart size={14} />4
                </span>
                <span className='px-4 cursor-pointer hover:bg-green-400 justify-center items-center text-sm flex gap-x-2 py-1 rounded-full text-white bg-green-500'>
                  <MessageCircleDashedIcon size={14} />3
                </span>
                <span className='px-4 cursor-pointer hover:bg-blue-400 justify-center items-center  text-sm flex gap-x-2 py-1 rounded-full text-white bg-blue-500'>
                  <Share2Icon size={14} />
                  Share
                </span>
              </div>
            </div>
          </div>
        </div>
      </NoBgContainer>
    </>
  );
};

export default Blog;
