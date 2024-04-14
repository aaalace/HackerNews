import { RouterProvider } from "react-router-dom";
import router from "./router";
import styles from "./App.module.css"
import { Header } from "./components/common/Header";


function App() {

    return (
        <div className={styles.app}>
            <Header/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;