interface ButtonProps {
    text: string;
    image: string;
    colorOfButton: string;
    classes: string;
    alt: string;
}

export default function Button({ text, image, colorOfButton, classes, alt }: ButtonProps) {
    return (
        <button className={`${colorOfButton} ${classes}`}>
            {text === "" ? <img src={image} alt={alt} /> : text}
        </button>
    )
}
