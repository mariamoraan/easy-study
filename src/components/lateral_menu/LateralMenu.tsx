import "./LateralMenu.css";

interface LinkData {
    icon: JSX.Element,
    title: string,
    action: () => void,
    name?: string,
}
interface LinksGroup {
    title?: string,
    elems: LinkData[],
}

type Props = {
    linksGroups: LinksGroup[]
}

export const LateralMenu = (props: Props) => {
    const {linksGroups} = props;
    return (
        <div className='lateral-bar'>
            {
                linksGroups.map(({title, elems}, index) => (
                    <div className='group' key={title ? title : index}>
                        {title ? <span className='menu-group-title'>{title}</span> : null}
                        {
                            elems.map(({icon, title, name, action}) => (
                                <div key={title} className='link' title={title} onClick={action}>
                                    {icon}
                                    {name ? <span>{name}</span> : null}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}