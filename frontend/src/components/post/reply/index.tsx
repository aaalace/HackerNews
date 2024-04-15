import styles from "./reply.module.css"
import { IComment } from "../../../@types/comment";

type ReplyProp = {
    reply: IComment
}

export function Reply({reply}: ReplyProp) {

    return (
        <div className={styles.container}>
            <div className={styles.left_col}>
                <img alt="avatar" className={styles.avatar} src="/user_default.jpg"></img>
            </div>
            <div className={styles.comment_body}>
                <div className={styles.comment_head}>
                    @{reply.author}
                </div>
                <p className={styles.comment_content}>
                    {reply.content}
                </p>
            </div>
        </div>
    )
}