import React from 'react'
import Heading from '../utils/Heading';
import newslogo from '../assets/newslogo.png';
import newsbaner from '../assets/sample-add.jpg'

const NewsBaner = () => {
  return (
   <div className='bg-[url("/src/assets/newsbaner-bg.jpg")] bg-no-repeat bg-center bg-cover pt-[100px] pb-[70px]'>
        <div className='container'>
            <div className='flex items-center justify-between'>
               <div className='text-left'>
                    <div className='w-[200px] h-[45px]'>
                        <img className='w-[100%] h-[100%]' src={newslogo} alt="not found" />
                    </div>
                    <Heading tag='h3' value='NEWS PORTAL MERN STACK' className='text-[26px] ml-[5px] font-medium text-[#cccccc] uppercase mt-2'/>
               </div>
               <div className='text-left'>
                <img className='max-w-full h-auto object-cover' src={newsbaner} alt="not found" />
               </div>
            </div>
        </div>
    </div>
  )
}

export default NewsBaner