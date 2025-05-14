import React from 'react'
import Heading from '../utils/Heading'
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

  //footer image array
const Footer = () => {
  const footerImg = [
    footerimgone,
    footerimgtwo,
    footerimgthree,
    footerimgfour,
    footerimgfive,
    footerimgsix,
    footerimgseven,
    footerimgeight,
    footerimgnine
]
      //footer news array  
const footerNews = [
    {
      href: "/",
      img: footerimgone,
      title: "Polio-free certification of the WHO South-East Asi..",
      date: "October 10, 2023",
      author: "Sabbir Islam",
    },
    {
      href: "/",
      img: footerimgtwo,
      title: "Kusal Mendis, Sadeera Samarawickrama set Pakistan ..",
      date: "October 10, 2023",
      author: "Samim Islam",
    },
    {
      href: "/",
      img: footerimgthree,
      title: "Dawid Malan The consistent one among freaks..",
      date: "October 10, 2023",
      author: "Samim Islam",
    },
    {
      href: "/",
      img: footerimgfour,
      title: "Avalanche education, workshops on tap..",
      date: "October 10, 2023",
      author: "Anamul Islam",
    },
  ]
  return (
    <div className='bg-[#1e1919]'>
      <div className='container'>
        <div className="px-4 md:px-8 py-10 w-full gap-12 grid lg:grid-cols-4 grid-cols-1">
        {/* Column 1: Logo + Text */}
        <div className="w-full flex flex-col gap-[14px]">
          <Heading tag='h1' value='Real Time News' className='text-red-600 text-[26px] font-bold uppercase'/>
          <Heading tag='h2' value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book" className="text-slate-300"/>
            
          
          <Heading tag='h2' value=" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur." className="text-slate-300"/>
        </div>

        {/* Column 2: Gallery */}
        <div className="w-full flex flex-col gap-[14px]">
          <div className="text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
            Gallery
          </div>
          <div className="grid grid-cols-3 gap-2">
            {footerImg.map((img, i) => (
              <img
                key={i}
                className="h-[90px] w-full"
                src={img}
                alt="image"
              />
            ))}
          </div>
        </div>

        {/* Column 3: Category */}
        <div className="w-full flex flex-col gap-[14px]">
          <div className="text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
            Category
          </div>
          <ul className="flex flex-col justify-start items-start text-sm gap-3 text-white pt-3">
            <li><Link to="/news/category/Travel">Travel (5)</Link></li>
            <li><Link to="/news/category/Technology">Technology (5)</Link></li>
            <li><Link to="/news/category/Health">Health (2)</Link></li>
            <li><Link to="/news/category/Education">Education (5)</Link></li>
            <li><Link to="/news/category/Sports">Sports (5)</Link></li>
          </ul>
        </div>

        {/* Column 4: Recent News */}
        <div className="w-full flex flex-col gap-[14px]">
          <div className="text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
            Recent news
          </div>
          <div className="grid grid-cols-1 gap-4 pt-3">
            {footerNews.map((news, i) => (
              <div key={i} className="flex gap-2">
                <div className="relative group overflow-hidden w-[90px] h-[85px]">
                  <Link to={news.href} className="w-[90px] h-[85px] block">
                    <img
                      className="group-hover:scale-[1.1] transition-all duration-[1s] w-full h-full"
                      src={news.img}
                      alt="image"
                    />
                  </Link>
                  <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300"></div>
                </div>
                <div className="flex w-[calc(100%-95px)] flex-col gap-1 text-white">
                  <Link to={news.href} className="text-sm font-semibold hover:text-[#c80000]">
                    {news.title}
                  </Link>
                  <div className="flex gap-2 text-xs">
                    <span>{news.date} / </span>
                    <Heading tag='span' value={news.author}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer