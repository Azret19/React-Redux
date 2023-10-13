import {useEffect, useState} from "react";
import axios from "axios";

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get("https://dummyjson.com/posts")
            setPosts(response.data.posts)
        }
        getPosts()
    }, [])
    return (
        <div>PostsPage
            <ol>
                {posts.map(post => (
                    <li key={post.id}>{post.title} </li>
                ))}
            </ol>
        </div>
    )
}
export default PostsPage