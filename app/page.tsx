import Header from "./components/Header";
import Button from "./components/Button";
import dog from "./resources/images/dog.png";
import cat from "./resources/images/cat.png";
import pets from "./resources/images/pets.png";
import Hero from "./components/Hero";
import Avatar from "./components/Avatar";

export default function Home() {
  return (
    <>
      <div className="block md:hidden mx-[20px]">
        <Header />
        <div className="flex justify-center mt-[56px] flex-col items-center">
          <h1>
            Encuentros cercanos del tipo{" "}
            <span className="text-[#6262DB]">~</span>peludo
          </h1>
          <p className="mt-[32px]">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <Button
            {...{
              text: "Empecemos →",
              image: "",
              colorOfButton: "orange",
              classes: "px-[20px] py-[16px] w-[161px] h-[45px] my-[32px]",
            }}
          />
          <img src={dog.src} alt="Image of a dog" />
          <h2 className="mt-[56px]">Dale la bienvenida a una naricita fría</h2>
          <p className="mt-[32px]">
            Anímate a encontrar el match perfecto para el resto de tu vida, tu
            nuevo mejor amigo y vos lo agradecerán
          </p>
          <Button
            {...{
              text: "¡ Quiero adoptar !",
              image: "",
              colorOfButton: "black",
              classes: "px-[16px] py-[14px] w-[164px] h-[48px] my-[32px]",
            }}
          />
          
          <img src={cat.src} alt="Image of a cat" />
          <h2 className="mt-[56px]">
            ¿Conoces colitas que necesitan de un hogar?
          </h2>
          
          <p className="mt-[32px]">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur.
          </p>
          <Button
            {...{
              text: "¡ Quiero dar en adopción !",
              image: "",
              colorOfButton: "black",
              classes: "px-[16px] py-[14px] w-[228px] h-[40px] my-[32px]",
            }}
          />
          <img src={pets.src} alt="Images of pets" className="mb-[56px]" />
        </div>
      </div>

   

      {/* desktock */}
      <div className="hidden md:block overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-primary to-primary rounded-md filter blur-3xl opacity-50 -z-50" />
        <Hero />
        {/* <Avatar /> */}
      </div>
    </>
  );
}
