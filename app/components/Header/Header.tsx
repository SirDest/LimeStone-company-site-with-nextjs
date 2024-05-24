"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import Button from "../Button";

const headItems = [
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Quarry", path: "/quarry" },
  { name: "FAQ", path: "/faq" },
  //   { name: "Contact", path: "/contact" },
];
const Header = () => {
  const pathname = usePathname();
  return (
    <div className='w-full fixed bg-white border-b text-[#293241] test-[20px] px-6 py-2 h-fit flex justify-between text-center items-center'>
      <a href='/'>LOGO</a>
      <div className='flex flex-row items-center gap-5'>
        {headItems.map(({ name, path }) => (
          <div key={path}>
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
                className='py-2 border-b hover:border-black ease-in-out duration-300 border-transparent'
              >
                {name}
              </a>
            )}
          </div>
        ))}
        <Button href='/contact' type='button' disabled={false}>
          Get in touch <MdOutlineArrowForward size={15} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
