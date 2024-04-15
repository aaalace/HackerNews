import styles from "./comment.module.css"
import { IComment } from "../../../@types/comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { RepliesList } from "../replies-list";
import { useState } from "react";

type CommentProp = {
    comment: IComment,
    postId: number
}

export function Comment({comment, postId}: CommentProp) {
    const [repliesOpened, setRepliesOpened] = useState<boolean>(false);

    return (
        <div className={styles.container}>
            <div className={styles.left_col}>
                <img alt="avatar" className={styles.avatar} src="/user_default.jpg"></img>
                <div className={repliesOpened ? styles.stick : ""}></div>
            </div>
            <div className={styles.comment_body}>
                <div className={styles.comment_head}>
                    @{comment.author}
                </div>
                <p className={styles.comment_content}>
                    {comment.content}
                </p>
                {comment.replies_count > 0 ? (
                    <div>
                        <div className={styles.comment_footer} onClick={() => setRepliesOpened(!repliesOpened)}>
                            <FontAwesomeIcon
                                icon={repliesOpened ? faChevronUp : faChevronDown}
                                className={styles.repl_open}
                            >
                            </FontAwesomeIcon>
                            {comment.replies_count}
                        </div>
                        {repliesOpened ? (
                            <RepliesList commentId={comment.id} postId={postId}/>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </div>
    )
}