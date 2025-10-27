import React from 'react'
import heroImg from "../../assets/images/Courses/heroImg.png";
import NoBgContainer from '../../shared/NoBgContainer'
import CoursesSection from '../../shared/CoursesSection'
import TestomonialSection from '../../shared/TestomonialSection'
const Courses = () => {
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
             Courses
            </h2>
            <p className='text-gray-400'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut placeat accusantium sunt, ea odit eum quaerat. Nobis molestiae minima, nihil laborum vitae ipsum. Deleniti veniam numquam aperiam autem nam fugit, minima sunt voluptatem expedita sed exercitationem ipsum quas earum sapiente eaque, alias sit recusandae quasi culpa! Non error vel iste porro officiis laborum culpa suscipit natus! Beatae non hic eaque magnam totam et odio praesentium similique aliquid, vel adipisci.
            </p>
          </div>
        </div>
      </section>

    <NoBgContainer>
    <div className='flex flex-col  gap-y-6'>
        <CoursesSection />
    </div>
    </NoBgContainer>

     <NoBgContainer>
    <div className='flex flex-col  gap-y-6'>
        <TestomonialSection />
    </div>
    </NoBgContainer>
      
    </>
  )
}

export default Courses
