import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { postsData } from '../Constants';
const Dissfourm = () => {
    return (
        <section className="text-gray-600 body-font w-[100%] tablet:w-[100%]">
            <div className="container px-5 py-12  flex flex-col">
              
                {
                    postsData.map((item, index) => {
                        return (
                            <div key={index} className="p-2 lg:w-full w-full shadow-bottom-right mt-2 rounded-xl">
                                <div className="h-full flex  border-gray-200 border p-4 rounded-lg">
                                    <img alt="team" className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/40x40" />
                                    <div className="flex flex-col w-full">
                                        <div className='flex justify-between items-center'>

                                            <div className='flex items-center gap-4 big-desktop:text-lg desktop:text-sm tablet:text-sm phones:text-[10px] '>
                                                <h2 className="text-gray-900 title-font font-bold big-desktop:text-lg desktop:text-sm tablet:text-sm phones:text-[10px]">{item.name}</h2>
                                                <p className="bg-[#1e375f] w-fit rounded-xl px-2 text-white">{item.heading}</p>
                                            </div>
                                            <p className='text-[#1e375f] font-semibold big-desktop:text-lg desktop:text-sm tablet:text-sm phones:text-[10px]'>{item.postTime}</p>
                                        </div>
                                        <div>
                                            <p className='font-semibold desktop:text-sm tablet:text-sm phones:text-[10px]'>{item.content}</p>
                                        </div>
                                        <div className='flex  justify-between items-center mt-2'>
                                            <div className='flex justify-center items-center gap-1 font-semibold desktop:text-sm tablet:text-sm phones:text-[10px]'><FaRegHeart /> {item.LikeCount}</div>
                                            <div className='flex justify-center items-center gap-1 font-semibold desktop:text-sm tablet:text-sm phones:text-[10px]'><FaEye /> {item.WatchCount}</div>
                                            <div className='flex justify-center items-center gap-1 font-semibold desktop:text-sm tablet:text-sm phones:text-[10px]'><FaRegComment /> {item.commentCount}</div>
                                            <div className='flex justify-center items-center gap-1 font-semibold desktop:text-sm tablet:text-sm phones:text-[10px]'><IoShareSocialOutline /> {item.share}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </section>
    )
}

export default Dissfourm