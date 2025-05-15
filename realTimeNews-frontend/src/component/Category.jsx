import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='bg-white'>
        <div className='container'>
            <div className="bg-white shadow-sm py-4">
                <div className="md:px-8 w-full">
                    <div className="flex">
                        <ol className="inline-flex items-center gap-1 md:gap-3 flex-wrap justify-center">
                            <li className="inline-flex items-center">
                                <Link
                                    className="inline-flex items-center text-sm font-medium text-red-700 hover:text-red-600"
                                    to="/news/category/Technology"
                                >
                                    <svg
                                    className="w-3 h-3 mr-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    >
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg
                                    className="w-3 h-3 text-gray-400 mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                    >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                    </svg>
                                    <Link
                                    className="ml-1 text-sm font-medium text-red-700 hover:text-red-600 md:ml-2"
                                    to="/news/category/Technology"
                                    >
                                    Category
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg
                                    className="w-3 h-3 text-gray-400 mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                    >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                    </svg>
                                    <span className="ml-1 text-sm font-medium text-center text-gray-500 md:ml-2">
                                        Technology
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category