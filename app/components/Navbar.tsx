"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import Avatar from "./Avatar";
import { signOut } from "next-auth/react";
import useRegisterModal from "./hooks/useRegisterModal";
import { useState } from "react";
import { User } from "@prisma/client";
import Button from "./modals/Button";
import { SafeUser } from "../types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  console.log(currentUser);

  return (
    <header className="w-full  absolute z-10 hidden md:block">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={120}
          className="object-contain"
        />
        <Link href="/" className="flex justify-center items-center">
          {currentUser ? (
            <>
              <div className="flex items-center justify-end gap-3 ">
                <Avatar src={currentUser?.image} />
                <CustomButton
                  title="Cerrar Sesión"
                  handleClick={() => signOut()}
                  btnType="button"
                  containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                />
              </div>
            </>
          ) : (
            <>
              {/* <CustomButton
                title="Sign in"
                handleClick={registerModal.onOpen}
                btnType="button"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
              /> */}

              <Button label="Iniciar Sesión" onClick={registerModal.onOpen} />
            </>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
