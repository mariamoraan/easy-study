import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext, IAppContext } from '../../App';
import { LOGIN } from '../../routes/routes';
import { LateralMenu } from '../lateral_menu/LateralMenu';
import { lateralMenuLinksGroups } from '../lateral_menu/lateralMenuLinks';
import './Layout.css';

type Props = {
    title: string,
    children?: JSX.Element | JSX.Element[],
}

export const Layout = (props: Props) => {
    const {children} = props;
    const {token, setToken} = useContext(AppContext) as IAppContext;
    if (!token) return <Navigate to={`/${LOGIN}`} />;
    
    return (
        <div className='wrapper'>
            <LateralMenu linksGroups={lateralMenuLinksGroups} />
            <div className="content-wrapper">
                {children}
            </div>
        </div>
    )
}