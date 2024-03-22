import React from 'react'

const Navbar = ({ selectedTab, handleTabClick }) => {
    return (
        <div className="flex justify-between mx-10 my-6 items-center ">

            <div className='bg-gray-200 w-fit p-3 rounded-sm mr-4' onClick={() => handleTabClick('Discussion')}>
                <h1 className='font-bold desktop:text-3xl text-red-400 capitalize tablet:text-sm phones:text-[10px]'>DISSCUSSION FOURM</h1>
            </div>

            <div className="bg-gray-200 w-fit p-3 rounded-sm " onClick={() => handleTabClick('MarketStories')}>
                <h1 className="desktop:text-3xl font-bold text-red-400 capitalize tablet:text-sm phones:text-[10px]">MARKET STORIES</h1>
            </div>
        </div>

    )
}

export default Navbar