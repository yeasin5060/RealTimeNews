import React, { useState } from 'react'
import { sportsData } from '../assets/assets'
import Education from './Education'
import Health from './Health'
import { Link } from 'react-router-dom'
const SportEducationHealth = () => {
    const [sportsDatas , setSportDatas] = useState(sportsData)
  return (
    <div className='bg-white'>
        <div className='container'>
            <div className="px-4 md:px-8 w-full">
                <div className="flex flex-wrap">
                    <div className="lg:w-8/12 w-full">
                        {/* SPORTS SECTION */}
                        <div className="w-full flex flex-col gap-[14px] pr-2">
                            <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                            Sports
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                            {/* Main Sports Card */}
                            <div className="bg-white shadow">
                                <div className="relative group overflow-hidden">
                                    <div>
                                        <img
                                        className="group-hover:scale-[1.1] h-[280px] sm:h-[320px] transition-all duration-[1s] w-full"
                                        src="http://res.cloudinary.com/dpj4vsqbo/image/upload/v1704520951/usfo55zrfbginjxk2apr.webp"
                                        alt="image"
                                        />
                                    </div>
                                <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300"></div>
                                    <div className="absolute left-5 bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-2">
                                        <div className="flex gap-2">
                                        <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">Sports</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 py-4 flex flex-col gap-2">
                                    <Link className="text-md font-semibold text-[#333333] hover:text-[#c80000]" to="/news/Kusal-Mendis,-Sadeera-Samarawickrama-set-Pakistan-daunting-target">
                                        Kusal Mendis, Sadeera Samarawickrama set Pakistan daunting target..
                                    </Link>
                                    <div className="flex gap-2 text-xs text-slate-600">
                                        <span>October 10, 2023 / </span>
                                        <span>Samim Islam</span>
                                    </div>
                                    <p className="text-sm text-slate-600">
                                        Sparkling centuries from Kusal Mendis and Sadeera Samarawickrama helped Sri Lanka post 344/9 in Hyderabad on Tuesday (October 10). Mendis set a record enroute his stunning ton as he brought up three figures off just 65 balls - the fastest by a Sri Lankan in World Cups. He found support at the start from opener Pathum N
                                    </p>
                                </div>
                            </div>

                            {/* Short Sports Cards */}
                            <div className="grid grid-cols-1 gap-3">
                                {
                                    sportsDatas.map((item, idx) => (
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
                                                <Link className="text-sm font-semibold text-[#c80000]" to="/">{item.category}</Link>
                                                <a className="text-sm font-semibold text-[#333333] hover:text-[#c80000]" href="/">{item.title}</a>
                                                <div className="flex gap-2 text-xs text-slate-600">
                                                    <span>{item.date} / </span>
                                                    <span>{item.author}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        </div>

                        {/* HEALTH SECTION */}
                       <Health/>
                </div>

                    {/* EDUCATION SECTION */}
                    <Education/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SportEducationHealth