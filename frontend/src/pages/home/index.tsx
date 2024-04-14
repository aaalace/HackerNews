import {useGetPostsQuery} from "../../store/api/posts-api.ts";
import {Link} from "react-router-dom";

export function Home() {
    const posts = useGetPostsQuery().data;

    return (
        <div>
            {posts ? (
                posts.map(post => <Link key={post.id} to={`/post/${post.id}`}><p>{post.name}</p></Link>)
            ) : (
                "Post were not added yet, sorry"
            )}
        </div>
    )
}