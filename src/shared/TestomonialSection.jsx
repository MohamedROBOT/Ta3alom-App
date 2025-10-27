import Sanja from "../assets/images/Home/Sanja.png";
import Harriet from "../assets/images/Home/Harriet.png";
import Rudy from "../assets/images/Home/Rudy.png";
import Emanuel from "../assets/images/Home/Emanuel.png";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const TestomonialSection = () => {
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
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <h3
        className='
      text-3xl font-bold'>
        Our <span className='text-accent'>Testimonials</span>
      </h3>
      <p className='text-gray-500 lg:w-1/2 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        fugiat dignissimos aspernatur animi voluptatum hic quod. Autem,
        explicabo amet! Fuga.
      </p>

      {courseMentors[0].mentorImg && (
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
            bulletActiveClass: `swiper-pagination-bullet-active bg-accent!`,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className='mySwiper'
          observer={true}
          observeParents={true}
          autoHeight={true}
          spaceBetween={30}
          >
          {courseMentors.map((mentor, index) => {
            return (
              <SwiperSlide key={index} className="max-h-max!">
                <div className='py-10 px-21 border border-gray-200 rounded-lg flex flex-col gap-6 justify-center items-center'>
                  <h4 className='font-bold lg:text-2xl'>{mentor.mentorName}</h4>
                  <span className='font-semibold text-accent lg:text-xl'>
                    {mentor.mentorJob}
                  </span>
                  <p className='text-sm lg:text-base text-gray-500 font-light'>
                    “Lorem ipsum dolor sit amet consectetur. Vulputate sed sit
                    eu pellentesque. Convallis pharetra tincidunt et faucibus
                    risus diam nam”
                  </p>
                  <img
                    src={mentor.mentorImg}
                    alt={mentor.mentorName}
                    className='size-17.5 object-cover'
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default TestomonialSection;
