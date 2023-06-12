"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import useRegisterModal from "./hooks/useRegisterModal";

import { useState } from "react";
// import { CustomButton } from "@components";
import { CustomButton } from ".";
// import Button from "./Button";
import Button from "./modals/Button";
const Hero = () => {

  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h2 className="hero__title text-primary-200 text-start">
          Dale la bienvenida a una naricita fría
        </h2>

        <p className="hero__subtitle">
          Anímate a encontrar el match perfecto para el resto de tu vida, tu
          nuevo mejor amigo y vos lo agradecerán
        </p>

        <div className="w-1/2">
        <Button
          label="Empecemos →"
          onClick={registerModal.onOpen}
        />
        </div>

        
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
