type Props = {
    children: string | JSX.Element,
    title: string,
    onClick: () => void,
    className?: string,
}

export const Button = (props: Props) => {
    const {children, title, onClick, className = ''} = props;
    return (
        <button 
        className={className}
        title={title}
        onClick={onClick}
        >
            {children}
        </button>
    )
}