import React from 'react'
import { marketStories } from '../Constants'
const Marketstories = () => {
    return (
        <section className="text-gray-600 body-font big-desktop:w-[100%] desktop:w-[100%]">
            <div className="container px-5 py-12 mx-auto ">
                {
                    marketStories.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-wrap mt-4  rounded-lg shadow-left-right">
                                <div className="p-4 lg:w-full">
                                    <div className="h-full flex flex-col items-center ">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                                        <div className="w-full">
                                            <h2 className="title-font font-bold big-desktop:text-lg text-gray-900 desktop:text-sm tablet:text-sm">{item.heading}</h2>
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