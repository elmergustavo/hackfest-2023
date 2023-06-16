"use client";
import ProgressBar from "../../components/ProgressBar";
import catBall from "../../resources/images/cat-ball.png";
import arrow from "../../resources/images/right-arrow.png";
import Button from "../../components/Button";
import CardRol from "../../components/Toggle1";
import dogAdoption from "../../resources/images/dog-adoption.png";
import catDog from "../../resources/images/cat-dog.png";

import lana from "../../resources/images/lana.png";
import dog_one from "../../resources/images/dog_one.png";
import dog_two from "../../resources/images/dog_two.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Toggle1 from "../../components/Toggle1";
import Toggle2 from "@/app/components/Toggle2";
export default function HomeRol() {
  const router = useRouter();
  return (
    <>
      <main className="flex justify-center flex-col my-[32px] mx-[20px]">
        <div className="grid grid-cols-3 gap-x-2 w-full">
          <ProgressBar {...{ isActive: true }} />
          <ProgressBar {...{ isActive: true }} />
          <ProgressBar {...{ isActive: false }} />
        </div>

        <section className="mt-[56px] flex flex-col gap-4">
          <div className="flex items-end">
            <h1 className="text-left">
              Escoge tu rol a adoptar <span className="text-[#6262DB]">~</span>
            </h1>
            <img
              src={catBall.src}
              alt="Image of a ball of wool"
              className="w-[74px]"
            />
          </div>

          <p className="text-[16px] text-[#474747]">
            ¿Eres una persona que tiene el deseo de darle la bienvenida a una
            almita muy especial o eres una persona que sabe de un almita que lo
            necesita?
          </p>
        </section>

        <section className="flex flex-col gap-6 mt-8">
          <Toggle1 />
          <Toggle2 />
        </section>

        <div className="flex justify-end mt-10">
          <div className="flex gap-x-[16px]">
            <Button
              {...{
                text: "Ir al paso anterior",
                image: "",
                colorOfButton: "outline-black",
                classes: "px-[16px] py-[14px] w-[200px] h-[40px]",
                alt: "",
                onClick: () => router.push("/onboarding/first-step"),
              }}
            />
            <Button
              {...{
                text: "",
                image: arrow.src,
                colorOfButton: "full-orange",
                classes: "px-[19px] py-[13px] w-[56px] h-[40px]",
                alt: "next",
                onClick: () => router.push("/onboarding/last-step"),
              }}
            />
          </div>
        </div>
      </main>

      {/* desktop */}
      <div className="hidden md:block overflow-hidden">
        <section className="section-rol">
          <div className="class-fantasma">
            <p>.</p>
          </div>
          <div className="class-rol-title">
            <div className="class-rol-title-img">
              <h1>Escoge tu rol a adoptar</h1>
              <img src={lana.src} alt="" />
            </div>
            <p>
              ¿Eres una persona que tiene el deseo de darle la bienvenida a una
              almita muy especial o eres una persona que sabe de un almita que
              lo necesita?
            </p>
          </div>
          <div className="class-role-section">
            <a className="class-role-section-one">
              <div className="class-role-title2">
                <p>
                  <strong>Quiero</strong>
                </p>
                <p>
                  <strong>adoptar</strong>
                </p>
              </div>
              <img src={dog_one.src} alt="" />
            </a>
            <a className="class-role-section-one">
              <div className="class-role-title2">
                <p>
                  <strong>Quiero dar</strong>
                </p>
                <p>
                  <strong>en adopción</strong>
                </p>
              </div>
              <img src={dog_two.src} alt="" />
            </a>
          </div>
          <div className="class-footer-rol">
            <a className="title-back">
              <p>Ir al paso anterior</p>
            </a>
            <a className="next-img">
              <p>→</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
