import React from "react";
import heroImg from "../../assets/images/About/hero-section.png";
import NoBgContainer from "../../shared/NoBgContainer";
import insightImg from "../../assets/images/About/insight.png";
import CountUp from "react-countup";
import { Button } from "flowbite-react";
import MentorsSection from "../../shared/MentorsSection";
import TestomonialSection from "../../shared/TestomonialSection";
import Voucher from "../../shared/Voucher";
const About = () => {
  return (
    <>
      <section className='bg-bg px-6 py-20 lg:px-24 lg:py-25'>
        <div className=' grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center items-center'>
          <picture className='flex relative justify-center items-center'>
            <img src={heroImg} alt='heroImg' className='w-100' />
          </picture>

          <div className='flex flex-col text-center lg:text-start lg:order-first gap-6'>
            <h2
              className='
          text-white text-3xl'>
              About Ta<span className='text-accent '>3</span>alom
            </h2>
            <p className='text-gray-400'>
              Ta3alom is a modern educational platform that makes learning
              simple, engaging, and accessible for everyone. With interactive
              lessons, progress tracking, and flexible access, we help students
              learn anytime and anywhere.
            </p>
          </div>
        </div>
      </section>

      <NoBgContainer>
        <div className='flex flex-col  gap-y-6'>
          <h3 className='text-2xl font-semibold lg:hidden'>
            <span className='text-accent'>Learn</span> Easy
            Beautiful Designs From Our Office
          </h3>

          <div className='flex flex-col gap-6 lg:flex-row lg:gap-20  mx-auto '>
            <picture>
              <img
                src={insightImg}
                alt='Learn Easy Beautiful Designs From Our Office'
              />
            </picture>

            <div className='flex flex-col gap-6 lg:w-3/4'>
              <h3 className='text-2xl font-semibold hidden lg:block'>
                <span className='text-accent'>Learn</span> Easy
                Beautiful Designs From Our Office
              </h3>
              <p className='text-gray-500 text-sm lg:w-3/4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className='flex gap-6 justify-center gap-x-20 items-center'>
                <div className='flex gap-4 justify-center items-center flex-col'>
                  <span className='text-2xl font-semibold'>
                    <CountUp end={34} />
                  </span>
                  <h4 className='font-bold text-gray-500 text-sm'>
                    Expert Team
                  </h4>
                </div>
                <div className='flex gap-4 justify-center items-center flex-col'>
                  <span className='text-2xl font-semibold'>
                    <CountUp end={12} />
                  </span>
                  <h4 className='font-bold text-gray-500 text-sm'>
                    Experience
                  </h4>
                </div>
                <div className='flex gap-4 justify-center items-center flex-col'>
                  <span className='text-2xl font-semibold'>
                    <CountUp end={100} />
                  </span>
                  <h4 className='font-bold text-gray-500 text-sm'>
                    Projects Done
                  </h4>
                </div>
              </div>
              <Button className='max-w-max py-3.5 transition duration-300 px-8 cursor-pointer hover:-translate-y-1'>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </NoBgContainer>

      <NoBgContainer>
        <MentorsSection />
      </NoBgContainer>


      <NoBgContainer>
        <TestomonialSection />
      </NoBgContainer>


      
        <Voucher voucherName="Our Newsletters" voucherBtn="Subscribe" />
      
    </>
  );
};

export default About;
