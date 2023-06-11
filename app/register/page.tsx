import ProgressBar from "../components/ProgressBar"
import bone from "../resources/images/bone.png"
import upload from "../resources/images/upload.png"
import arrow from "../resources/images/right-arrow.png"
import Button from '../components/Button'

export default function HomeRegister() {
    return (
        <main className="flex justify-center flex-col my-[17px] mx-[20px] text-left">
            <div className="grid grid-cols-3 gap-x-3 w-full">
                <ProgressBar {...{ isActive: true }} />
                <ProgressBar {...{ isActive: false }} />
                <ProgressBar {...{ isActive: false }} />
            </div>
            <div className="flex mt-[56px] items-center">
                <h1 className="text-left">
                    Bienvenido a colitas <span className='text-[#6262DB]'>~</span>
                </h1>
                <img src={bone.src} alt="Image of pet bone" className='w-[74px]' />
            </div>
            <p className="mt-[16px] mb-[32px]">Dale un vistazo a tus datos para que todo fluya como los pelos de un gato en el aire.</p>
            <form>
                <label htmlFor="photo">Foto del perfil</label>
                <div className="image-upload self-center mb-[24px]">
                    <label htmlFor="file-input">
                        <img src={upload.src} />
                    </label>
                    <input id="file-input" type="file" name="photo" />
                </div>
                <label htmlFor="name">Nombre</label>
                <input type="text" placeholder="Escribe tu nombre" required className="mt-[8px] input-form mb-[24px]" name="name" />
                <label htmlFor="phone">Teléfono</label>
                <input type="text" placeholder="Escribe tu número celular" required className="mt-[8px] input-form" name="phone" />
                <div className="flex justify-end">
                    <Button {...{ text: "", image: arrow.src, colorOfButton: "full-orange", classes: "px-[19px] py-[13px] w-[56px] h-[40px] mt-[37px] mb-[32px]", alt: "next" }} />
                </div>
            </form>
        </main>
    )
}
