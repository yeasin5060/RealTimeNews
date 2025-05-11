import React from 'react'
import Heading from '../utils/Heading'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-[#333333]'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <Heading tag='p' value='Sunday, May 11, 2025 2:57 PM' className='text-[13px] font-medium text-[#cccccc]'/>
                <div className='flex justify-end items-center gap-2'>
                  <div className='bg-[#ffffff2b] p-5 flex items-center justify-center cursor-pointer'>
                    <FaFacebookF className='text-white text-5' />
                  </div>
                  <div className='bg-[#ffffff2b] p-5 flex items-center justify-center cursor-pointer'>
                    <FaTwitter className='text-white text-5' />
                  </div>
                  <div className='bg-[#ffffff2b] p-5 flex items-center justify-center cursor-pointer'>
                   <FaYoutube className='text-white text-5' />
                  </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header