import { Button } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [inputRegisterChange, setInputRegisterChange] = useState({
    userName: "",
    password: "",
    rePassword: "",
    email:"",
    phone: ""
  });

 
  function handleRegisterChange(e) {
    const { name, value } = e.target;
    setInputRegisterChange({ ...inputRegisterChange, [name]: value });
  }
  return (
   <div className="flex h-screen items-center">
  
     <div className=' flex  w-full flex-col justify-center gap-12 items-center'>
      <h2 className='text-accent/80 text-4xl font-bold'>Register Form</h2>
      <form className='w-full' onSubmit={(e) => e.preventDefault()}>
        <div className='md:max-w-sm mx-auto flex flex-col gap-6'>
          <div className='relative'>
            <input
              onChange={handleRegisterChange}
              type='text'
              name='userName'
              value={inputRegisterChange.userName}
              required
              className='peer outline-0 w-full border transition-all duration-300 px-4 h-10 
               focus:border-accent border-gray-500 rounded-full'
            />
            <label
              className={`absolute left-6 -translate-y-1/2 text-gray-500 
                transition-all duration-300 
                peer-focus:top-0 peer-focus:text-accent 
                peer-valid:top-0 peer-valid:text-accent
                peer-valid:bg-white peer-focus:bg-white

                ${
                  inputRegisterChange.userName ? "top-0" : "top-1/2"
                } pointer-events-none`}>
              Username
            </label>
          </div>
          <div className='relative'>
            <input
              onChange={handleRegisterChange}
              type='text'
              required
              name='password'
              value={inputRegisterChange.password}
              className='peer outline-0 w-full border transition-all duration-300 px-4 h-10 
               focus:border-accent border-gray-500 rounded-full'
            />
            <label
              className={`absolute left-6 -translate-y-1/2 text-gray-500 
                transition-all duration-300 
                peer-focus:top-0 peer-focus:text-accent 
                peer-valid:top-0 peer-valid:text-accent
                peer-valid:bg-white peer-focus:bg-white

                ${
                  inputRegisterChange.password ? "top-0" : "top-1/2"
                } pointer-events-none`}>
              Password
            </label>
          </div>
          <div className='relative'>
            <input
              onChange={handleRegisterChange}
              type='text'
              required
              name='rePassword'
              value={inputRegisterChange.rePassword}
              className='peer outline-0 w-full border transition-all duration-300 px-4 h-10 
               focus:border-accent border-gray-500 rounded-full'
            />
            <label
              className={`absolute left-6 -translate-y-1/2 text-gray-500 
                transition-all duration-300 
                peer-focus:top-0 peer-focus:text-accent 
                peer-valid:top-0 peer-valid:text-accent
                peer-valid:bg-white peer-focus:bg-white

                ${
                  inputRegisterChange.rePassword ? "top-0" : "top-1/2"
                } pointer-events-none`}>
              Confirm your password
            </label>
          </div>
          <div className='relative'>
            <input
              onChange={handleRegisterChange}
              type='text'
              required
              name='email'
              value={inputRegisterChange.email}
              className='peer outline-0 w-full border transition-all duration-300 px-4 h-10 
               focus:border-accent border-gray-500 rounded-full'
            />
            <label
              className={`absolute left-6 -translate-y-1/2 text-gray-500 
                transition-all duration-300 
                peer-focus:top-0 peer-focus:text-accent 
                peer-valid:top-0 peer-valid:text-accent
                peer-valid:bg-white peer-focus:bg-white

                ${
                  inputRegisterChange.email ? "top-0" : "top-1/2"
                } pointer-events-none`}>
              Email
            </label>
          </div>
          <div className='relative'>
            <input
              onChange={handleRegisterChange}
              type='text'
              required
              name='phone'
              value={inputRegisterChange.phone}
              className='peer outline-0 w-full border transition-all duration-300 px-4 h-10 
               focus:border-accent border-gray-500 rounded-full'
            />
            <label
              className={`absolute left-6 -translate-y-1/2 text-gray-500 
                transition-all duration-300 
                peer-focus:top-0 peer-focus:text-accent 
                peer-valid:top-0 peer-valid:text-accent
                peer-valid:bg-white peer-focus:bg-white

                ${
                  inputRegisterChange.phone ? "top-0" : "top-1/2"
                } pointer-events-none`}>
              Phone 
            </label>
          </div>

          <div className='flex flex-col gap-3 items-center justify-center'>
            <Button className='bg-accent! w-full cursor-pointer transition duration-300 hover:-translate-y-1 ring-0!  rounded-full'>
              Sign up
            </Button>
            <div className='text-sm text-gray-600 flex flex-row items-center gap-x-2 text-center'>
              <p>Already have an account?</p>
              <Button
              as={Link}
                to={"/login"}
                className='text-accent p-0 cursor-pointer bg-transparent! font-medium hover:underline transition-colors'>
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Register;
