import React, { useState } from 'react';
import { technologyDatas } from '../assets/assets';
import { recentDatas } from '../assets/assets';
import { Link } from 'react-router-dom';

const TechnoRecent = () => {
    const [technologyData ,setTechnologyData] = useState(technologyDatas)
    const [recentData ,setRecentData] = useState(recentDatas)
  return (
    <div className='bg-white'>
        <div className='container'>
            <div className="px-4 md:px-8 w-full pb-8 mt-5 lg:mt-0">
                <div className="flex flex-wrap">
                    {/* Left Column: Technology */}
                    <div className="lg:w-8/12 w-full">
                        <div className="w-full flex flex-col gap-[14px] pr-2">
                            <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                            Technology
                            </div>

                            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                            {/* Main Feature News */}
                                <div className="bg-white shadow">
                                    <div className="relative group overflow-hidden">
                                        <img
                                            className="group-hover:scale-[1.1] h-[280px] sm:h-[320px] transition-all duration-[1s] w-full"
                                            src="http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696939234/news/mkiievwcfnut0qyezxbo.webp"
                                            alt="image"
                                        />
                                        <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300" />
                                            <div className="absolute left-5 bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-2">
                                                <div className="flex gap-2">
                                                <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
                                                    Technology
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="px-5 py-4 flex flex-col gap-2">
                                        <Link
                                            className="text-md font-semibold text-[#333333] hover:text-[#c80000]"
                                            to="/news/EU-sees-'convergence'-with-Japan-on-AI---official"
                                        >
                                            EU sees 'convergence' with Japan on AI - official..
                                        </Link>
                                        <div className="flex gap-2 text-xs text-slate-600">
                                            <span>October 10, 2023 / </span>
                                            <span>Himel Islam</span>
                                        </div>
                                        <p className="text-sm text-slate-600">
                                            TOKYO, Oct 9 (Reuters) - The European Union sees "convergence"
                                            with Japan on thinking about generative artificial intelligence
                                            (AI), a senior official said on Monday...
                                        </p>
                                    </div>
                                </div>

                                {/* Related News Grid */}
                                <div className="grid grid-cols-1 gap-3">
                                    {technologyData.map((item, index) => (
                                    <div key={index} className="bg-white shadow flex gap-2 p-4">
                                        <div className="relative group overflow-hidden">
                                        <img
                                            className="group-hover:scale-[1.1] transition-all duration-[1s] w-[160px] lg:w-[100px] h-[93px]"
                                            src={item.src}
                                            alt="image"
                                        />
                                        <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                        <Link className="text-sm font-semibold text-[#c80000]" to={item.href}>{item.category}</Link>
                                        <Link className="text-sm font-semibold text-[#333333] hover:text-[#c80000]" to={item.href}>{item.title}</Link>
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

                    {/* Right Column: Recent News */}
                    <div className="lg:w-4/12 w-full mt-5 lg:mt-0">
                        <div className="w-full flex flex-col gap-[14px] pl-2">
                            <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                            Recent news
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                {recentData.map((item, index) => (
                                    <div key={index} className="bg-white shadow flex gap-2 p-4">
                                        <div className="relative group overflow-hidden">
                                            <img
                                            className="group-hover:scale-[1.1] transition-all duration-[1s] w-[160px] lg:w-[100px] h-[93px]"
                                            src={item.src}
                                            alt="image"
                                            />
                                            <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Link className="text-sm font-semibold text-[#c80000]" to="/">{item.category}</Link>
                                            <Link className="text-sm font-semibold text-[#333333] hover:text-[#c80000]" to="/">{item.title}</Link>
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
            </div>
        </div>
    </div>
  )
}

export default TechnoRecent