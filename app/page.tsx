"use client";

import Header from "./components/Header";
import Button from "./components/Button";
import { signIn } from "next-auth/react";
import dog from "./resources/images/dog.png";
import cat from "./resources/images/cat.png";
import pets from "./resources/images/pets.png";
import useRegisterModal from "./components/hooks/useRegisterModal";
import { useState } from "react";
import Hero from "./components/Hero";

export default function Home() {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:hidden mx-[20px] flex gap-14 flex-col">
        <Header />
        <section className="flex flex-col gap-8 items-center mt-14">
          <div className="w-[320px] relative -z-40">
            <h1 className="leading-[120%]">Encuentros cercanos del tipo</h1>
            <h1 className="leading-[120%]">peludo</h1>
            <h1 className="text-[#6262DB] absolute left-[81px] top-[86px] -z-40">
              ~
            </h1>
          </div>
          <div className="flex flex-col gap-0 items-center">
            <p className="leading-[140%] text-center text-[#474747]">
              ¿Estas en busca de un nuevo compañero en tu vida?
            </p>
            <p className="text-[#6262DB] font-semibold leading-[140%] text-center">
              o
            </p>
            <p className="leading-[140%] text-center text-[#474747]">
              ¿Buscas darle un hogar a alguno?
            </p>
          </div>

          <Button
            {...{
              text: "Empieza ahora →",
              image: "",
              alt: "log",
              colorOfButton: "orange",
              classes: "px-[20px] py-[16px] w-[200px] h-[45px]",
              onClick: () => signIn("google", { callbackUrl: "/onboarding/first-step" }),
            }}
          />
          <img src={dog.src} alt="Image of a dog" />
        </section>

        <section className="flex flex-col gap-8 items-center">
          <h2>Dale la bienvenida a una naricita fría</h2>
          <p className="leading-[140%] text-center text-[#474747] text-base">
          ¡No esperes más y embárcate en la búsqueda de la mascota perfecta! 
          Encontrarlo será una experiencia que nunca olvidarás.
          </p>
          <Button
            {...{
              text: "¡ Quiero adoptar !",
              image: "",
              colorOfButton: "black",
              classes: "px-[16px] py-[14px] w-[180px] h-[40px]",
              alt: "",
              onClick: () => signIn("google", { callbackUrl: "/onboarding/first-step" }),
            }}
          />
          <img src={cat.src} alt="Image of a cat" />
        </section>

        <section className="flex flex-col gap-8 items-center">
          <h2>¿Conoces colitas que necesitan de un hogar?</h2>
          <p className="leading-[140%] text-center text-[#474747] text-base">
            No esperes mas!, con Colitas podrás encontrar mas fácil a esa
            persona ideal que necesita esa o esas colitas en su vida
          </p>
          <Button
            {...{
              text: "¡ Quiero dar en adopción !",
              image: "",
              colorOfButton: "black",
              classes: "px-[16px] py-[14px] w-[240px] h-[40px]",
              alt: "",
              onClick: () => signIn("google", { callbackUrl: "/onboarding/first-step" }),
            }}
          />
          <img src={pets.src} alt="Images of pets" className="mb-[24px]" />
        </section>
      </div>

      {/* desktock */}
      <div className="hidden md:block overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-primary to-primary rounded-md filter blur-3xl opacity-50 -z-50" />
        <Hero />
      </div>
    </>
  );
}
