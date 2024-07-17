import React from 'react';
import b1 from '../Assets/art1.jpg';
import b2 from '../Assets/art2.jpg';
import b3 from '../Assets/art3.jpg';
import b4 from '../Assets/art4.png';

const albums = [
  {
    title: "Talha Anjum",
    cover: b1,
  },
  {
    title: "Jokhay",
    cover: b2,
  },
  {
    title: "Talha Yunus",
    cover: b3,
  },
  {
    title: "Aleemrk",
    cover: b4,
  },
];

const Artist = () => {
  return (
    <div className="bg-[#121212] text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold hover:underline">Your Favorite Artists</h2>
        <a href="#" className="text-sm text-gray-400">SEE ALL</a>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start">
        {albums.map((album, index) => (
          <div key={index} className="p-2 w-48 sm:w-60">
            <div className="bg-[#181818] p-4 rounded-md transition-transform transform hover:scale-110 hover:transition-all">
              <img src={album.cover} alt={album.title} className="w-full h-48 object-cover rounded-t-full" />
              <div className="mt-2">
                <h3 className="text-lg flex justify-center font-medium">{album.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
