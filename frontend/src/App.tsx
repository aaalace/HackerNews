import {RouterProvider} from "react-router-dom";
import router from "./router";


function App() {
    const url = import.meta.env.VITE_API_API_URL

    return (
        <div className="app">
            {url}
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;