import React, { useState } from 'react'
import { pupolarNewsData } from '../assets/assets'
import { Link } from 'react-router-dom'

const PupolarNews = () => {
    const [pupolarNews , setPupolarNews] =useState(pupolarNewsData)
  return (  
    <section className="bg-white">
        <div className="container">
            <div className="px-4 md:px-8 w-full pb-8">
                <div className="w-full flex flex-col gap-[14px]">
                    <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                    Popular news
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
                    {pupolarNews.map((news, index) => (
                        <div key={index} className="bg-white shadow">
                            <div className="relative group overflow-hidden">
                                <div>
                                <img
                                    className="group-hover:scale-[1.1] transition-all duration-[1s] w-full h-[250px]"
                                    src={news.image}
                                    alt="image"
                                />
                                </div>
                                <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300" />
                                <div className="absolute left-5 bottom-3 flex justify-start items-start flex-col text-white font-semibold gap-1">
                                    <div className="flex gap-2">
                                        {news.tags.map((tag, idx) => (
                                        <div
                                            key={idx}
                                            className="px-[6px] py-[2px] rounded-xs text-[13px] bg-[#c80000]"
                                        >
                                            {tag}
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <Link
                                className="text-md font-semibold text-[#333333] hover:text-[#c80000]"
                                href={news.link}
                                >
                                {news.title}
                                </Link>
                                <div className="flex gap-2 text-xs text-slate-600">
                                    <span>{news.date} / </span>
                                    <span>{news.author}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default PupolarNews