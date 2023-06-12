"use client";

import Image from "next/image";

// import { CustomButton } from "@components";
import { CustomButton } from ".";
import Button from "./Button";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-primary-200">
          DalE la bienvenida a una naricita fría
        </h1>

        <p className="hero__subtitle">
          Anímate a encontrar el match perfecto para el resto de tu vida, tu
          nuevo mejor amigo y vos lo agradecerán
        </p>

        <Button
          {...{
            text: "Empecemos →",
            image: "",
            colorOfButton: "orange",
            classes: "px-[20px] py-[16px] w-[161px] h-[45px] my-[32px]",
          }}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.svg" alt="hero" fill className="object-contain" />
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;
