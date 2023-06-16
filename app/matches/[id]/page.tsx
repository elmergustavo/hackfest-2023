
import arrow from "../../resources/images/right-arrow.png";
import Link from 'next/link'
import catTinder from "../../resources/images/cat-tinder.png";
import Labels from "../../components/Labels";

const MatchesId = async () => {
    return (
        <main >
            <div className="relative">
                <img src={catTinder.src} alt="cat" className="w-full h-[576px]" />
                <div className="absolute top-[24px] mx-[20px]">
                    <Link href={`/matches`}><img src={arrow.src} alt="next" className="full-black px-[8px] py-[8px] w-[40px] h-[40px] rotate-180" /></Link>
                </div>
                <div className="absolute bottom-[16px] mx-[16px]">
                    <span className="card-xl-title mx-[16px]">Maximiliano</span>
                    <div className="flex gap-x-[8px] mx-[16px]">
                        <Labels {...{ text: "2 años", classes: "w-[40px]" }} />
                        <Labels {...{ text: "Pequines", classes: "w-[40px]" }} />
                        <Labels {...{ text: "Macho", classes: "w-[40px]" }} />
                    </div>
                </div>
            </div>
            <div className="mt-[16px] mx-[16px] mb-[8px]">
                <h3 className="h3-card">Sobre mi</h3>
                <p>Max es un perrito cariñoso y enérgico que siempre está dispuesto a jugar y recibir mimos. Es amigable con las personas y se lleva bien con otros perros. Le encanta salir a pasear y explorar su entorno. Es inteligente y responde bien a las órdenes básicas de entrenamiento. Además, es leal y estará agradecido de formar parte de una familia amorosa que le brinde atención y cuidado</p>
            </div>
        </main>
    );
};

export default MatchesId;
