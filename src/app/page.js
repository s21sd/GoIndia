"use client"
import { useState } from 'react';
import { Sidebar } from "./Components/Sidebar";
import Marketstories from "./Components/Marketstories";
import Dissfourm from "./Components/Dissfourm";
import { IoMdArrowDropright } from "react-icons/io";
import Navbar from './Components/Navbar';


export default function Home() {
  const [showSidebar, setShowSidebar] = useState(!true);
  const [selectedTab, setSelectedTab] = useState('Discussion');


  const handleTabClick = (tabName) => {
    // console.log(tabName)
    setSelectedTab(tabName);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    // console.log(showSidebar)
  };


  return (
    <div className="flex min-h-screen ">
      {/* {Sidebar compo Here} */}
      {showSidebar && <Sidebar className="w-72 h-screen text-white px-6 py-8 " />}

      <div className={`fixed top-[45%] ${showSidebar ? 'left-[16%]' : 'left-[1/2]'} cursor-pointer transition-all duration-300 ease-in-out`} onClick={toggleSidebar}>
        <div className="grid place-items-center bg-[#1e375f] py-10 ml-1 rounded-sm">
          <IoMdArrowDropright color="white" size={30} />
        </div>
      </div>

      {/* {Disscussion compo here} */}
      <div>
        <Navbar selectedTab={selectedTab} handleTabClick={handleTabClick} />
        <div className='flex w-[100%]'>


          <div className={`flex-grow flex w-[100%] big-desktop:block desktop:block tablet:block  ${selectedTab === 'Discussion' ? '' : 'phones:hidden'}`}>
            <Dissfourm className=" bg-gray-100 px-4 py-6" />
          </div>


          {/* {Market compo here } */}

          <div className={`sm:w-[100%] big-desktop:w-[80%] desktop:w-[100%] big-desktop:block desktop:block tablet:block ${selectedTab === 'MarketStories' ? '' : 'phones:hidden'}`}>
            <Marketstories />
          </div>


        </div>
      </div>
    </div >
  );
}