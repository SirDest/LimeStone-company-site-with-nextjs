import React from "react";
import bgImage from "@/app/assets/images/curioso-photography-33JLhfRuqbk-unsplash.jpg";
import Button from "../Button";

const Landing = () => {
  return (
    <div
      className='w-full min-h-[610px] h-screen py-[40px] px-[20px] lg:p-[80px] flex lg:flex-row flex-col justify-between'
      style={{
        background: `rgba(0,0,0,0.7) url(${bgImage.src})`,
        backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='w-2/3 flex flex-col text-white gap-3'>
        <h1 className='text-left text-[50px] lg:text-[65px] font-semibold font-sans'>
          Premium Limestone for Your Unique Needs
        </h1>
        <p className='text-[15px] font-light'>
          &quot;Discover Quality, Durability, and Aesthetic Appeal with Our
          Limestone Products, Including High-Grade Calcium Agricultural Lime and
          Crushed Limestone.&quot;
        </p>
        <Button href='/contactus' type='button' disabled={false}>
          Contact Us
        </Button>
      </div>
      <div className='lg:w-1/3 w-full h-full justify-center lg:justify-normal hidden md:flex flex-row lg:flex-col py-1 px-16 text-white'>
        <div className='lg:w-full w-fit h-fit flex flex-col gap-2 lg:border-b border-[#AF8F6F] lg:px-2 py-5'>
          <h1 className='text-[22px] font-bold'>Hours</h1>
          <div className='flex flex-col gap-1 w-fit'>
            <div className='flex text-[15px]'>
              <p>Mon - Fri: 7:30 am - 4:00 pm</p>
            </div>
            <div className='flex text-[15px]'>
              <p>Sat: 9:30 am - 3:00 pm</p>
            </div>
            <div className='flex text-[15px]'>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
        <div className='lg:w-full w-fit h-fit flex flex-col gap-2 lg:px-2 px-10 py-5 lg:border-b border-[#AF8F6F] '>
          <h1 className='text-[22px] font-bold'>Service Area</h1>
          <p className='text-[15px]'>Igarra, Edo State</p>
        </div>
        <div className='lg:w-full w-fit h-fit flex flex-col gap-2 lg:px-2 px-1 py-5 '>
          <h1 className='text-[22px] font-bold'>Quarry</h1>
          <div className='flex flex-col'>
            <p className='flex justify-between text-[15px]'>Village Road</p>
            <p className='flex justify-between text-[15px]'>
              255 Village road. Trenches
            </p>
            <p className='flex justify-between text-[15px]'>
              +234 (0) 812 345 6789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
