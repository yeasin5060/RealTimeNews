import React from 'react'
import { headlineData, headlineDataOn } from '../assets/assets'
import {Link} from 'react-router-dom'
import Marquee from "react-fast-marquee";


const Headline = () => {
  return (
    <div className='text-left'>
        <div className='container'>
            <div className="bg-white shadow flex">
                <div className="flex md:w-[170px] w-full bg-[#dddddd] relative after:absolute after:bg-[#dddddd] after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30">
                    <div className="md:pl-8 pl-4 w-full py-2 flex justify-start items-center gap-1">
                    <span className="pt-1">
                        <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="30px"
                            height="30px"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid"
                            style={{
                            margin: "auto",
                            background: "none",
                            display: "block",
                            shapeRendering: "auto",
                            }}
                        >
                            <circle
                            cx="50"
                            cy="50"
                            r="0"
                            fill="none"
                            stroke="#c80000"
                            strokeWidth="10"
                            >
                            <animate
                                attributeName="r"
                                repeatCount="indefinite"
                                dur="1s"
                                values="0;40"
                                keyTimes="0;1"
                                keySplines="0 0.2 0.8 1"
                                calcMode="spline"
                                begin="0s"
                            />
                            <animate
                                attributeName="opacity"
                                repeatCount="indefinite"
                                dur="1s"
                                values="1;0"
                                keyTimes="0;1"
                                keySplines="0.2 0 0.8 1"
                                calcMode="spline"
                                begin="0s"
                            />
                            </circle>
                            <circle
                            cx="50"
                            cy="50"
                            r="0"
                            fill="none"
                            stroke="#c80000"
                            strokeWidth="10"
                            >
                            <animate
                                attributeName="r"
                                repeatCount="indefinite"
                                dur="1s"
                                values="0;40"
                                keyTimes="0;1"
                                keySplines="0 0.2 0.8 1"
                                calcMode="spline"
                                begin="-0.5s"
                            />
                            <animate
                                attributeName="opacity"
                                repeatCount="indefinite"
                                dur="1s"
                                values="1;0"
                                keyTimes="0;1"
                                keySplines="0.2 0 0.8 1"
                                calcMode="spline"
                                begin="-0.5s"
                            />
                            </circle>
                        </svg>
                        </div>
                    </span>
                    <h2 className="text-[#333333] font-semibold text-lg">Headlines</h2>
                    </div>
                </div>

                <div className="flex md:w-[calc(100%-170px)] w-full">
                    <div className="w-full flex justify-start items-center">
                            <div
                                className="rfm-marquee-container overflow-hidden"
                                style={{
                                "--pause-on-hover": "running",
                                "--pause-on-click": "running",
                                "--width": "100%",
                                "--transform": "none",
                                }}
                            >
                                <div
                                className="rfm-marquee"
                                style={{
                                    "--play": "running",
                                    "--direction": "normal",
                                    "--duration": "79.8895849609375s",
                                    "--delay": "0s",
                                    "--iteration-count": "infinite",
                                    "--min-width": "100%",
                                }}
                                >
                                <div className="rfm-initial-child-container">
                                    {headlineData.map((headline, idx) => (
                                    <div className="rfm-child" style={{ "--transform": "none" }} key={idx}>
                                        <Link
                                        to="#"
                                        className="font-semibold hover:text-[#c80000] pr-12 text-sm py-3 block"
                                        >
                                        {headline}
                                        </Link>
                                    </div>
                                    ))}
                                </div>
                            </div>

                            <div
                            className="rfm-marquee"
                            style={{
                                "--play": "running",
                                "--direction": "normal",
                                "--duration": "79.8895849609375s",
                                "--delay": "0s",
                                "--iteration-count": "infinite",
                                "--min-width": "100%",
                            }}
                            >
                            {headlineDataOn.map((headline, idx) => (
                                <div className="rfm-child" style={{ "--transform": "none" }} key={`marquee-${idx}`}>
                                <Link
                                    to="#"
                                    className="font-semibold hover:text-[#c80000] pr-12 text-sm py-3 block"
                                >
                                    {headline}
                                </Link>
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

export default Headline