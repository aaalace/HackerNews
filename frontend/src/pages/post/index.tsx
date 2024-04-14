import {useGetPostByIdQuery} from "../../store/api/posts-api.ts";
import {Link, useParams} from "react-router-dom";
import {useGetPostCommentsCountQuery, useGetPostRootCommentsQuery} from "../../store/api/comments-api.ts";

export function Post() {
    const {id} = useParams();
    const post = useGetPostByIdQuery(id ?? "0").data;
    const rootComments = useGetPostRootCommentsQuery(id ?? "0").data;
    const commentsCount = useGetPostCommentsCountQuery(id ?? "0").data;

    return (
        <div>
            <Link to="/">Home</Link>
            {post ? <p>{post.name}</p> : "Post do not exists"}
            {commentsCount ? <p>{commentsCount}</p> : 0}
            {rootComments ? (
                rootComments.map(com => <p key={com.id}>{com.content}</p>)
            ) : (
                <p>No comments</p>
            )}
        </div>
    )
}