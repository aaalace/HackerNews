import styles from "./panel.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateForward } from "@fortawesome/free-solid-svg-icons";

export function Panel({ upd, title } : any) {

    return (
        <div className={styles.panel_container}>
            <h1>{title}</h1>
            <FontAwesomeIcon
                icon={faArrowRotateForward}
                className={styles.reload_button}
                onClick={() => upd()}
            >
            </FontAwesomeIcon>
        </div>
    )
}