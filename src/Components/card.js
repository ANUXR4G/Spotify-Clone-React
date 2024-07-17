import React, { useState } from 'react';
import b1 from '../Assets/b1.jpeg';
import b2 from '../Assets/b2.jpeg';
import b3 from '../Assets/b3.jpeg';
import b4 from '../Assets/b4.jpeg';
import Player from './player';

const albums = [
  {
    title: "Jazbaat",
    artist: "Talha Anjum",
    cover: b1,
  },
  {
    title: "Sabar",
    artist: "Jokhay",
    cover: b2,
  },
  {
    title: "Aadat",
    artist: "Talha Yunus",
    cover: b3,
  },
  {
    title: "Shikwa",
    artist: "Talha Yunus",
    cover: b4,
  },
];

const Card = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-[#121212] text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold hover:underline">Jump back in</h2>
        <a href="#" className="text-sm text-gray-400">SEE ALL</a>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start">
        {albums.map((album, index) => (
          <div
            key={index}
            className="p-2 w-full lg:p-2 lg:w-60 sm:w-60"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="bg-[#181818] p-4 rounded-md transition-transform transform hover:scale-95 hover:transition-all">
              <img src={album.cover} alt={album.title} className="w-full h-48 object-cover rounded-e-full" />
              <div className="mt-2 flex flex-row">
                <h3 className="text-lg font-medium">{album.title}</h3>
                {hoveredIndex === index && (
                  <div className='ml-48 lg:ml-20 lg:mt-2'>
                    <Player />
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-400">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;