interface IRoute {
    path: string;
    label: string;
    params?: string[];
}
const Route: React.FC<IRoute> = (route: IRoute) => {
    return (
        <div>{route.path}</div>
    );
}
export default Route;