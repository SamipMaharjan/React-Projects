import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    // Nav bar 
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
      <div className='px-2 flex justify-between items-center w-full h-full'>

        {/* Navbar buttons */}
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
         
        </div>

        {/* sign IN and sign up buttons  */}
        <div className='hidden md:flex pr-4'>
            <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
            <button className='px-8 py-3 '>Sign Up</button>
        </div>

        <div className='md:hidden'>
          <FontAwesomeIcon icon={faBars} className='w-5 md:hidden'/>
        </div>
      </div>

      <ul className='absolute bg-zinc-200 w-full px-8'>
          <li className='border-b-2 border-zinc-300 w-full'>Home</li>
          <li className='border-b-2 border-zinc-300 w-full'>About</li>
          <li className='border-b-2 border-zinc-300 w-full'>Support</li>
          <li className='border-b-2 border-zinc-300 w-full'>Platform</li>
          <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>

          <div className='flex flex-col'>
            <button className='bg-transparent text-indigo-600px px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>

          </div>
      </ul>
    </div>
)}
