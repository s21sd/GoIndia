"use client"
import { useState } from 'react';
import { Sidebar } from "./Components/Sidebar";
import Marketstories from "./Components/Marketstories";
import Dissfourm from "./Components/Dissfourm";
import { IoMdArrowDropright } from "react-icons/io";
import Navbar from './Components/Navbar';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    // console.log(showSidebar)
  };

  return (
    <div className="flex min-h-screen">
      {/* {Sidebar compo Here} */}
      {showSidebar && <Sidebar className="w-72 text-white px-6 py-8" />}

      <div className={`fixed top-[45%] ${showSidebar ? 'left-[16%]' : 'left-[1/2]'} cursor-pointer transition-all duration-300 ease-in-out`} onClick={toggleSidebar}>
        <div className="grid place-items-center bg-[#1e375f] py-10 rounded-sm">
          <IoMdArrowDropright color="white" size={20} />
        </div>
      </div>

      {/* {Disscussion compo here} */}
      <div>
        <Navbar />
        <div className='flex'>

          <div className="flex-grow flex">
            <Dissfourm className="w-3/4 bg-gray-100 px-4 py-6" />
          </div>
          {/* {Market compo here } */}
          <Marketstories className="w-full mt-auto" />
        </div>
      </div>
    </div>
  );
}
// import { useState } from 'react';
// import { Sidebar } from "./Components/Sidebar";
// import Marketstories from "./Components/Marketstories";
// import Dissfourm from "./Components/Dissfourm";
// import { IoMdArrowDropright } from "react-icons/io";
// import Navbar from './Components/Navbar';

// export default function Home() {
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [selectedTab, setSelectedTab] = useState('Discussion');

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//     // console.log(showSidebar)
//   };

//   const handleTabClick = (tabName) => {
//     setSelectedTab(tabName);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar Component here */}
//       {showSidebar && <Sidebar className="w-72 text-white px-6 py-8" />}

//       {/* Sidebar Toggle Button here  */}
//       <div className={`fixed top-[45%] ${showSidebar ? 'left-[16%]' : 'left-[1/2]'} cursor-pointer transition-all duration-300 ease-in-out`} onClick={toggleSidebar}>
//         <div className="grid place-items-center bg-[#1e375f] py-10 rounded-sm">
//           <IoMdArrowDropright color="white" size={20} />
//         </div>
//       </div>

//       {/* Navbar and Main Content */}
//       <div className="">
//         <Navbar selectedTab={selectedTab} handleTabClick={handleTabClick} />
//         <div className='flex'>
//           {/* Discussion Forum Component */}
//           {selectedTab === 'Discussion' && (
//             <div className="flex-grow">
//               <Dissfourm className="w-3/4 bg-gray-100 px-4 py-6" />
//             </div>
//           )}
//           {/* Market Stories Component */}
//           {selectedTab === 'MarketStories' && (
//             <Marketstories className="w-full mt-auto" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
