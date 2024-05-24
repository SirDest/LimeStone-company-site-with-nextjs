import React from "react";
import Contact from "./Contact";
import Header from "../components/Header/Header";

const ContactPage = () => {
  return (
    <div className='bg-lime-500'>
      <Header />
      <div className='p-[100px]'>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
