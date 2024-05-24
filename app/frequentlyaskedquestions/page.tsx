import React from "react";
import Header from "../components/Header/Header";
import FaqPage from "./FaqPage";

const Faq = () => {
  return (
    <div className='bg-yellow-600'>
      <Header />
      <div className='p-[100px]'>
        <FaqPage />
      </div>
    </div>
  );
};

export default Faq;
