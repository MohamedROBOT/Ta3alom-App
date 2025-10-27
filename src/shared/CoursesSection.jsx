// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";

import { Button } from "flowbite-react";
import {
  BookCheckIcon,
  ChartBarDecreasingIcon,
  ChevronLeft,
  ChevronRight,
  
  Star,
} from "lucide-react";

import { useCourses } from "../Context/CourseContext";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const recommendedCourses = useCourses();
  console.log(recommendedCourses);
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
          <Star
            size={size}
            key={i}
            className='fill-gray-400 text-transparent'
          />
        ))}
      </div>
    );
  }
  return (
    <>
      <h2 className='text-2xl font-semibold text-center'>
        <span className='text-accent'>Recommended</span> Courses
      </h2>
      <p className='text-sm font-medium text-gray-500 text-center'>
        Dignissim enim sit amet venenatis urna cursus eget nunc.Egestas sed sed
        risus pretium quam vulputate
      </p>
      <div className='flex self-end gap-x-2'>
        <button className='custom-prev transition duration-300 cursor-pointer bg-white shadow-sm text-black p-2 rounded-full hover:bg-blue-600 hover:text-white'>
          <ChevronLeft />
        </button>
        <button className='custom-next transition duration-300 cursor-pointer bg-white shadow-sm text-black p-2 rounded-full hover:bg-blue-600 hover:text-white'>
          <ChevronRight />
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Keyboard, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className='home-swiper'>
        {recommendedCourses.map((course, index) => {
          return (
            <SwiperSlide
              key={course.id}
              className='pb-10
              '>
              <div className='flex flex-col shadow-xl rounded-xl overflow-hidden'>
                <picture className='overflow-hidden'>
                  <img
                    className='w-full hover:scale-125 transition duration-300'
                    src={course.courseImg}
                    alt={course.courseName}
                  />
                </picture>
                <div className='p-3 flex flex-col text-sm gap-y-3'>
                  <div className='flex items-center flex-wrap gap-6'>
                    <span className='flex justify-center items-center gap-x-1'>
                      <BookCheckIcon size={20} className='text-accent' />
                      {course.courseLectures}
                    </span>
                    <span className='flex justify-center items-center gap-x-1'>
                      <ChartBarDecreasingIcon
                        size={20}
                        className='text-accent'
                      />
                      {course.courseLevel}
                    </span>
                  </div>
                  <h3 className='text-lg text-center font-bold'>
                    {course.courseName}
                  </h3>
                  <span className='flex items-center gap-x-3'>
                    {Rating(course.courseRate)}

                    {course.courseRate.toFixed(1)}
                  </span>
                  <Button className='rounded-full transition duration-300 cursor-pointer hover:-translate-y-1'>
                    {course.coursePrice}
                  </Button>
                  <Link
                    to={`/courses/${course.id}`}
                    className='inline-block bg-blue-600 text-center font-bold transition duration-300 text-white px-4 py-2 hover:-translate-y-1 rounded-full hover:bg-blue-700'>
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CoursesSection;
