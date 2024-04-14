import { createBrowserRouter } from "react-router-dom"
import { RouterWrapper } from "./components/common/router-wrapper";
import { Home } from "./pages/home";
import { Post } from "./pages/post";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterWrapper/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "post/:id",
                element: <Post/>
            },
        ]
    }
])

export default router