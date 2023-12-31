import Image from "next/image";
import { useState } from "react";
interface ToggleProps {
  isSelected: boolean;
}

export default function Toggle2({ isSelected }: ToggleProps) {
  // const [isActive, setIsActive] = useState(isSelected);
  // const handleToggle = () => {
  //   setIsActive((prevState) => !prevState);
  // };
  return (
    <>
      {!isSelected ? (
        <div className="min-w-[320px] max-w-[600px] h-36 border border-orange-500 rounded-xl relative overflow-hidden p-4">
          <h2 className="text-left font-semibold text-[#474747]">
            Quiero dar
            <br />
            en adopción
          </h2>
          <Image
            src="/Illustration5-default.png"
            width={161}
            height={128}
            alt="Picture of I want to adopt"
            className="absolute right-[0px] top-[16px]"
          />
        </div>
      ) : (
        <div className="min-w-[320px] max-w-[600px] h-36 border-2 border-orange-500 rounded-xl relative overflow-hidden p-4 bg-[#FFF8F7]">
          <h2 className="text-left font-semibold text-[#AC2008]">
            Quiero dar
            <br />
            en adopción
          </h2>
          <Image
            src="/Illustration5-active.png"
            width={289}
            height={128}
            alt="Picture of I want to adopt"
            className="absolute right-[0px] top-[19px]"
          />
        </div>
      )}
    </>
  );
}
