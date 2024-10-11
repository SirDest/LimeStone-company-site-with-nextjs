import React from "react";
import bgImage from "../../app/assets/images/about-img.jpg";

const AboutPage = () => {
  return (
    <div
      className='w-full min-h-[610px] h-screen py-[50px] px-[20px] flex lg:flex-row flex-col justify-center'
      style={{
        background: `rgba(0,0,0,0.7) url(${bgImage.src})`,
        backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='h-fit w-full py-10 md:px-[280px] px-[100px] flex flex-col text-center gap-2 text-white'>
        <h1 className='text-[50px]'>About Us</h1>
        <p className='text-[15px] md:text-[18px] font-light indent-3 mt-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          aspernatur. Unde aspernatur ad, facilis illo cumque repellendus minima
          eum obcaecati aut velit praesentium atque est magni voluptatibus
          mollitia nostrum vel suscipit perferendis. Placeat amet deleniti
          deserunt tenetur sit fugit omnis explicabo
        </p>
        <p className='text-[15px] md:text-[18px] font-light indent-3 mt-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          aspernatur. Unde aspernatur ad, facilis illo cumque repellendus minima
          eum obcaecati aut velit praesentium atque est magni voluptatibus
          mollitia nostrum vel suscipit perferend
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
