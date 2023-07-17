'use client';

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from 'next-auth/react';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";

// import useRegisterModal from "@/app/hooks/useRegisterModal";
// import useLoginModal from "@/app/hooks/useLoginModal";

import useRegisterModal from "../hooks/useRegisterModal";
import useLoginModal from "../hooks/useLoginModal";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../modals/Button";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });
  
  const onSubmit: SubmitHandler<FieldValues> = 
  (data) => {
    setIsLoading(true);

    signIn('credentials', { 
      ...data, 
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh();
        loginModal.onClose();
      }
      
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  }

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Bienvenido"
        subtitle="¡Ingresa a tu cuenta!"
      />
      <Input
        id="email"
        label="Correo electrónico"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Contraseña"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button 
        outline 
        label="Continuar con Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <div className="
      text-neutral-500 text-center mt-4 font-light">
        <p>¿Primera vez que usas Colitas?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Crea una cuenta</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Iniciar Sesión"
      actionLabel="Continuar"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;