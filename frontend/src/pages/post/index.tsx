import { useGetPostByIdQuery } from "../../store/api/posts-api.ts";
import { Link, useParams } from "react-router-dom";
import { useGetPostCommentsCountQuery, useGetPostRootCommentsQuery } from "../../store/api/comments-api.ts";
import styles from "./post.module.css"
import { getDateFormatted } from "../../utils/getDateFormatted.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Comment } from "../../components/post/comment";
import { Panel } from "../../components/home/panel";

export function Post() {
    // 0 - reserved id for unexpected situations
    const id = useParams().id ?? "0";

    const post = useGetPostByIdQuery(id).data;
    const {
        data: rootComments,
        refetch: refetchComments,
    } = useGetPostRootCommentsQuery(id);
    const {
        data: commentsCount,
        refetch: refetchCount,
    } = useGetPostCommentsCountQuery(id);

    const updateComments = () => {
        refetchComments()
        refetchCount()
    }

    return (
        <div className={styles.wrapper}>
            {post ? (
                <div className={styles.nav}>
                    <Link className={styles.nav_link} to="/">News</Link>
                    <p className={styles.nav_sep}>{'>'}</p>
                    <Link className={styles.nav_link} to={`/post/${post.id}`}>{post ? post.name : ""}</Link>
                </div>
            ) : (
                <Link className={styles.nav_link} to="/">Back to news</Link>
            )}
            {post ? (
                <div className={styles.container}>
                    <div className={styles.data_container}>
                        <div className={styles.head_container}>
                            <Link className={styles.redirect_link_h3} to={post.link}>
                                <h3>{post.name}</h3>
                            </Link>
                            <Link className={styles.redirect_link} to={post.link}>
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    className={styles.reload_button}
                                >
                                </FontAwesomeIcon>
                            </Link>
                        </div>
                        <div className={styles.image_container}>
                            <img alt="image" className={styles.image} src="/mock.jpg"></img>
                        </div>
                        <div className={styles.add_data_container}>
                            <div className={styles.add_data}>
                                <div className={styles.author_container}>
                                    <img alt="image" className={styles.author_image} src="/user_default.jpg"></img>
                                    <div className={styles.author_text_data}>
                                        <p>@{post.author}</p>
                                        <p className={styles.prof}>Author</p>
                                    </div>
                                </div>
                                <hr/>
                                <p className={styles.add_info}>
                                    Published <b>·</b> <span>{getDateFormatted(post.date)}</span>
                                </p>
                                <p className={styles.add_info}>
                                    Rating <b>·</b> <span>{post.rating}</span>
                                </p>
                            </div>
                            <div className={styles.comments_container}>
                                <Panel upd={() => updateComments()} title={`Comments (${commentsCount ? commentsCount: 0})`}/>
                                <div className={styles.comments_list}>
                                    {rootComments ? (
                                        rootComments.map(com =>
                                            <Comment key={com.id} comment={com} postId={post.id}></Comment>
                                            // Comment component с пропсом opened и если true то там вызывать получение ответов
                                        )
                                    ) : (
                                        <p>No comments</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                "Sorry, post do not exists :("
            )}
        </div>
    )
}