"use client";
import { signIn } from "next-auth/react";
import useRegisterModal from "./hooks/useRegisterModal";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative bg-white">
      <main className=" items-center fixed top-0 left-0 right-0 px-5 bg-white border-b-2">
        <div className="py-2 flex justify-between items-center box-border">
          <Image
            src="/logo.svg"
            alt="logo"
            width={108}
            height={40}
            className="object-contain"
          />
          <button
            onClick={registerModal.onOpen}
            className="p-[10px] rounded-md bg-primary text-white text-[16px] leading-[19px]"
          >
            Empecemos
          </button>
        </div>
      </main>

      <hr className="  bg-gray-100 border-2 rounded  dark:bg-gray-700" />
    </div>
  );
}
