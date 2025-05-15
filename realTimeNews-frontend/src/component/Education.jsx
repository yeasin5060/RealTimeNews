import React, { useState } from 'react'
import { educationDatas } from '../assets/assets'
import { Link } from 'react-router-dom'

const Education = () => {
    const [ educationData , setEducationData] = useState(educationDatas)
  return (
     <div className="lg:w-4/12 w-full">
      <div className="w-full flex flex-col gap-[14px] pl-2">
        <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
          Education
        </div>
        <div className="grid grid-cols-1 gap-6">
          {/* Main Education Card */}
          <div className="bg-white shadow">
            <div className="relative group overflow-hidden">
              <div>
                <img className="group-hover:scale-[1.1] h-[280px] sm:h-[320px] transition-all duration-[1s] w-full" src="http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696945881/news/g4ua4dcvrq8ymwk4lvse.jpg" alt="image" />
              </div>
              <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300"></div>
              <div className="absolute left-5 bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-2">
                <div className="flex gap-2">
                  <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">Education</div>
                </div>
              </div>
            </div>
            <div className="px-5 py-4 flex flex-col gap-2">
              <Link className="text-md font-semibold text-[#333333] hover:text-[#c80000]" href="/news/Avalanche-education,-workshops-on-tap">
                Avalanche education, workshops on tap..
              </Link>
              <div className="flex gap-2 text-xs text-slate-600">
                <span>October 10, 2023 / </span>
                <span>Anamul Islam</span>
              </div>
              <p className="text-sm text-slate-600">
                Sierra Avalanche Center will hold a California Avalanche Workshop on Oct. 22 at the North Tahoe Event Center in Kings Beach. The event features presenters from multiple avalanche centers, ski patrollers and snow researchers. Its popular motoriz
              </p>
            </div>
          </div>

          {/* Short Education Cards */}
          <div className="grid grid-cols-1 gap-[14px]">
            {educationData.map((item, idx) => (
              <div className="bg-white shadow flex gap-2 p-4" key={idx}>
                <div className="relative group overflow-hidden">
                  <div className="w-full h-full">
                    <img
                      className="group-hover:scale-[1.1] transition-all duration-[1s] w-[160px] lg:w-[100px] h-[93px]"
                      src={item.imgSrc}
                      alt="image"
                    />
                  </div>
                  <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <Link className="text-sm font-semibold text-[#c80000]" href="/">{item.category}</Link>
                  <Link className="text-sm font-semibold text-[#333333] hover:text-[#c80000]" href="/">{item.title}</Link>
                  <div className="flex gap-2 text-xs text-slate-600">
                    <span>{item.date} / </span>
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Education