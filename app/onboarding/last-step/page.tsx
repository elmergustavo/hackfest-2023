'use client';
import ProgressBar from "../../components/ProgressBar"
import cuteCat from "../../resources/images/cute-cat.png"
import Button from '../../components/Button'
import { useRouter } from 'next/navigation';

export default function HomeRol() {
    const router = useRouter();
    return (
        <main className="flex justify-center flex-col my-[17px] mx-[20px] text-left">
            <div className="grid grid-cols-3 gap-x-3 w-full">
                <ProgressBar {...{ isActive: false }} />
                <ProgressBar {...{ isActive: false }} />
                <ProgressBar {...{ isActive: true }} />
            </div>
            <h1 className="text-left mt-[56px]">
                ¡Yaay!
            </h1>
            <p className="mt-[16px] mb-[32px]"> Que genial tenerte listo en la aplicación, a que esperas ! </p>
            <p> Ve a hacer que esas colitas se pongan felices ! </p>
            <img src={cuteCat.src} alt="Cute cat" className='my-[32px]' />
            <div className="flex items-center flex-col">
                <Button {...{ text: "¡ Iniciemos la aventura !", image: "", colorOfButton: "orange", classes: "px-[20px] py-[16px] w-[250px] h-[45px]", alt: "", onClick: () => router.push('/matches') }} />
                <Button {...{ text: "Ir al paso anterior", image: "", colorOfButton: "outline-black", classes: "px-[16px] py-[14px] w-[164px] h-[40px] mt-[16px] mb-[62px]", alt: "", onClick: () => router.push('/register/rol') }} />
            </div>
        </main>
    )
}
