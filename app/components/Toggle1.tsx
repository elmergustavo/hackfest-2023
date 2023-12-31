import Image from "next/image";
import { useState } from "react";
interface ToggleProps {
  isSelected: boolean;
}

export default function Toggle1({ isSelected }: ToggleProps) {
  // const [isActive, setIsActive] = useState(isSelected);
  // const handleToggle = () => {
  //   setIsActive((prevState) => !prevState);
  // };
  return (
    <>
      {!isSelected ? (
        <div className="min-w-[320px] max-w-[600px] h-36 border border-orange-500 rounded-xl relative overflow-hidden p-4">
          <h2 className="text-left font-semibold text-[#474747]">
            Quiero
            <br />
            adoptar
          </h2>
          <Image
            src="/Illustration4-default.png"
            width={203}
            height={121}
            alt="Picture of I want to adopt"
            className="absolute right-[0px] top-[23px]"
          />
        </div>
      ) : (
        <div className="min-w-[320px] max-w-[600px] h-36 border-2 border-orange-500 rounded-xl relative overflow-hidden p-4 bg-[#FFF8F7]">
          <h2 className="text-left font-semibold text-[#AC2008]">
            Quiero
            <br />
            adoptar
          </h2>
          <Image
            src="/Illustration4-active.png"
            width={298}
            height={125}
            alt="Picture of I want to adopt"
            className="absolute right-[0px] top-[19px]"
          />
        </div>
      )}
    </>
  );
}
