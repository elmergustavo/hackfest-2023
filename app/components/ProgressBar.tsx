interface ProgressBarProps {
    isActive: boolean;
}
export default function ProgressBar({ isActive }: ProgressBarProps) {
    return (
        <div className={`progress-bar ${isActive ? "progress-bar-active" : "progress-bar-inactive"}`}>
        </div>
    )
}