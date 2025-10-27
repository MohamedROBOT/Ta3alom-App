import { useCourses } from "../../Context/CourseContext";
import { useParams } from "react-router-dom";
import NoBgContainer from "../../shared/NoBgContainer";
import {
  Check,
  Clock,
  Dock,
  LockKeyholeIcon,
  Play,
  SignalMedium,
  Star,
} from "lucide-react";
import { Button } from "flowbite-react";

import ReactPlayer from "react-player";
import MyAccordion from "../../shared/MyAccordion";
import CoursesSection from "../../shared/CoursesSection";

const CourseDetails = () => {
  const courses = useCourses();
  const { id } = useParams();
  const selectedCourse = courses.find((course) => course.id === Number(id));

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
      <NoBgContainer>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='flex gap-6 justify-between flex-col border border-gray-300 px-8 py-4 rounded-4xl rounded-tr-none'>
            <h3 className='text-2xl font-semibold'>
              {selectedCourse.courseName}
            </h3>
            <div className='flex items-center justify-between'>
              <span className='text-accent text-2xl font-bold'>
                {selectedCourse.coursePrice} EGP
              </span>
              <span className='flex gap-x-3 font-semibold'>
                {Rating(selectedCourse.courseRate, 15)}{" "}
                {selectedCourse.courseRate}
              </span>
            </div>
            <div
              className='
            flex items-center gap-x-3 border-b pb-4 border-gray-300'>
              <span>
                <SignalMedium color='var(--color-accent)' />
              </span>
              <span className='font-semibold'>
                {selectedCourse.courseLevel}
              </span>
            </div>
            <div
              className='
            flex gap-x-3 items-center border-b pb-4 border-gray-300'>
              <span>
                <Dock color='var(--color-accent)' />
              </span>
              <span className='font-semibold'>
                {selectedCourse.courseLectures}
              </span>
            </div>
            <div
              className='
            flex gap-x-3 items-center border-b pb-4 border-gray-300'>
              <span>
                <Clock color='var(--color-accent)' />
              </span>
              <span className='font-semibold'>20 Hours</span>
            </div>

            <Button className='rounded-full'>Enrolled Now</Button>
          </div>
          <div className='flex flex-col gap-6 m-3 lg:order-first'>
            <div className='flex flex-col gap-6 rounded-4xl overflow-hidden w-full h-[330px]'>
              <ReactPlayer
                style={{ width: "100%", height: "330px" }}
                src='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                config={{
                  youtube: {
                    color: "white",
                  },
                }}
              />
            </div>

            <div className='bg-accent/50 py-4 px-8 rounded-xl'>
              <Button className='rounded-lg ring-0! m-3 cursor-pointer w-full  text-white hover:text-white bg-accent! hover:bg-accent!'>
                Course Information
              </Button>
              <Button className='rounded-lg m-3 ring-0! cursor-pointer w-full bg-transparent! text-black hover:text-white hover:bg-accent!'>
                Content Course
              </Button>
              <Button className='rounded-lg m-3 ring-0! cursor-pointer w-full bg-transparent! text-black hover:text-white hover:bg-accent!'>
                Review
              </Button>
            </div>
          </div>
        </div>
      </NoBgContainer>

      <NoBgContainer>
        <div className='flex flex-col -mt-45 gap-6 text-gray-500'>
          <h3 className='font-bold text-2xl text-black'>Course Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            asperiores mollitia eum tenetur quod optio quidem sunt quas dolorum
            nemo doloribus, nostrum perspiciatis quibusdam cupiditate maiores,
            corporis eligendi aperiam porro error. Labore natus itaque delectus
            ducimus magnam a quod ratione porro amet, neque sit dignissimos
            architecto illum ullam dolorum! Sit, sequi, iusto blanditiis facilis
            minima vel tempora aspernatur numquam, ut nisi voluptas
            exercitationem nobis similique quae deleniti autem! Sapiente quam
            molestiae eum? Esse incidunt officiis numquam architecto, quo rem
            voluptatibus totam, quaerat repellendus soluta animi laudantium
            quod, quia atque beatae? Ipsa, voluptates doloremque. Aliquam enim,
            distinctio vel saepe, rerum aspernatur quidem, exercitationem
            consequuntur obcaecati delectus dolor est ducimus inventore
            expedita! Ipsam accusamus perferendis nihil ut adipisci. Nulla
            facilis blanditiis natus reprehenderit veniam sit velit quos aperiam
            hic rem quaerat modi perspiciatis at laudantium illum, eaque
            nesciunt nam porro harum possimus in molestiae voluptatum vitae
            debitis? Possimus dolore laboriosam ex delectus quis velit adipisci
            hic totam dicta corporis voluptates tempore quia quo error porro
            nulla consequuntur, mollitia unde temporibus magni. Illum sunt
            impedit reiciendis eaque minus numquam, provident possimus quia
            animi mollitia voluptatem eveniet voluptatum at similique aut
            explicabo quae. Atque alias non iste ut reiciendis maxime labore
            iure officiis architecto!
          </p>
          <h3 className='font-bold text-2xl text-black'>Benefit Course</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            asperiores mollitia eum tenetur quod optio quidem sunt quas dolorum
            nemo doloribus, nostrum perspiciatis quibusdam cupiditate maiores,
            corporis eligendi aperiam porro error. Labore natus itaque delectus
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {Array.from({ length: 12 }).map((_, index) => {
              return (
                <div className='flex gap-3 items-center'>
                  <span className='rounded-full  size-4 flex justify-center items-center bg-primary'>
                    <Check size={12} className='text-white' />
                  </span>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              );
            })}
          </div>

          <h3 className='font-bold text-2xl text-black'>Course Content</h3>

          <MyAccordion />

          <CoursesSection />
        </div>
      </NoBgContainer>
    </>
  );
};

export default CourseDetails;
