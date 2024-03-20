import React from 'react'

const Navbar = () => {
    return (
        <div className="flex  justify-between mx-10 my-6 items-center">

            <div className='bg-gray-200 w-fit p-3 rounded-sm mr-4'>
                <h1 className='font-bold text-3xl text-red-400 capitalize'>DISSCUSSION FOURM</h1>
            </div>

            <div className="bg-gray-200 w-fit p-3 rounded-sm">
                <h1 className="text-3xl font-bold text-red-400 capitalize">MARKET STORIES</h1>
            </div>
        </div>

    )
}

export default Navbar