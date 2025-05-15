import React from 'react'
import footerimgone from '../assets/footerimgone.jpg'
import footerimgtwo from '../assets/footerimgtwo.jpg'
import footerimgthree from '../assets/footerimgthree.jpg'
import footerimgfour from '../assets/footerimgfour.jpg'
import footerimgfive from '../assets/footerimgfive.jpg'
import footerimgsix from '../assets/footerimgsix.jpg'
import footerimgseven from '../assets/footerimgone.jpg'
import footerimgeight from '../assets/footerimgtwo.jpg'
import footerimgnine from '../assets/footerimgthree.jpg'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Techonology from './Techonology'

const HomeLetestNewsAnbTec = () => {
     const items = [
    {
      img: footerimgone,
      link: "/news/A-mother-daughter-Euro-adventure!",
      tag: "Travel",
      title: "A mother-daughter Euro adventure!",
      date: "October 10, 2023",
      author: "Suvro Islam",
    },
    {
      img: "http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696950820/news/xaab03n06yvlwnvsss31.jpg",
      link: "/news/Access-to-high-quality-vaccines",
      tag: "Health",
      title: "Access to high quality vaccines",
      date: "October 10, 2023",
      author: "Sabbir Islam",
    },
    {
      img: "http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
      link: "/news/India-gets-its-longest-glass-bridge-in-Vagamon,-Kerala!",
      tag: "Travel",
      title: "India gets its longest glass bridge in Vagamon, Ke",
      date: "October 10, 2023",
      author: "Suvro Islam",
    },
    {
      img: "http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952397/news/rbyymawxmojligobjb3i.webp",
      link: "/news/UNESCO-recognises-Ha-Long-Bay-Cat-Ba-Archipelago-as-world-natural-heritage",
      tag: "Travel",
      title: "UNESCO recognises Ha Long Bay-Cat Ba Archipelago a",
      date: "October 10, 2023",
      author: "Suvro Islam",
    },
    {
      img: "http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952161/news/xxghgpef2jo7chwjxuwy.webp",
      link: "/news/Uttarakhand-No-Inner-line-permit-required-to-visit-Milam-glacier",
      tag: "Travel",
      title: "Uttarakhand No Inner-line permit required to visit",
      date: "October 10, 2023",
      author: "Suvro Islam",
    },
    {
      img: "http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696951679/news/btbfqrvjqhso6n842reb.jpg",
      link: "/news/5-beautiful-forests-to-visit-in-Bangladesh",
      tag: "Travel",
      title: "5 beautiful forests to visit in Bangladesh",
      date: "October 10, 2023",
      author: "Suvro Islam",
    },
  ];
  return (
    <section className='bg-white'>
        <div className='container'>
            <div className=" py-8">
                <div className="flex flex-wrap">
                    <div className="lg:w-6/12 w-full">
                        <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2">
                             <div>
                                <ul
                                    className="react-multi-carousel-track"
                                    style={{
                                    transition: "transform 400ms ease-in-out",
                                    overflow: "unset",
                                    transform: "translate3d(-5166px, 0px, 0px)",
                                    }}
                                >
                                    {items.map((item, index) => (
                                    <li
                                        key={index}
                                        data-index={index}
                                        aria-hidden="false"
                                        className={`react-multi-carousel-item ${
                                        index === 6 ? "react-multi-carousel-item--active" : ""
                                        }`}
                                        style={{
                                        flex: "1 1 auto",
                                        position: "relative",
                                        width: "861px",
                                        }}
                                    >
                                        <div className="relative group">
                                            <div className="overflow-hidden">
                                                <img
                                                className="group-hover:scale-[1.1] transition-all duration-[1s] h-[270px] sm:h-[470px] w-full"
                                                src={item.img}
                                                alt="image"
                                                />
                                            </div>
                                            <Link
                                                className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300"
                                                to={item.link}
                                            ></Link>
                                            <div className="absolute left-5 bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-2">
                                                <div className="flex gap-2">
                                                <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
                                                    {item.tag}
                                                </div>
                                                </div>
                                                <h2 className="text-xl">{item.title}</h2>
                                                <div className="flex gap-2 text-sm">
                                                    <span>{item.date} / </span>
                                                    <span>{item.author}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Navigation Header */}
                            <div className="flex justify-between items-center">
                                <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                                    Latest news
                                    </div>
                                        <div className="flex justify-center items-center gap-[3px] text-[#333333]">
                                            <button className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200">
                                            <span>
                                                <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                                </svg>
                                            </span>
                                            </button>
                                            <button className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200">
                                            <span className="text-lg">
                                                <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                                                </svg>
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                         </div>

                    {/* Second Column (Technology cards) would go here... */}
                        <Techonology/>
                     </div>
                </div>
            </div>
        </section>
  )
}

export default HomeLetestNewsAnbTec