import React from "react";
import heroImg from "../../assets/images/Contact/contact.png";
import NoBgContainer from "../../shared/NoBgContainer";
import GoogleMapReact from "google-map-react";
import { LocateIcon, Mail, Phone } from "lucide-react";
import { Button, Textarea, TextInput, Select } from "flowbite-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
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
              Contact
            </h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut
              placeat accusantium sunt, ea odit eum quaerat. Nobis molestiae
              minima, nihil laborum vitae ipsum. Deleniti veniam numquam aperiam
              autem nam fugit, minima sunt voluptatem expedita sed
              exercitationem ipsum quas earum sapiente eaque, alias sit
              recusandae quasi culpa! Non error vel iste porro officiis laborum
              culpa suscipit natus! Beatae non hic eaque magnam totam et odio
              praesentium similique aliquid, vel adipisci.
            </p>
          </div>
        </div>
      </section>

      <NoBgContainer>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div style={{ height: "400px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}>
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text='My Marker'
              />
            </GoogleMapReact>
          </div>
          <div className='flex flex-col gap-6 lg:order-first'>
            <h2 className='font-semibold text-3xl'>Contact Us</h2>
            <p className='text-gray-500'>
              Viverra maecenas accumsan lacus vel facilisis volutpat. Faucibus
              purus in massa tempor nec feugiat nisl
            </p>

            <div className='flex flex-col gap-6'>
              <div className='flex items-center gap-6'>
                <span className='p-4 flex justify-center items-center bg-accent rounded-full'>
                  <Phone />
                </span>

                <ul>
                  <li className='font-bold'>Call Us</li>
                  <li>(404) 888 123 456</li>
                  <li>(204) 888 234 674</li>
                </ul>
              </div>
              <div className='flex items-center gap-6'>
                <span className='p-4 flex justify-center items-center bg-accent rounded-full'>
                  <Mail />
                </span>

                <ul>
                  <li className='font-bold'>Email Address</li>
                  <li>info-collab@example.com</li>
                  <li>collab-support@exapmple.com</li>
                </ul>
              </div>
              <div className='flex items-center gap-6'>
                <span className='p-4 flex justify-center items-center bg-accent rounded-full'>
                  <LocateIcon />
                </span>

                <ul>
                  <li className='font-bold'>Reach Us</li>
                  <li>31 Sunset Road, Gales Ferry, 6335 United States</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </NoBgContainer>

      <NoBgContainer>
        <h2 className='mb-6 font-bold text-center text-3xl'>
          Contact Our Support Team to Know What You Want
        </h2>
        <form
          className='flex flex-col gap-4'
          onSubmit={(e) => e.preventDefault()}>
          <div className='flex flex-col gap-4 lg:flex-row justify-center align-center'>
            <div className='w-full'>
              <TextInput
                id='name'
                type='text'
                placeholder='Enter your Name'
                required
                name='name'
                shadow
              />
            </div>
            <div className='w-full'>
              <TextInput
                id='email'
                type='email'
                placeholder='Enter your email'
                required
                shadow
                name='email'
              />
            </div>
          </div>
          <div className='w-full'>
            <TextInput
              id='phone'
              type='tel'
              placeholder='Enter your phone'
              required
              shadow
              name='phone'
            />
          </div>
          <div className='w-full'>
            <Select id='Subjects' required>
              <option value='' disabled selected hidden>
                Choose Your Subject
              </option>
              <option>UI/UX</option>
              <option>Design</option>
              <option>Frontend</option>
              <option>Backend</option>
            </Select>
          </div>
          <div>
            <Textarea
              type='text'
              placeholder='Enter your comment'
              required
              shadow
              name='comment'
            />
          </div>

          <Button
            className='rounded-full ring-0! hover:-translate-y-1 cursor-pointer transition duration-300  lg:max-w-max '
            type='submit'>
            Send!
          </Button>
        </form>
      </NoBgContainer>
    </>
  );
};

export default Contact;
