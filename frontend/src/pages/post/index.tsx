import { useGetPostByIdQuery } from "../../store/api/posts-api.ts";
import { Link, useParams } from "react-router-dom";
import { useGetPostCommentsCountQuery, useGetPostRootCommentsQuery } from "../../store/api/comments-api.ts";

export function Post() {
    // 0 - reserved id for unexpected situations
    const id = useParams().id ?? "0";

    const post = useGetPostByIdQuery(id).data;
    const rootComments = useGetPostRootCommentsQuery(id).data;
    const commentsCount = useGetPostCommentsCountQuery(id).data;

    const commentClickHandler = (parent_id: number) => {
        // через Refs надо че то как то
    }

    return (
        <div>
            {/*// navigation to home panel*/}
            <div>
                <Link to="/">Home</Link>
            </div>
            {post ? (
                // post container
                <div>
                    {/*all post data*/}
                    <div>
                        <p>{post.name}</p>
                    </div>
                    {/*// comments container*/}
                    <div>
                        {/*// comments container header*/}
                        <div>
                            <p>comments count: {commentsCount ? `${commentsCount}` : 0}</p>
                        </div>

                        {/*// comments-list*/}
                        <div>
                            {rootComments ? (
                                rootComments.map(com =>
                                    // Comment component с пропсом opened и если true то там вызывать получение ответов
                                    <p onClick={() => commentClickHandler(com.id)} key={com.id}>{com.content}</p>
                                )
                            ) : (
                                <p>No comments</p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                "Post do not exists"
            )}
        </div>
    )
}