import {Outlet} from "react-router-dom";
import {Header} from "../Header";

export function RouterWrapper() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}