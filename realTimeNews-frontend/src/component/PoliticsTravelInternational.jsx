import React from 'react'
import { useState } from 'react'
import { travetDatas } from '../assets/assets'
import { Link } from 'react-router-dom'
import International from './International'
import Politics from './Politics'
const PoliticsTravelInternational = () => {
    const [travelData , setTravelData] = useState(travetDatas)
  return (
    <div className='container'>
        <div className='container'>
            <div className="px-4 md:px-8 w-full mt-5 lg:mt-0">
                <div className="flex flex-wrap flex-row-reverse">
                    <div className="lg:w-8/12 w-full">
                        {/* Travel Section */}
                        <div className="w-full flex flex-col gap-[14px] pr-2">
                            <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                            Travel
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                                <div className="bg-white shadow">
                                    <div className="relative group overflow-hidden">
                                        <div>
                                            <img
                                            className="group-hover:scale-[1.1] h-[280px] sm:h-[320px] transition-all duration-[1s] w-full"
                                            src="http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp"
                                            alt="image"
                                            />
                                        </div>
                                        <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300" />
                                        <div className="absolute left-5 bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-2">
                                            <div className="flex gap-2">
                                                <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">Travel</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-5 py-4 flex flex-col gap-2">
                                        <Link
                                            className="text-md font-semibold text-[#333333] hover:text-[#c80000]"
                                            href="/news/India-gets-its-longest-glass-bridge-in-Vagamon,-Kerala!"
                                        >
                                            India gets its longest glass bridge in Vagamon, Kerala!..
                                        </Link>
                                        <div className="flex gap-2 text-xs text-slate-600">
                                            <span>October 10, 2023 / </span>
                                            <span>Suvro Islam</span>
                                        </div>
                                        <p className="text-sm text-slate-600">
                                            You all must have watched those amusing viral videos, featuring individuals
                                            cautiously traversing glass-bottomed bridges in shorts and reels with, of
                                            course, varying degrees of success.
                                            Now, to bring this experience closer to you, tourists in Kerala can enjoy a
                                            similar adventure, as the nation's lengthiest cantile
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {
                                        travelData.map((item, index) => (
                                            <div key={index} className="bg-white shadow flex gap-2 p-4">
                                                <div className="relative group overflow-hidden">
                                                    <div className="w-full h-full">
                                                    <img
                                                        className="group-hover:scale-[1.1] transition-all duration-[1s] w-[160px] lg:w-[100px] h-[93px]"
                                                        src={item.img}
                                                        alt="image"
                                                    />
                                                    </div>
                                                    <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <Link className="text-sm font-semibold text-[#c80000]" href={item.link}>
                                                    {item.category}
                                                    </Link>
                                                    <Link
                                                    className="text-sm font-semibold text-[#333333] hover:text-[#c80000]"
                                                    href={item.link}
                                                    >
                                                    {item.title}
                                                    </Link>
                                                    <div className="flex gap-2 text-xs text-slate-600">
                                                        <span>{item.date} /</span>
                                                        <span>{item.author}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                            {/* International Section */}
                            <International/>
                                    
                    </div>

                        {/* Politics Sidebar */}
                        <div className="lg:w-4/12 w-full">
                           <Politics/>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PoliticsTravelInternational