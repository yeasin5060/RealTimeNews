import React, { useState } from 'react'
import { pupolarNewsData } from '../assets/assets'
import { Link } from 'react-router-dom'

const CategoryPopulerNews = () => {
    const [popularNewsDatas , setPopularNewsDatas] =useState(pupolarNewsData)
  return (
     <div className="px-4 md:px-8 w-full pb-8">
        <div className="w-full flex flex-col gap-[14px]">
            <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                Popular news
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
                {
                    popularNewsDatas.map((news, index) => (
                        <div key={index} className="bg-white shadow">
                            <div className="relative group overflow-hidden">
                                <img
                                src={news.image}
                                alt="image"
                                className="group-hover:scale-[1.1] transition-all duration-[1s] w-full h-[250px]"
                                />
                                <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300" />
                                <div className="absolute left-5 bottom-3 flex justify-start items-start flex-col text-white font-semibold gap-1">
                                    <div className="flex gap-2">
                                        {/*
                                            news.categories.map((cat, i) => (
                                                <div
                                                    key={i}
                                                    className="px-[6px] py-[2px] rounded-xs text-[13px] bg-[#c80000]"
                                                >
                                                    {cat}
                                                </div>
                                            ))
                                        */}
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <Link
                                href={news.link}
                                className="text-md font-semibold text-[#333333] hover:text-[#c80000]"
                                >
                                {news.title}
                                </Link>
                                <div className="flex gap-2 text-xs text-slate-600 mt-1">
                                    <span>{news.date} / </span>
                                    <span>{news.author}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CategoryPopulerNews