import Image from "next/image";
interface ButtonProps {
    text: string;
    image: string;
    colorOfButton: string;
    classes: string;
    alt: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, image, colorOfButton, classes, alt, onClick }: ButtonProps) {
    return (
        <button className={`${colorOfButton} ${classes}`} onClick={onClick} type="button">
            {text === "" ? <Image src={image} alt={alt} /> : text}
        </button>
    )
}
