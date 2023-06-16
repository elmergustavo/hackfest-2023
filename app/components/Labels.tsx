interface LabelsProps {
    text: string,
    classes: string;
}

export default function ({ text, classes }: LabelsProps) {
    return (
        <div className={`${classes} labels-card`}>
            {text}
        </div>
    )
}