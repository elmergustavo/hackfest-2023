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
      <main className=" items-center fixed top-0 left-0 right-0 px-5 bg-white border-b-4  ">
        <div className="py-4 flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <button
            onClick={registerModal.onOpen}
            className="p-3 rounded-md  bg-primary text-white"
          >
            Empecemos
          </button>
        </div>
      </main>

      <hr className="  bg-gray-100 border-2 rounded  dark:bg-gray-700" />
    </div>
  );
}
