import React from "react";

const Main = () => {
  return (
    <div className='w-full h-fit grid grid-cols-2 md:grid-cols-4 gap-2'>
      <div className='h-[400px] flex flex-col border'>
        <div className='h-[70%] bg-red-600'></div>
        <div className='h-[30%] bg-black'></div>
      </div>
      <div className='h-[400px] flex flex-col border'>
        <div className='h-[70%] bg-red-600'></div>
        <div className='h-[30%] bg-black'></div>
      </div>{" "}
      <div className='h-[400px] flex flex-col border'>
        <div className='h-[70%] bg-red-600'></div>
        <div className='h-[30%] bg-black'></div>
      </div>{" "}
      <div className='h-[400px] flex flex-col border'>
        <div className='h-[70%] bg-red-600'></div>
        <div className='h-[30%] bg-black'></div>
      </div>{" "}
      <div className='h-[400px] flex flex-col border'>
        <div className='h-[70%] bg-red-600'></div>
        <div className='h-[30%] bg-black'></div>
      </div>
    </div>
  );
};

export default Main;
