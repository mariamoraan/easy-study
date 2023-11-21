export interface LinkData {
    icon: JSX.Element,
    title: string,
    action: () => void,
    name?: string,
}
export interface LinksGroup {
    title?: string,
    elems: LinkData[],
}
