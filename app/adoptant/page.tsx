import getCurrentUser from "../actions/getCurrentUser";
import Avatar from "../components/Avatar";
import Link from 'next/link'
import arrow from "../resources/images/right-arrow.png";
import dogAdoptant from "../resources/images/dog-adoptant.png";
import Button from "../components/Button";

export default async function HomeRegister() {
    const currentUser = await getCurrentUser();
    return (
        <main className=" mx-[20px] mt-[24px]">
            <div className="flex justify-between">
                <div className="flex space-x-2 justify-start items-center">
                    <Avatar src={currentUser?.image} />
                    <h2>{currentUser?.name}</h2>
                </div>
                <Link href={`/matches/${1}`}><img src={arrow.src} alt="next" className="full-black px-[8px] py-[8px] w-[40px] h-[40px]" /></Link>
            </div>
            <img src={dogAdoptant.src} alt="dog" className="mt-[84px]" />
            <p className="my-[32px]">¡Vamos!, crea tu primer perfil para aquel peludito que necesita encontrar a su mejor amigo en esta vida</p>
            <div className="w-full  flex flex-col items-center">
                <button className="px-[20px] py-[16px] w-[155px] h-[45px] orange">Crear perfil</button>
            </div>
        </main>
    )
}