import React, { useState } from 'react'
import { techNewsItems } from '../assets/assets'
import { Link } from 'react-router-dom';
import Heading from '../utils/Heading';

const Techonology = () => {

    const[techNewsItemsData , settechNewsItemsData] = useState(techNewsItems);
    
  return (
    <div className="lg:w-6/12 w-full mt-5 lg:mt-0">
        <div className="w-full flex flex-col gap-[14px] pl-0 lg:pl-2">
            <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
            Technology
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {techNewsItemsData.map((item, index) => (
                    <div key={index} className="relative group">
                    <div className="overflow-hidden">
                        <img
                        className="group-hover:scale-[1.1] transition-all duration-[1s] h-[228px] w-full"
                        src={item.img}
                        alt="image"
                        />
                    </div>
                    <Link className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white      cursor-pointer transition-all opacity-5 duration-300"
                    to={item.link}>
                    </Link>
                    <div className="absolute left-5 bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-2">
                        <div className="flex gap-2">
                            <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
                                {item.tag}
                            </div>
                            </div>
                            <Heading tag='h2' value={item.title} className='text-xl'/>
                            <div className="flex gap-2 text-sm">
                                <span>{item.date} / </span>
                                <span>{item.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default Techonology