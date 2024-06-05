import React from "react";

const Main = () => {
  return (
    <div className='w-full h-screen grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 '>
      <div className='bg-red-600 h-20'></div>
      <div className='bg-orange-600 h-20'></div>
      <div className='bg-blue-600 h-20'></div>
      <div className='bg-green-600 h-20'></div>
      <div className='bg-gray-600 h-20'></div>
      <div className='bg-purple-600 h-20'></div>
    </div>
  );
};

export default Main;
