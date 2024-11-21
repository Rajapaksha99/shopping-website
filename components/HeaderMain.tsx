import React from 'react';
import { BsSearch } from 'react-icons/bs'; // Import the BsSearch icon

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">logo</div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', color: '#aaa' }} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
