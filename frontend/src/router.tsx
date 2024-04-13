import {createBrowserRouter} from "react-router-dom"
import {RouterWrapper} from "./components/common/router-wrapper";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterWrapper/>,
        children: [
            {
                path: "",
                element: <p>Home</p>
            },
            {
                path: "post/:id",
                element: <p>Post</p>
            },
        ]
    }
])

export default router