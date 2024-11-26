import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
       <div>
          <img src={assets.logo} alt="" className='mb-5 w-36' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quidem animi aut repudiandae et optio quasi est! Laudantium, magnam omnis.
          </p>
        </div> 

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 930009834</li>
            <li>contact@fashionforever.com</li>
          </ul>
        </div>



    </div>
            <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyrights 2024 @fashionforward.com -All Rights Reserved</p>
          </div>
          </>
  )
}

export default Footer