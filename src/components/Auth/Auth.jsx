import React from "react";
import './Auth.css'
const Auth = () => {
  return (
    <div className='flex flex-col gap-6 justify-center bg-gray-50 items-center h-screen'>
      <h2 className='text-4xl font-bold text-accent/50'>Login</h2>
      <div className='w-1/2'>
        <form onSubmit={(e) => e.preventDefault}>
          <div className='relative input-box'>
            <input
              className='w-full peer border-2 outline-0 border-accent rounded-full bg-transparent h-12.5'
              type='email'
              required
            />
            <label className='absolute peer:focus:text-accent peer-valid:text-accent peer-focus:px-1.5 peer-valid:px-1.5  peer-focus:bg-gray-50 peer-valid:bg-gray-50 peer-focus:top-px peer-valid:top-px peer-focus:text-sm peer-valid:text-sm top-1/2 left-5 -translate-y-1/2 transition-all duration-300'>
              Email
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
