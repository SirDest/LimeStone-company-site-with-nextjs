import React from "react";
import AboutPage from "./AboutPage";
import Header from "../components/Header/Header";

const About = () => {
  return (
    <div className='h-screen'>
      <Header />
      <div>
        <AboutPage />
      </div>
    </div>
  );
};

export default About;
