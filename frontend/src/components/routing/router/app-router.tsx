import { useState } from "react";
import { routes } from "../routes";

const Router = () => {
    const [currentRoute, setCurrentRoute] = useState(routes.home);

    const navigateToRoute = (path: string) => {
        setCurrentRoute(path)
    }

    const showCurrentPage = () => {
        switch(currentRoute) {
            case routes.home:
        }
    }
}
export default Router;