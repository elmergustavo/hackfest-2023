"use client";
import ProgressBar from "../../components/ProgressBar";
import cuteCat from "../../resources/images/cute-cat.png";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

export default function HomeRol() {
  if (typeof window !== "undefined") {
    const personRol = localStorage.getItem("personRol");
  }
  const router = useRouter();
  return (
    <main className="flex justify-center flex-col my-[17px] mx-[20px] text-left">
      <div className="grid grid-cols-3 gap-x-3 w-full">
        <ProgressBar {...{ isActive: true }} />
        <ProgressBar {...{ isActive: true }} />
        <ProgressBar {...{ isActive: true }} />
      </div>
      <h1 className="text-left mt-[56px]">¡Yaay!</h1>
      <p className="mt-[16px] mb-[32px]">
        {" "}
        Que genial tenerte listo en la aplicación, a que esperas !{" "}
      </p>
      <p> Ve a hacer que esas colitas se pongan felices ! </p>
      <img src={cuteCat.src} alt="Cute cat" className="my-[32px]" />
      <div className="flex items-center flex-col">
        <Button
          {...{
            text: "¡ Iniciemos la aventura !",
            image: "",
            colorOfButton: "orange",
            classes: "px-[20px] py-[16px] w-[250px] h-[45px]",
            alt: "",
            onClick: () => {
              console.log(personRol);
              if (personRol === "giver") {
                router.push("/");
              } else if (personRol === "adopter") {
                router.push("/matches");
              }
            },
          }}
        />
        <Button
          {...{
            text: "Ir al paso anterior",
            image: "",
            colorOfButton: "outline-black",
            classes:
              "px-[16px] py-[14px] w-[180px] h-[40px] mt-[16px] mb-[62px]",
            alt: "",
            onClick: () => router.push("/onboarding/second-step"),
          }}
        />
        <button
          onClick={() => {
            console.log(localStorage.getItem("personRol"));
          }}
        >
          Probar
        </button>
      </div>
    </main>
  );
}
