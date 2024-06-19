"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Button from "../Button";
import ResponsiveSideBar from "./ResponsiveSideBar";
import { headItems } from "../ExportItems";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleSideBar = () => {
    setSideBar((prev) => !prev);
  };
  const pathname = usePathname();
  // text-[#293241]
  // [#AF8F6F]
  return (
    <div className='w-full fixed text-black bg-white test-[20px] px-6 py-2 h-fit flex justify-between text-center items-center'>
      <a href='/'>LOGO</a>
      <ul className='hidden md:flex flex-row items-center gap-5'>
        {headItems.map(({ name, path }) => (
          <li key={path}>
            {pathname === path ? (
              <a
                href={path}
                className='py-2 border-b ease-in-out duration-300 border-[#AF8F6F]'
              >
                {name}
              </a>
            ) : (
              <a
                href={path}
                className='py-2 border-b hover:border-[#AF8F6F] ease-in-out duration-300 border-transparent'
              >
                {name}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className='hidden md:flex'>
        <Button href='/contactus' type='button' disabled={false}>
          Get in touch <MdOutlineArrowForward size={15} />
        </Button>
      </div>

      <button className='md:hidden block'>
        <IoMenuOutline size={25} onClick={handleSideBar} />
      </button>
      <div
        style={{
          display: !sideBar ? "none" : "flex",
        }}
        className='absolute z-10 top-0 left-0 w-full h-fit md:hidden justify-end bg-transparent backdrop-filter backdrop-blur-sm'
      >
        <ResponsiveSideBar setSideBar={setSideBar} />
      </div>
    </div>
  );
};

export default Header;
