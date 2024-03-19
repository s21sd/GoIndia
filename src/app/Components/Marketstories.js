import React from 'react'
import { marketStories } from '../Constants'
const Marketstories = () => {
    return (
        <section className="text-gray-600 body-font w-[30%]">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex rounded-sm justify-center items-center bg-gray-200 flex-col w-fit text-center mb-4 p-3">
                    <h1 className="text-3xl font-bold  text-red-300 capitalize">MARKET STORIES</h1>
                </div>
                {
                    marketStories.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-wrap mt-4  rounded-lg shadow-left-right">
                                <div className="p-4 lg:w-full md:w-1/2">
                                    <div className="h-full flex flex-col items-center ">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                                        <div className="w-full">
                                            <h2 className="title-font font-bold text-lg text-gray-900">{item.heading}</h2>
                                            <p className="mb-4">{item.content}</p>

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

export default Marketstories