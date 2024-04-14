import styles from "./post.module.css"
import { IPost } from "../../../@types/post";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type PostProp = {
    post: IPost
}

export function Post({post}: PostProp) {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <img alt="image" className={styles.image} src="/mock.jpg"></img>
            </div>
            <div className={styles.data}>
                <div className={styles.initData}>
                    <p className={styles.p1}>
                        {post.date.split('T')[0]} | {post.date.split('T')[1].slice(0, -1)}
                    </p>
                    <p className={styles.p2}>{post.name}</p>
                    <hr/>
                    <p className={styles.p3}>@{post.author}</p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.tmpData}>
                        <FontAwesomeIcon icon={faStar} className={styles.rating_icon}></FontAwesomeIcon>
                        <i>{post.rating}</i>
                    </div>
                    <Link to={`post/${post.id}`} className={styles.goto_button}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}