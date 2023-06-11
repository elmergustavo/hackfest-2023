interface CardRolProps {
    text: string;
    image: string;
    classes: string;
    alt: string;
}

export default function CardRol({ text, image, classes, alt }: CardRolProps) {
    return (
        <button className={`card-rol-css ${classes}`}>
            <span className="card-rol-text mr-[10px]"> {text}</span>
            <img src={image} alt={alt} className="h-[99.9%]" />
        </button>
    )
}