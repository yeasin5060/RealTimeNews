import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react'
import { headlineData, recentDatas } from '../assets/assets'
import CategoryPopulerNews from './CategoryPopulerNews'
import {useSelector} from 'react-redux'

const CategoryRoute = () => {
  const educationData = useSelector((state) => state.educationDatas.value);
  const sportData = useSelector((state) => state.sportDatas.value);
  const technologyData = useSelector((state) => state.technologyDatas.value);
  const travelData = useSelector((state) => state.travelDatas.value);
  const healthData = useSelector((state) => state.healthDatas.value);

  const [filteredData, setFilteredData] = useState([]);
  const [recentData, setRecentData] = useState(recentDatas);
    console.log(filteredData);
    console.log(sportData , educationData , travelData , technologyData ,healthData);
    

   /*useEffect(()=>{
     if (educationData[0].category?.toLowerCase()){
        setFilteredData(educationData)
    }
   },[educationData])
    useEffect(() => {
    switch (sportData[0].category?.toLowerCase()) {
      case 'sports':
        setFilteredData(sportData);
        break;
      case 'education':
        setFilteredData(educationData);
        break;
      case 'technology':
        setFilteredData(technologyData);
        break;
      case 'travel':
        setFilteredData(travelData);
        break;
      case 'health':
        setFilteredData(healthData);
        break;
      default:
        setFilteredData([]);
        break;
    }
  }, [educationData, sportData, technologyData, travelData, healthData]);*/

  return (
    <div className='bg-white'>
        <div className='container'>
            <div className="px-4 md:px-8 w-full py-8">
                <div className="w-full flex flex-wrap">
                    {/* Main News Section */}
                    <div className="w-full xl:w-8/12">
                        <div className="pr-0 xl:pr-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Repeat this block for each news item */}
                                {
                                    filteredData.map((item, i) => (
                                        <div key={i} className="bg-white shadow">
                                            <div className="relative group overflow-hidden">
                                                <img
                                                className="group-hover:scale-[1.1] h-[220px] transition-all duration-[1s] w-full"
                                                src={item.img}
                                                alt="image"
                                                />
                                                <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300"></div>
                                                <div className="absolute left-5 bottom-4 flex flex-col text-white font-semibold gap-2">
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
                                                to={item.link}
                                                >
                                                {item.title}
                                                </Link>
                                                <div className="flex gap-2 text-xs text-slate-600">
                                                <span>{item.date} /</span>
                                                <span>{item.author}</span>
                                                </div>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full xl:w-4/12">
                            <div className="pl-0 xl:pl-4 mt-8 xl:mt-0">
                                <div className="flex flex-col gap-8">
                                {/* Search Box */}
                                    <div className="p-4 bg-white">
                                        <div className="flex">
                                            <div className="w-[calc(100%-45px)] h-[45px]">
                                                <input
                                                className="w-full h-full p-2 border border-slate-300 outline-none bg-slate-100"
                                                type="text"
                                                />
                                            </div>
                                            <div className="w-[45px] hover:bg-red-700 cursor-pointer h-[45px] flex justify-center items-center bg-red-600 text-white text-xl">
                                                <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 1024 1024"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recent News */}
                                        <div className="w-full flex flex-col gap-[14px] bg-white pt-4">
                                    <div className="pl-4">
                                        <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                                        Recent news
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        {recentData.map((news, index) => (
                                        <div key={index} className="bg-white shadow flex gap-2 p-4">
                                            <div className="relative group overflow-hidden">
                                            <div className="w-full h-full">
                                                <img
                                                src={news.image}
                                                alt="image"
                                                className="group-hover:scale-[1.1] transition-all duration-[1s] w-[160px] lg:w-[100px] h-[93px]"
                                                />
                                            </div>
                                            <div className="absolute invisible group-hover:visible w-full h-full left-0 top-0 bg-white cursor-pointer transition-all opacity-5 duration-300" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                            <a
                                                href={news.link}
                                                className="text-sm font-semibold text-[#c80000]"
                                            >
                                                {news.category}
                                            </a>
                                            <a
                                                href={news.link}
                                                className="text-sm font-semibold text-[#333333] hover:text-[#c80000]"
                                            >
                                                {news.title}
                                            </a>
                                            <div className="flex gap-2 text-xs text-slate-600">
                                                <span>{news.date} / </span>
                                                <span>{news.author}</span>
                                            </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Categories */}
                                <div className="bg-white p-4">
                                    <div className="w-full flex flex-col gap-[14px]">
                                        <div className="text-xl font-bold text-gray-700 relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                                            Category
                                        </div>
                                        <ul className="flex flex-col justify-start items-start text-sm gap-3 text-gray-600 font-bold pt-3">
                                            <li><Link to="/news/category/Sports">{ `Sport(5)`}</Link></li>
                                            <li><Link to="/news/category/Health">Health (2)</Link></li>
                                            <li><Link to="/news/category/Travel">Travel (5)</Link></li>
                                            <li><Link to="/news/category/Technology">Technology (5)</Link></li>
                                            <li><Link to="/news/category/Education">Education (5)</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <CategoryPopulerNews/>
        </div>
    </div>
  )
}

export default CategoryRoute