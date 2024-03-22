"use client"
import { useState } from 'react';
import { Sidebar } from "./Components/Sidebar";
import Marketstories from "./Components/Marketstories";
import Dissfourm from "./Components/Dissfourm";
import { IoMdArrowDropright } from "react-icons/io";
import Navbar from './Components/Navbar';


export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Discussion');


  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);

  };
  return (
    <div className="flex min-h-screen ">
      {/* {Sidebar compo Here} */}
      {showSidebar && <Sidebar className="big-desktop:fixed desktop:fixed tablet:fixed w-72 h-screen text-white px-6 py-8 phones:w-52 " />}

      <div className={`absolute top-[45%] ${showSidebar ? 'big-desktop:left-[16%]' : 'big-desktop:left-0'} ${showSidebar ? 'phones:left-[44%]' : 'phones:left-[calc(-200vw + 72px)]'} ${showSidebar ? 'desktop:left-[18%]' : 'desktop:left-[calc(-200vw + 72px)]'} ${showSidebar ? 'tablet:left-[5%]' : ''} cursor-pointer transition-all duration-300 ease-in-out`} onClick={toggleSidebar}>
        <div div className="grid place-items-center bg-[#1e375f] py-10 ml-1 rounded-sm">
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