import Sanja from "../assets/images/Home/Sanja.png";
import Harriet from "../assets/images/Home/Harriet.png";
import Rudy from "../assets/images/Home/Rudy.png";
import Emanuel from "../assets/images/Home/Emanuel.png";

  
  const MentorsSection = () => {

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
      <div className="flex flex-col gap-6 justify-center items-center">
        <h3 className='font-bold   text-3xl'>Our mentor</h3>
        <p className='lg:w-1/2 text-sm font-medium text-gray-500 text-center'>
          Id lacus eget adipiscing ac dolor sollicitudin libero lacus aliquet
          posuere elementum quamlibero lobortis tempor egestas feugiat sem
          varius
        </p>
        <div className='flex flex-row flex-wrap justify-center gap-13 items-center'>
          {courseMentors.map((mentor, index) => {
            return (
              <div
                key={index}
                className='flex flex-col rounded-full overflow-hidden  justify-center relative group items-center gap-y-2'>
                <picture className='border-4 rotate-45  rounded-full border-accent border-l-transparent'>
                  <img
                    src={mentor.mentorImg}
                    alt={mentor.mentorName}
                    className=' -rotate-45 w-full rounded-full'
                  />
                </picture>
                <div className='flex flex-col   text-center transition duration-300 before:bg-gray-500 before:w-full before:h-full before:absolute before:-z-10 before:opacity-50 w-full h-full rounded-full  absolute top-1/2 start-1/2  -translate-x-1/2 translate-y-1/2 group-hover:-translate-y-1/2 justify-center items-center gap-y-2'>
                  <h3 className='font-bold text-white'>{mentor.mentorName}</h3>
                  <span className='w-20 h-0.5 bg-white'></span>
                  <p className='text-sm font-medium text-white'>
                    {mentor.mentorJob}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
  
  export default MentorsSection
  