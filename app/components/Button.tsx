import React from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
  href?: string;
}

const Button = ({ children, handleClick, type, disabled, href }: Props) => {
  return (
    <a
      href={href}
      className='text-[15px] w-fit px-5 py-2 border border-[#AF8F6F] bg-transparent text-[#AF8F6F] hover:bg-[#AF8F6F] hover:text-white ease-in-out duration-300 hover:opacity-90 flex items-center cursor-pointer'
    >
      {children}
    </a>
  );
};

export default Button;
