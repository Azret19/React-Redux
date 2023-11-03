import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {fetchPosts} from "../store/postSlice";
import {deletePosts} from "../store/postSlice";

export const postsSelector = (state) => state.posts

const PostList = () => {
    const {items, loading, error} = useSelector(postsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (error) return <p>Error: {error}</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div>
                {items.map((item)=> (
                <div key={item.id}>
                    <h2>
                        {item.title}
                    </h2>
                    <div>
                        <button
                            onClick={() => dispatch(deletePosts(item.id))}
                        >
                         Удалить
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default PostList