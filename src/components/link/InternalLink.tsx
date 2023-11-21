import { Link } from "react-router-dom";
import './Link.css';

type Props = {
    children: string | JSX.Element,
    to: string,
    className?: string,
}

export const InternalLink = (props: Props) => {
    const {children, to, className = ''} = props;
    return (
        <Link className={`link_base ${className}`} to={to}>{children}</Link>
    )
}