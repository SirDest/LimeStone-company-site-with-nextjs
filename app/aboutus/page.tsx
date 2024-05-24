import React from "react";
import AboutPage from "./AboutPage";
import Header from "../components/Header/Header";

const About = () => {
  return (
    <div className='bg-purple-500 h-screen'>
      <Header />
      <div className='p-[100px]'>
        <AboutPage />
      </div>
    </div>
  );
};

export default About;
