import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../api";


const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let url = "/posts";
        const getPosts = async () => {
            const response = await API.get(url);
            setPosts(response.data.posts);
        };
        getPosts();
    }, []);


    return (
        <div>
            PostsPage
            <ol>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};
export default PostsPage;