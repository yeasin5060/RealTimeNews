import React, { useState } from 'react'
import { internationalDatas } from '../assets/assets'
import { Link } from 'react-router-dom'
import Heading from '../utils/Heading'

const International = () => {
    const [iternationData ,setInternationalData] = useState(internationalDatas)
  return (
    <div className="w-full flex flex-col gap-[14px] pr-2 py-8">
        <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
            International
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            {iternationData.map((item, index) => (
            <div key={index} className="bg-white shadow">
                    <div className="relative group overflow-hidden">
                        <div>
                            <img
                            className="group-hover:scale-[1.1] h-[280px] sm:h-[320px] transition-all duration-[1s] w-full"
                            src={item.img}
                            alt="image"
                            />
                        </div>
                        <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300" />
                            <div className="absolute left-5 bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-2">
                                <div className="flex gap-2">
                                    <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
                                        {item.category}
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="px-5 py-4 flex flex-col gap-2">
                        <Link
                            className="text-md font-semibold text-[#333333] hover:text-[#c80000]"
                            to={item.href}
                        >
                            {item.title}
                        </Link>
                        <div className="flex gap-2 text-xs text-slate-600">
                            <span>{item.date} / </span>
                            <span>{item.author}</span>
                        </div>
                        <Heading tag='p' value={item.description} className="text-sm text-slate-600"/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default International