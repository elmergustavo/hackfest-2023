"use client";

import ProgressBar from "../../components/ProgressBar";
import bone from "../../resources/images/bone.png";
import upload from "../../resources/images/upload.png";
import arrow from "../../resources/images/right-arrow.png";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

export default function HomeRegister() {
  const router = useRouter();
  return (
    <main className="flex justify-center flex-col my-[32px] mx-[20px] text-left">
      <div className="grid grid-cols-3 gap-x-2 w-full">
        <ProgressBar {...{ isActive: true }} />
        <ProgressBar {...{ isActive: false }} />
        <ProgressBar {...{ isActive: false }} />
      </div>

      <section className="mt-[56px] flex flex-col gap-4 relative">
        <h1 className="text-left leading-[120%] w-[210px]">
          Bienvenido a colitas <span className="text-[#6262DB]">~</span>
        </h1>
        <img
          src={bone.src}
          alt="Image of pet bone"
          className="w-[74px] absolute right-0"
        />
        <p className="text-[16px] text-[#474747]">
          Dale un vistazo a tus datos para que todo fluya como los pelos de un
          gato en el aire.
        </p>
      </section>

      <form className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="photo" className="w-full">
            Foto del perfil
          </label>
          <div className="image-upload self-center">
            <label htmlFor="file-input">
              <img src={upload.src} />
            </label>
            <input id="file-input" type="file" name="photo" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            required
            className="input-form"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            placeholder="Escribe tu número celular"
            required
            className="input-form"
            name="phone"
          />
        </div>
        <div className="flex flex-row justify-end mt-10">
          <Button
            {...{
              text: "",
              image: arrow.src,
              colorOfButton: "full-orange",
              classes: "px-[19px] py-[13px] w-[56px] h-[40px]",
              alt: "next",
              onClick: () => router.push("/onboarding/second-step"),
            }}
          />
        </div>
      </form>
    </main>
  );
}
