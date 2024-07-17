import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { MdOutlineAddBox } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { GrInstallOption } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open sidebar on small and medium screens */}
      <button
        className="sm:block md:block lg:hidden fixed top-4 left-4 z-30 text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Sidebar */}
      <span className={`fixed z-20 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className='w-full h-16 fixed flex gap-4 items-center justify-between px-8 py-6 bg-black z-0' />
        <span>
          <span className="bg-black fixed text-white h-screen w-64 flex flex-col">
            <span className="flex items-start p-2">
              <img src={logo} alt="Raptify" className="w-20 z-30" />
              <p className='text-3xl font-black mt-5 z-30'>Raptify</p>
            </span>
            <nav className="flex flex-col ml-10 space-y-2">
              <a href="/" className="flex items-center space-x-2 text-lg text-white hover:text-purple-600">
                <span><FaHome /></span>
                <span>Home</span>
              </a>
              <a href="/search" className="flex items-center space-x-2 text-lg text-gray-400 hover:text-white">
                <span><CiSearch /></span>
                <span>Search</span>
              </a>
              <a href="/library" className="flex items-center space-x-2 text-lg text-gray-400 hover:text-white">
                <span><VscLibrary /></span>
                <span>Library</span>
              </a>
            </nav>
            <span className="flex flex-col mt-10 ml-8 space-y-2">
              <a href="/create" className="flex items-center space-x-2 text-lg text-gray-400 hover:text-white">
                <span className=" "><MdOutlineAddBox /></span>
                <span>Create Playlist</span>
              </a>
              <a href="/liked" className="flex items-center space-x-2 text-lg text-gray-400 hover:text-white">
                <span className=" text-purple-600"><MdFavorite /></span>
                <span>Liked Songs</span>
              </a>
            </span>
            <hr className="bg-[#282828] min-h-[1px] h-[1px] mt-2 border-0 mx-6"></hr>
            <span className="mt-auto flex flex-col mb-10 ml-9">
              <a href="/install" className="flex items-center space-x-2 text-lg text-gray-400 hover:text-white">
                <span className="text-white"><GrInstallOption /></span>
                <span>Install app</span>
              </a>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default Sidebar;