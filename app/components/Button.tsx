interface ButtonProps {
    text: string;
    image: string;
    colorOfButton: string;
    classes: string;
}

export default function Button({ text, image, colorOfButton, classes }: ButtonProps) {
    return (
        <button className={`${colorOfButton} ${classes}`}>
            {text === "" ? image : text}
        </button>
    )
}
