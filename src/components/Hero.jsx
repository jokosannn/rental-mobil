"use client";

import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-width mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="text-2xl text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-6"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[400px] md:h-[590px] z-0 xl:pt-36">
          <img src="/hero.png" alt="hero" className="object-contain" />
        </div>

        <div className="absolute top-[400px] xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[450px] md:h-[590px] overflow-hidden" />
      </div>
    </div>
  );
};

export default Hero;
