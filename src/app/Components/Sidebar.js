import React from 'react'
import { leftSideLinks } from '../Constants'
import Image from 'next/image'
import userimg from '../../../public/assets/user.webp'
import { MdNotifications } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaCommentDollar } from "react-icons/fa";

export const Sidebar = () => {
    return (
        <section className='leftsidebar bg-[#1e375f] text-white lg:w-[20%]'>
            <div className='mt-5 px-2 py-2 flex justify-between items-center'>
                <div className='flex justify-center items-center gap-3'>
                    <Image width={30} height={30} src={userimg} className='rounded-full' />
                    <h1 className='cursor-pointer text-[16px] font-semibold'>Hello,User</h1>
                </div>
                <div>
                    <MdNotifications size={30} color='white' />

                </div>
            </div>
            <div className='border border-white w-[100%] m-2'>
            </div>
            <div className='flex w-full flex-1 flex-col gap-6'>

                {
                    leftSideLinks.map((link, index) => {
                        return (
                            <div className='w-full' key={index}>
                                {/* {
                                    link.name === 'Disscussion Fourm' &&
                                    <div>
                                        <MdMessage color='white' />
                                        <p className='cursor-pointer font-semibold'>{link.name}</p>
                                    </div>
                                } */}
                                <div className={`cursor-pointer text-[16px] font-semibold ${link.name === 'Disscussion Fourm' ? 'bg-[#142341]' : <></>} px-5 py-1`}>
                                    <div className='flex gap-1 items-center'>
                                        {link.name === 'Disscussion Fourm' ? <MdMessage size={24} /> : <div></div>}
                                        {link.name === 'Market Stories' ? <FaCommentDollar size={24} /> : <div></div>}
                                        <p className={link.name === 'Disscussion Fourm' || link.name === 'Market Stories' ? '' : 'pl-4'}>{link.name}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </section >
    )
}
