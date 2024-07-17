import React from 'react';

const Pause1 = ({ onPlayerClick }) => {
  return (
    <svg className="w-10 p-2 bg-green-600 flex justify-center items-center rounded-e-full" viewBox="0 0 60 60" onClick={onPlayerClick}>
      <polygon points="0,0 15,0 15,60 0,60" />
      <polygon points="25,0 40,0 40,60 25,60" />
    </svg>
  );
};

export default Pause1;