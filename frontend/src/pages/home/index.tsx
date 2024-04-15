import { useGetPostsQuery } from "../../store/api/posts-api.ts";
import { HeadPost } from "../../components/home/head-post";
import { Post } from "../../components/home/post"
import styles from "./home.module.css"
import { Panel } from "../../components/home/panel";

export function Home() {
    const {
        data: posts,
        refetch: refetchPosts,
    } = useGetPostsQuery(null, {
        pollingInterval: 60000,
        skipPollingIfUnfocused: true,
    });

    return (
        <div className={styles.home_container}>
            <div className={styles.panel_container}>
                <Panel upd={refetchPosts} title="Recent news"/>
            </div>
            {posts ? (
                <div>
                    <HeadPost post={posts[0]}/>
                    {posts.slice(1).map(post => <Post key={post.id} post={post}/>)}
                </div>
            ) : null
            }
        </div>
    )
}