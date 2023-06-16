'use client';
import ProgressBar from "../../components/ProgressBar"
import catBall from "../../resources/images/cat-ball.png"
import arrow from "../../resources/images/right-arrow.png"
import Button from '../../components/Button'
import CardRol from "../../components/CardRol"
import dogAdoption from "../../resources/images/dog-adoption.png"
import catDog from "../../resources/images/cat-dog.png"
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function HomeRol() {
    const router = useRouter();
    return (
        <main className="flex justify-center flex-col my-[17px] mx-[20px] text-left">
            <div className="grid grid-cols-3 gap-x-3 w-full">
                <ProgressBar {...{ isActive: false }} />
                <ProgressBar {...{ isActive: true }} />
                <ProgressBar {...{ isActive: false }} />
            </div>
            <div className="flex mt-[56px] items-end">
                <h1 className="text-left">
                    Escoge tu rol a adoptar
                </h1>
                <Image src={catBall.src} alt="Image of a ball of wool" className='w-[74px]' />
            </div>
            <p className="mt-[16px] mb-[32px]">¿Eres una persona que tiene el deseo de darle la bienvenida a una almita muy especial o eres una persona que sabe de un almita que lo necesita?</p>
            <CardRol {...{ text: "Quiero adoptar", image: dogAdoption.src, classes: "mb-[24px]", alt: "I want to adopt" }} />
            <CardRol {...{ text: "Quiero dar en adopción", image: catDog.src, classes: "mb-[24px]", alt: "I want to give them up for adoption" }} />
            <div className="flex justify-end">
                <div className="flex gap-x-[16px]">
                    <Button {...{ text: "", image: arrow.src, colorOfButton: "full-orange", classes: "px-[19px] py-[13px] w-[56px] h-[40px]", alt: "next", onClick: () => router.push('/register/finished') }} />
                    <Button {...{ text: "Ir al paso anterior", image: "", colorOfButton: "outline-black", classes: "px-[16px] py-[14px] w-[164px] h-[40px]", alt: "", onClick: () => router.push('/register') }} />
                </div>
            </div>
        </main>
    )
}
