import styles from "./header.module.css"
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className={styles.header_container}>
            <Link to="/">Hacker News</Link>
        </div>
    )
}