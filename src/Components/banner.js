import React, { useState } from 'react';
import Draggable from 'react-draggable';
import b1 from '../Assets/b1.jpeg';
import b2 from '../Assets/b2.jpeg';
import b3 from '../Assets/b3.jpeg';
import b4 from '../Assets/b4.jpeg';
import b5 from '../Assets/b5.jpeg';
import b6 from '../Assets/b6.jpeg';
import Player from './player';

const albums = [
  { title: 'Jazbaat', image: b1 },
  { title: 'Sabar', image: b2 },
  { title: 'Aadat', image: b3 },
  { title: 'Shikwa', image: b4 },
  { title: 'Humsafar', image: b5 },
  { title: 'Life', image: b6 },
];

const AlbumCard = ({ album }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-[#423d36] rounded-lg overflow-hidden h-20 shadow-lg m-2 transform transition-transform duration-300 hover:scale-95"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={album.image} alt={album.title} className="h-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute bottom-3 p-4 ml-20 text-white">
        <div className='flex flex-row justify-center items-center'>
          <h3>{album.title}</h3>
          {isHovered && (
            <Draggable>
              <div className=' ml-24 lg:ml-20'>
                <Player />
              </div>
            </Draggable>
          )}
        </div>
      </div>
    </div>
  );
};

const Banner = () => (
  <div className="bg-[#121212] p-6">
    <h2 className="text-2xl text-white mb-4">Good morning</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {albums.map((album) => (
        <AlbumCard key={album.title} album={album} />
      ))}
    </div>
  </div>
);

export default Banner;