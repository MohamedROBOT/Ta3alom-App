import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Keyboard, Navigation } from "swiper/modules";

import homeImg from "../../assets/images/Home/heroImg.png";
import { Button } from "flowbite-react";
import CountUp from "react-countup";
import {
  BookCheckIcon,
  BookOpenCheckIcon,
  Briefcase,
  ChartBarDecreasingIcon,
  ChartColumn,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code,
  EarthIcon,
  Facebook,
  Fingerprint,
  KanbanIcon,
  LightbulbIcon,
  MoveUpRight,
  PenTool,
  Play,
  Star,
  Users,
  Verified,
  VideoIcon,
} from "lucide-react";
import aboutImg from "../../assets/images/Home/AboutImg.png";

import posterImg from "../../assets/images/Home/poster.png";
import Sanja from "../../assets/images/Home/Sanja.png";
import Harriet from "../../assets/images/Home/Harriet.png";
import Rudy from "../../assets/images/Home/Rudy.png";
import Emanuel from "../../assets/images/Home/Emanuel.png";
import blog1 from "../../assets/images/Home/blog1.png";
import blog2 from "../../assets/images/Home/blog2.png";
import blog3 from "../../assets/images/Home/blog3.png";
import testimonials from "../../assets/images/Home/testimonials.png";
import Voucher from "../../shared/Voucher";
import MentorsSection from "../../shared/MentorsSection";
import CoursesSection from "../../shared/CoursesSection";
function Rating(rate, size) {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;

  return (
    <div className='flex items-center gap-1'>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          size={size}
          key={i}
          className='fill-yellow-400 text-transparent'
        />
      ))}
      {[...Array(5 - Math.ceil(rate))].map((_, i) => (
        <Star size={size} key={i} className='fill-gray-400 text-transparent' />
      ))}
    </div>
  );
}
const Home = () => {
  let skillsType = [
    {
      skillName: "Knowledge",
      skillIcon: <EarthIcon />,
      skillDescription:
        "Access high-quality content to expand your knowledge base",
    },
    {
      skillName: "Unlimited Access",
      skillIcon: <Fingerprint />,
      skillDescription:
        "Learn anytime, anywhere with lifetime access to all courses",
    },
    {
      skillName: "Practical Skills",
      skillIcon: <ChartColumn />,
      skillDescription:
        "Build real-world skills through hands-on lessons and projects",
    },
    {
      skillName: "Certificate",
      skillIcon: <BookOpenCheckIcon />,
      skillDescription:
        "Earn a recognized certificate to showcase your achievements",
    },
  ];
  let statistcs = [
    {
      statIcon: <Clock size={33} />,
      counter: <CountUp end={500} duration={5} />,
      statDescription: "Hours of hands-on learning in our courses",
    },
    {
      statIcon: <Verified size={33} />,
      counter: <CountUp end={1500} duration={5} />,
      statDescription: "Students Passed Our Competitions and Got a Job",
    },
    {
      statIcon: <LightbulbIcon size={33} />,
      counter: <CountUp end={25} duration={5} />,
      statDescription: "The Ratio of Theory and Practice in Each Course",
    },
    {
      statIcon: <Users size={33} />,
      counter: <CountUp end={99} duration={5} />,
      statDescription:
        "We teach people from 4 continents and over 40 countries",
    },
  ];
  let categories = [
    {
      categoryIcon: <PenTool size={35} />,
      categoryName: "Design",
      color: "text-blue-600",
      colorOpc: "bg-blue-500/30",
    },
    {
      categoryIcon: <Briefcase size={35} />,
      categoryName: "Business",
      color: "text-orange-600",
      colorOpc: "bg-orange-500/30",
    },

    {
      categoryIcon: <KanbanIcon size={35} />,
      categoryName: "Digital Marketing",
      color: "text-green-600",
      colorOpc: "bg-green-500/30",
    },
    {
      categoryIcon: <Code size={35} />,
      categoryName: "Development",
      color: "text-sky-600",
      colorOpc: "bg-sky-500/30",
    },
    {
      categoryIcon: <VideoIcon size={35} />,
      categoryName: "3D Animation",
      color: "text-yellow-600",
      colorOpc: "bg-yellow-500/30",
    },
  ];


  let courseMentors = [
    {
      mentorImg: Emanuel,
      mentorName: "Emanuel Mann",
      mentorJob: "Web Developer",
    },
    {
      mentorImg: Rudy,
      mentorName: "Rudy Doyle",
      mentorJob: "Mobile Development",
    },
    {
      mentorImg: Harriet,
      mentorName: "Harriet Schmitt",
      mentorJob: "Motion Graphic",
    },
    {
      mentorImg: Sanja,
      mentorName: "Sonja Keeling",
      mentorJob: "UI/UX Designer",
    },
  ];

  let blogSection = [
    {
      blogImg: blog1,
      blogMethod: "Design Inside  the mind",
    },
    {
      blogImg: blog2,
      blogMethod: "Functions of tools in AI",
    },
    {
      blogImg: blog3,
      blogMethod: "Designs that you wish",
    },
  ];
  return (
    <>
      <section className='flex px-14.75 py-20 lg:p-20 lg:mx-25 bg-bg flex-col lg:flex-row-reverse  gap-y-4  justify-center lg:justify-between items-center'>
        <picture>
          <img className='w-full' src={homeImg} alt='Ta3alom-main-img' />
        </picture>

        <div className='text-white   text-center lg:text-start  flex flex-col gap-10 lg:items-start'>
          <h2 className='text-accent lg:text-xl'>Learning Excellence</h2>

          <Swiper
            slidesPerView={1}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
            }}
            autoHeight={true}
            loop={true}
            modules={[Autoplay]}
            className='upperSwiper'>
            <SwiperSlide className='text-xl lg:text-3xl'>
              <p>The Best Free Online Courses of All Time</p>
            </SwiperSlide>
            <SwiperSlide className='text-xl   lg:text-3xl'>
              <p> Discover Free Courses That Elevate Your Career</p>
            </SwiperSlide>
            <SwiperSlide className='text-xl   lg:text-3xl'>
              <p>Master New Skills with Top-Rated Online Lessons</p>
            </SwiperSlide>
            <SwiperSlide className='text-xl lg:text-3xl'>
              <p>Empower Your Future with Expert-Led Learning</p>
            </SwiperSlide>
          </Swiper>

          <p className='lg:text-xl text-gray-500'>
            "Learn new skills anytime, anywhere with interactive courses,
            practical projects, and continuous support to help you achieve your
            goals."
          </p>
          <div className='flex flex-col justify-center lg:flex-row items-center gap-4'>
            <Button className='cursor-pointer  transition duration-300  hover:-translate-y-1'>
              Explore Courses
            </Button>

            <span className='border cursor-pointer group hover:bg-accent hover:border-none hover:-translate-y-1 transition duration-300 flex justify-center items-center max-w-max p-2 rounded-full'>
              <Play className='fill-accent group-hover:fill-white  text-transparent' />
            </span>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-6 lg:flex-row-reverse justify-center items-center px-14.75 py-20 lg:p-20'>
        <picture>
          <h2 className='text-3xl mb-6 lg:invisible font-semibold'>
            What You Can Expect in a Ta3alom Course
          </h2>

          <img src={aboutImg} alt='Ta3alom-About-img' />
        </picture>
        <div className='flex flex-col gap-y-8'>
          <h2 className='text-3xl invisible lg:visible font-semibold'>
            What You Can Expect in a Ta3alom Course
          </h2>
          <p className=' text-gray-500'>
            "Engaging lessons designed to keep you motivated, with practical
            exercises that help you apply what you learn right away."
          </p>
          <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center items-center'>
            {skillsType.map((skill, index) => {
              return (
                <div
                  key={index}
                  className='flex rounded-xl group hover:bg-blue-600 transition duration-300 p-10 border border-gray-300  flex-col justify-center text-center items-center gap-2'>
                  <span className='text-blue-600 group-hover:text-white'>
                    {skill.skillIcon}
                  </span>
                  <h3 className='font-bold group-hover:text-white'>
                    {skill.skillName}
                  </h3>
                  <p className='text-gray-500 text-xs group-hover:text-white'>
                    {skill.skillDescription}
                  </p>
                </div>
              );
            })}
          </div>

          <Button className='cursor-pointer transition w-1/2 lg:max-w-max mx-auto lg:mx-0 duration-300 lg:self-start hover:-translate-y-1'>
            Explore Courses
          </Button>
        </div>
      </section>

      <section className='py-20 lg:p-20 bg-bg'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-20'>
          {statistcs.map((statistic, index) => {
            return (
              <div
                key={index}
                className='flex flex-col text-white justify-center items-center gap-2 text-center'>
                <span>{statistic.statIcon}</span>
                <span className='font-semibold text-[2.5rem]'>
                  {statistic.counter}+
                </span>
                <p className='text-gray-400 text-sm font-semibold'>
                  {statistic.statDescription}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className='px-14.75 py-20 lg:p-20 flex flex-col gap-6 justify-center items-center'>
        <h2 className='font-bold text-4xl text-center lg:text-start'>
          <span>Our Popular</span> Course Categories
        </h2>
        <p className='text-gray-500 text-center lg:text-start'>
          Tristique pharetra nunc sed amet viverra non non libero. Eget turpis
          ac pretium amet dapibus nullam at bibendum.
        </p>

        <div className='flex flex-wrap gap-10 justify-center items-center '>
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className='flex flex-col justify-center items-center gap-2 text-center'>
                <span
                  className={`p-12 rounded-sm ${category.color} ${category.colorOpc}`}>
                  {category.categoryIcon}
                </span>
                <h3 className='font-semibold'>{category.categoryName}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className='px-14.75 py-20 lg:p-20 flex flex-col gap-6 justify-center items-center'>
     <CoursesSection />
      </section>

      <section className=' py-20 lg:p-20 flex flex-col gap-6 justify-center items-center'>
        <div
          style={{ backgroundImage: `url(${posterImg})` }}
          className={`w-full text-white bg-cover bg-no-repeat py-25 flex justify-center gap-y-4 items-center flex-col text-center`}>
          <h3 className='text-3xl font-bold'>Ready To Elevate Your Skills?</h3>
          <p className='text-3xl font-bold'>Join Our Online Courses Today!</p>
          <p className='w-1/2'>
            Tristique pharetra nunc sed amet viverra non non libero. Eget turpis
            ac pretium amet dapibus nullam at bibendum.
          </p>
          <Button className='cursor-pointer transition duration-300 hover:-translate-y-1 rounded-full'>
            Explore Courses <MoveUpRight />
          </Button>
        </div>
      </section>

      <section className='px-14.75 py-20 lg:p-20 '>
        <MentorsSection />
      </section>

      <section className='px-14.75 py-20 lg:p-20 flex flex-col gap-6 justify-center items-center'>
        <h3 className='font-bold  text-3xl'>
          Blog & <span className='text-accent'>Article</span>
        </h3>
        <p className='lg:w-1/2 text-sm font-medium text-gray-500 text-center'>
          Id lacus eget adipiscing ac dolor sollicitudin libero lacus aliquet
          posuere elementum quamlibero lobortis tempor egestas feugiat sem
          varius
        </p>

        <div className='grid grid-cols-1 w-3/4 md:grid-cols-2 lg:grid-cols-3 rounded-xl  justify-center gap-13 items-center'>
          {blogSection.map((blog, index) => {
            return (
              <div className='rounded-lg overflow-hidden bg-white shadow-lg flex flex-col items-center gap-y-3'>
                <picture className='w-full'>
                  <img
                    className='w-full'
                    src={blog.blogImg}
                    alt={blog.blogMethod}
                  />
                </picture>
                <div className='p-8 flex flex-col gap-y-3'>
                  <h3 className='text-lg font-bold'>{blog.blogMethod}</h3>
                  <p className='text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                  <Button className='bg-accent! ring-0! hover:bg-accent/90! transition duration-300 hover:-translate-y-1 cursor-pointer  w-full rounded-full'>
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className='px-14.75 py-20 lg:p-20 flex flex-col gap-6 justify-center items-center'>
        <h3 className='font-bold text-3xl lg:hidden'>Testimonials</h3>
        <p className='lg:w-1/2 text-sm font-medium lg:hidden text-gray-500 text-center'>
          Id lacus eget adipiscing ac dolor sollicitudin libero lacus aliquet
          posuere elementum quamlibero lobortis tempor egestas feugiat sem
          varius
        </p>

        <div className='grid grid-cols-1 lg:w-3/4 mx-auto lg:grid-cols-2 items-start  gap-12'>
          <picture className='flex flex-col'>
            <img
              className='rounded-t-xl w-full'
              src={testimonials}
              alt='testomonials'
            />

            <caption className=' text-start -translate-y-4 '>
              <div className='flex justify-between items-center'>
                <h3 className='lg:text-2xl font-semibold'>Erick Deckow</h3>
                <span className='text-sm!'>{Rating(5, 15)}</span>
              </div>
              <span className='text-gray-400 lg:text-xl'>
                Software Developer
              </span>
            </caption>

            <p className='font-semibold text-sm lg:text-base text-center'>
              “Lorem ipsum dolor sit amet consectetur. Et quisque at sapien est
              mattis. Massa tincidunt leo venenatis quam lectus non interdum “
            </p>
          </picture>
          <div className='lg:order-first flex flex-col gap-y-12'>
            <h3 className='font-bold text-3xl hidden lg:block'>Testimonials</h3>
            <p className='text-start text-sm font-medium hidden lg:block text-gray-500'>
              Id lacus eget adipiscing ac dolor sollicitudin libero lacus
              aliquet posuere elementum quamlibero lobortis tempor egestas
              feugiat sem varius
            </p>
            {courseMentors.map((mentor, index) => {
              return (
                <div className='flex flex-col'>
                  <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-x-5'>
                      <img
                        className='rounded-t-xl size-18'
                        src={mentor.mentorImg}
                        alt='testomonials'
                      />
                      <div>
                        <h3 className='lg:text-2xl font-semibold'>
                          {mentor.mentorName}
                        </h3>

                        <span className='text-gray-400 lg:text-xl'>
                          {mentor.mentorJob}
                        </span>
                      </div>
                    </div>
                    <span className='text-sm!'>{Rating(5, 15)}</span>
                  </div>
                  <p>
                    “ Lorem ipsum dolor sit amet consectetur. Et quisque at
                    sapien est mattis. Massa tincidunt leo venenatis quam lectus
                    non interdum “
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className=''>
        <Voucher
          voucherName={"Get 30% Off Every Course When You Subscribe Now!"}
          voucherBtn={"Submit"}
        />
      </section>
    </>
  );
};

export default Home;
