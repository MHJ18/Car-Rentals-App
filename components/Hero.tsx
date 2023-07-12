"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const onClick = (e: React.PointerEvent<HTMLButtonElement>): void => {
    console.log(e);
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x]">
        <h1 className="hero__title uppercase">
          Find, Book or rent a Car —quickly and easily !
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title={"Explore Cars"}
          onClick={onClick}
          styles={"bg-primary-blue text-white rounded-full mt-10"}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Cars image hero"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
