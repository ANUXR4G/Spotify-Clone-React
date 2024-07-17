import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-row md:flex-row items-center bg-[#181818] p-4 lg:ml-64 fixed bottom-0 lg:w-[80%] justify-center">
      <div className="flex items-center space-x-4">
        <div className="text-white">
          <p className="text-lg font-bold">Master Of Puppets</p>
          <p className="text-sm">Metallica</p>
        </div>
      </div>
      <div className="flex-grow mt-4 md:mt-0 md:ml-4">
        <input
          type="range"
          className="w-full"
          min="0"
          max="435"
        />
        <div className="flex justify-between text-gray-400 text-sm mt-1">
          <span>00:00</span>
          <span>07:15</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-random"></i>
        </button>
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-step-backward"></i>
        </button>
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-play"></i>
        </button>
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-step-forward"></i>
        </button>
        <button className="text-gray-400 hover:text-white">
          <i className="fas fa-redo"></i>
        </button>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <button className="text-gray-400 hover:text-white mx-2">
          <i className="fas fa-volume-up"></i>
        </button>
        <input
          type="range"
          className="w-20"
          min="0"
          max="100"
        />
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <button className="text-gray-400 hover:text-white mx-2">
          <i className="fas fa-expand"></i>
        </button>
      </div>
    </div>
  );
};

export default Footer;
