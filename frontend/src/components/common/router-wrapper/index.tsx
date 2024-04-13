import { Outlet } from "react-router-dom";


export function RouterWrapper() {
    return (
        <div>
            <p>Header</p>
            <Outlet/>
        </div>
    )
}
