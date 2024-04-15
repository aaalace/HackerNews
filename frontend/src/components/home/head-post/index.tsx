import styles from "./head-post.module.css"
import { IPost } from "../../../@types/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getDateFormatted } from "../../../utils/getDateFormatted.ts";


type HeadPostProp = {
    post: IPost
}

export function HeadPost({post}: HeadPostProp) {
    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <div className={styles.initData}>
                    <p className={styles.p1}>
                        {getDateFormatted(post.date)}
                    </p>
                    <p className={styles.p2}>{post.name}</p>
                    <hr/>
                    <p className={styles.p3}>@{post.author}</p>
                </div>
                <div className={styles.bottom}>
                    <Link to={`post/${post.id}`} className={styles.goto_button}>
                        Read more
                    </Link>
                    <div className={styles.tmpData}>
                        <FontAwesomeIcon icon={faStar} className={styles.rating_icon}></FontAwesomeIcon>
                        <i>{post.rating}</i>
                    </div>
                </div>
            </div>
            <div className={styles.image_container}>
                <img alt="image" className={styles.image} src="/mock.jpg"></img>
            </div>
        </div>
    )
}