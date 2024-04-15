import styles from "./replies-list.module.css"
import { useGetRootChildCommentQuery } from "../../../store/api/comments-api.ts";
import { Reply } from "../reply";

type ChildCommentIds = {
    postId: number,
    commentId: number
}

export function RepliesList({commentId, postId}: ChildCommentIds) {
    const commentIds: ChildCommentIds = {
        postId: postId,
        commentId: commentId
    }

    const replies = useGetRootChildCommentQuery(commentIds).data;

    return (
        <div className={styles.replies_list}>
            {replies ? (
                replies.map(repl =>
                    <Reply key={repl.id} reply={repl}/>
                )
            ) : (
                "No replies"
            )}
        </div>
    )
}``