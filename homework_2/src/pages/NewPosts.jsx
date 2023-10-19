// import { useNavigate } from "react-router-dom";
// import { routes } from "../App";
// import {useEffect, useState} from "react";
// import {API} from "../api";

import {useState} from "react";
import PostItem from "../components/PostItem";
import {routes} from "../App";
import {useNavigate} from "react-router-dom";

const NewPosts = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([
        {id: 1, title: "Add your post"}
    ])

    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title
        }
        setPosts([...posts, newPost])
        setTitle("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(routes.posts);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Post title..."
                />
                <button>Add post</button>
            </form>
            <h1>Post list</h1>
            {posts.map((post,index) =>
                <PostItem number={index + 1} key={post.id} post={post}/>
            )}
        </>
    )
}
export default NewPosts;
