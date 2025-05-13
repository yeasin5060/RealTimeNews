import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-[#c80000] text-white uppercase font-semibold relative'>
      <div className='container'>
        <div className="text-left">
          <div className="px-8 flex justify-between items-center relative h-[48px]">
            <div className="text-3xl  lg:hidden font-blod h-full w-[48px] cursor-pointer flex justify-center items-center  hover:bg-[#00000026] ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            <div className="flex-wrap lg:flex hidden">
              <Link className="px-6 py-[13px] bg-[#00000026]" to="/">
                Home
              </Link>
              <Link className="px-6 py-[13px] " to="/news/category/Education">
                Education
              </Link>
              <Link className="px-6 py-[13px] " to="/news/category/Sports">
                Sports
              </Link>
              <Link className="px-6 py-[13px] " to="/news/category/Travel">
                Travel
              </Link>
              <Link className="px-6 py-[13px] " to="/news/category/Technology">
                Technology
              </Link>
              <Link className="px-6 py-[13px] " to="/news/category/Health">
                Health
              </Link>
            </div>
            <div className="h-full w-[48px]">
              <div className="text-xl  font-blod h-full w-full cursor-pointer flex justify-center items-center  hover:bg-[#00000026] ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                </svg>
              </div>
            </div>
            <div className="absolute hidden lg:block transition-all text-slate-700 z-20 shadow-lg right-[30px] top-[50px] invisible">
              <div className="p-3 bg-white">
                <div className="flex">
                  <div className="w-[calc(100%-45px)] h-[40px]">
                    <input
                      className="w-full h-full p-2 border border-slate-300 outline-none bg-slate-100"
                      type="text"
                    />
                  </div>
                  <div className="w-[45px] hover:bg-red-700 cursor-pointer h-[40px] flex justify-center items-center bg-red-600 text-white text-xl">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar