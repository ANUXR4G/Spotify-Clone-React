import React from 'react';

const Play1 = ({ onPlayerClick }) => {
  return (
    <svg className="w-10 p-2 bg-green-600 rounded-e-full flex justify-center items-center " viewBox="0 0 60 60" onClick={onPlayerClick}>
        
      <polygon points="0,0 50,30 0,60" />
      
    </svg>
  );
};

export default Play1;