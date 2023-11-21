type Props = {
    text: string,
    title: string,
    onClick: () => void,
    className?: string,
}

export const TextButton = (props: Props) => {
    const {text, title, onClick, className=''} = props;
    return (
        <button 
        className={className} 
        title={title}
        onClick={onClick}
        >
            {text}
        </button>
    )
}