import React from 'react'
import { assets } from "../assets/assets"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 justify-between px-[4%]'>
        <img className='w-36' src={assets.logo} alt="" />
        <button onClick={()=> setToken('')} className='bg-gray-600 text-white px-5 py-2 rounded-full text-xs sm:text-sm'>Log Out</button>
    </div>
  )
}

export default Navbar