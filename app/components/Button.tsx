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
      className='text-[15px] px-5 py-2 bg-[#AF8F6F] text-white ease-in-out duration-300 hover:opacity-90 flex items-center cursor-pointer'
    >
      {children}
    </a>
  );
};

export default Button;
