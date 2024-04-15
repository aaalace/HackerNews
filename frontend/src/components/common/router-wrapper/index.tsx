import { Outlet } from "react-router-dom";
import { Header } from "../header";

export function RouterWrapper() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}