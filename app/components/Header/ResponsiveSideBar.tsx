import React, { Dispatch, SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button";
import { MdOutlineArrowForward } from "react-icons/md";
import { headItems } from "../ExportItems";

interface MyProps {
  setSideBar: Dispatch<SetStateAction<boolean>>;
}
const generateClassName = (classes: string[]) => {
  return classes.join(" ");
};
const navBarItems = [
  "px-2",
  "cursor-pointer",
  "text-[20px]",
  "flex",
  "m-auto",
  "w-full",
  "items-center",
  "justify-between",
  "border-l",
  "border-white",
  "hover:border-[#AF8F6F]",
  "ease-in-out",
  "duration-300",
];

const ResponsiveSideBar: React.FC<MyProps> = ({ setSideBar }) => {
  const removeSideBar = () => {
    setSideBar((prev) => !prev);
  };

  return (
    <div className='h-[500px] w-[300px] bg-white flex flex-col text-left py-3 px-5'>
      <div className='flex items-end justify-end text-right w-full text-black'>
        <button onClick={removeSideBar}>
          <IoCloseOutline size={25} />
        </button>
      </div>
      <div className='flex flex-col gap-3 py-2'>
        {headItems.map(({ name, path }) => (
          <a className={generateClassName(navBarItems)} key={path} href={path}>
            {name}
          </a>
        ))}
      </div>
      <div className='w-full mt-3 flex items-center justify-center'>
        <Button href='/contactus' type='button' disabled={false}>
          Get in touch <MdOutlineArrowForward size={15} />
        </Button>
      </div>
    </div>
  );
};

export default ResponsiveSideBar;
