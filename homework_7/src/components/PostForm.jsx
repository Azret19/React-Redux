import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {asyncCreatePosts} from "../store/postSlice";
import {postsSelector} from "./PostList";

const PostForm = () => {
    const {items, loading, error} = useSelector(postsSelector);
    const [newPosts, setNewPosts] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newPosts) return;

        dispatch(asyncCreatePosts(newPosts));
        setNewPosts('');
    }

    if (error) return <p>Error: {error}</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={newPosts}
                        onChange={(e) => setNewPosts(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Добавить пост</button>
                </div>
                <h1>Post list</h1>
                {items.map((item)=>(
                    <div key={item.id}>
                        {item.title}
                    </div>
                ))}
            </form>
        </>
    )
}

export default PostForm

