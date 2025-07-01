interface ButtonOutlineProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

export const ButtonOutline = ({text, onClick, className}: ButtonOutlineProps) => {

    return (
        <button
            className={`${className} h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100`}
            onClick={onClick}>{text}</button>
    )
}