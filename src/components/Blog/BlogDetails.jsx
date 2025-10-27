import React, { useState } from "react";
import heroImg from "../../assets/images/Blog/BlogHeroImg.png";
import { Link } from "react-router-dom";
import NoBgContainer from "../../shared/NoBgContainer";
import commentImg from "../../assets/images/Blog/commentImg.png";
import blogDetails from "../../assets/images/Blog/blogdetails.png";
import {
  Button,
  Checkbox,
  Label,
  Textarea,
  TextInput,
  Toast,
} from "flowbite-react";
import { Send } from "lucide-react";

const BlogDetails = () => {
  const [comment, setComment] = useState([
    {
      name: "Sara Ahmed",
      comment:
        "Dream Palace completely changed how I approach design. The UI/UX course was practical, clear, and packed with real-world examples. I landed my first freelance project two weeks after finishing it!",
    },
    {
      name: "Abeer Elwan",
      comment:
        "The instructors here genuinely care about your progress. I started as a beginner in web development and now I can build responsive websites confidently using React and Tailwind CSS.",
    },
    {
      name: "Mohamed Ahmed",
      comment:
        "One of the best learning experiences I’ve ever had! The hands-on projects helped me understand concepts deeply, and the support from the community was fantastic. Highly recommend it!",
    },
  ]);

  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState(null);
  const handleNext = () => {
    setIndex((next) => (next + 1) % comment.length);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name || formData.message) {
      setToast("success");
    }

    // hide toast after 3s
    setTimeout(() => setToast(null), 3000);
    setComment([...comment, formData]);
    setFormData({ name: "", phone: "", comment: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroImg})` }}
        className={`w-full text-white h-80 flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat`}>
        <h1 className='font-bold text-3xl'>Blog</h1>
        <h2 className='text-bbold text-2xl'>
          <Link to={"/"} className='cursor-pointer'>
            Home
          </Link>
          &gt;{" "}
          <span>
            <Link to={"/blog"}>Blog</Link>
          </span>
          &gt; <span className='text-accent'>Blog Details</span>
        </h2>
      </div>

      <NoBgContainer>
        <div className='flex flex-col gap-6 text-center'>
          <p className='text-2xl text-black'>
            We have added new features to Dream Palace – Unique features of our
            programs
          </p>
          <picture className='w-full'>
            <img src={blogDetails} alt='new features' className='w-full' />
          </picture>

          <p className='text-gray-400 text-start'>
            I almost couldn’t believe it was real! For my first test I had
            generate some website copy for me. I provided about 50 words to
            describe my business along with my business name. generated two
            variants of copy each with several paragraphs of professional
            sounding copy. I immediately shared the results with a friend who
            couldn’t believe it was written by an AI. is worth every penny and
            then some. Describe my business along with my business name.
            generated two variants of copy each with several paragraphs of
            professional sounding copy. I immediately shared the results with a
            friend who couldn’t believe it was written by an AI. is worth every
            penny and then some!
          </p>
          <h3 className='font-bold text-3xl'>
            Enhancing Your E-commerce Store With AI Writing Assistants
          </h3>
          <p className='text-gray-400 text-start'>
            I immediately shared the results with a friend who couldn’t believe
            it was written by an AI. is worth every penny and then some.
            Describe my business along with my business name. generated two
            variants of copy each with several paragraphs of professional
            sounding copy. I immediately shared the results with a friend who
            couldn’t believe it was written by an AI. is worth every penny and
            then some!
          </p>

          <div className='flex items-center mt-12 gap-x-6 px-14 py-10 shadow-sm rounded-3xl'>
            <img src={commentImg} alt='yourImg' />
            <div className='text-start'>
              <h3 className='text-2xl font-bold'>{comment[index].name}</h3>
              <p className='text-gray-400'>{comment[index].comment}</p>
            </div>
          </div>

          <Button
            onClick={handleNext}
            className='rounded-full ring-0! hover:-translate-y-1 cursor-pointer transition duration-300 bg-accent! lg:max-w-max lg:ms-auto'>
            Next Comment
          </Button>

          <h3 className='text-3xl font-bold text-start'>
            Write your comment Here
          </h3>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 lg:flex-row justify-center align-center'>
              <div className='w-full'>
                <TextInput
                  id='name'
                  type='text'
                  placeholder='Enter your Name'
                  required
                  name='name'
                  shadow
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='w-full'>
                <TextInput
                  id='phone'
                  type='tel'
                  placeholder='Enter your phone'
                  required
                  shadow
                  name='phone'
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
            </div>
            <div>
              <Textarea
                type='text'
                placeholder='Enter your comment'
                required
                shadow
                name='comment'
                onChange={handleChange}
                value={formData.comment}
              />
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='agree' />
              <Label htmlFor='agree' className='flex text-gray-400!'>
                 Save my name, email, and website in this browser for the next
                time I comment.
              </Label>
            </div>
            <Button
              className='rounded-full ring-0! hover:-translate-y-1 cursor-pointer transition duration-300  lg:max-w-max '
              type='submit'>
              Post a comment
            </Button>
          </form>
        </div>
        {toast === "success" && (
          <div className='fixed top-5 right-5 z-50'>
            <Toast>
              <Send className='h-5 w-5 text-cyan-600' />
              <div className='pl-4 text-sm font-normal'>
                Message sent successfully.
              </div>
            </Toast>
          </div>
        )}
      </NoBgContainer>
    </>
  );
};

export default BlogDetails;
